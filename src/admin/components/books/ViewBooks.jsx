import React, { useEffect, useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import Swal from "sweetalert2";
// import { MoreVert } from '@mui/icons-material';
import GridTable from "../GridTable";
import { deleteBook, deleteManyBooks, getBooks } from "../../../../services/bookService";

const ViewBooks = () => {
  const [rows, setRows] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBooks();
        const formattedRows = data.map((item, index) => ({
          id: item._id || index + 1,
          No: index +1,
          cover: item.image,
          title: item.title || "N/A",
          description: `${item.description.slice(0, 30)}...` || "N/A",
          category: `${item.category.name}` || "N/A",
        }));
        setRows(formattedRows);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    { field: "No", headerName: "Index", flex: 1, minWidth: 150 },
    {
      field: "cover",
      headerName: "Cover",
      flex: 1,
      minWidth: 150,
      editable: true,
      renderCell: (params) => (
        <img
          src={params.value}
          className="max-w-[100px] max-h-[100px] py-2 object-cover"
          alt="Book Cover"
        />
      ),
    },
    {
      field: "title",
      headerName: "Title",
      flex: 1,
      minWidth: 150,
      editable: true,
    },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
      minWidth: 150,
      editable: true,
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
      minWidth: 150,
      editable: true,
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      minWidth: 150,
      sortable: false,
      renderCell: (params) => (
        <>
          <IconButton onClick={(event) => handleMenuOpen(event, params.row.id)}>
            <BsThreeDotsVertical className="text-white" />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl) && selectedId === params.row.id}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleEdit}>Edit</MenuItem>
            <MenuItem onClick={handleDelete} className="text-red-500">
              Delete
            </MenuItem>
          </Menu>
        </>
      ),
    },
  ];

  // Handle Actions Menu
  const handleMenuOpen = (event, id) => {
    setAnchorEl(event.currentTarget);
    setSelectedId(id);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedId(null);
  };

  // Handle Single Edit
  const handleEdit = () => {
    handleMenuClose();
    navigate(`/dashboard/edit-book/${selectedId}`);
  };

  // Handle Single Delete
  const handleDelete = async () => {
    handleMenuClose();
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to delete this book? This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await deleteBook(selectedId);
        Swal.fire("Deleted!", "The book has been deleted.", "success");
        setRows(rows.filter((row) => row.id !== selectedId));
      } catch (error) {
        console.error("Error deleting book:", error);
      }
    }
  };

  // Handle Bulk Delete
  const handleBulkDelete = async () => {
    if (selectedRows.length === 0) {
      Swal.fire(
        "No Selection",
        "Please select at least one book to delete.",
        "warning"
      );
      return;
    }

    const result = await Swal.fire({
      title: "Are you sure?",
      text: `Do you really want to delete ${selectedRows.length} categories? This action cannot be undone.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete them!",
    });

    if (result.isConfirmed) {
      try {
        const response = await deleteManyBooks(selectedRows);
        if (response.success) {
          setRows(rows.filter((row) => !selectedRows.includes(row.id)));
          setSelectedRows([]);
          Swal.fire(
            "Deleted!",
            "The selected books have been deleted.",
            "success"
          );
        }
      } catch (error) {
        console.error("Error deleting books:", error);
      }
    }
  };

  return (
    <>
      <GridTable
        title={"View Books"}
        handleBulkDelete={handleBulkDelete}
        selectedRows={selectedRows}
        rows={rows}
        columns={columns}
        setSelectedRows={setSelectedRows}
      />
    </>
  );
};

export default ViewBooks;

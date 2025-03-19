import React, { useEffect, useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import Swal from "sweetalert2";
import GridTable from "../GridTable";
import { deleteStudent, getStudents } from "../../../../services/studentService";

const ViewStudents = () => {
  const [rows, setRows] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getStudents();
        const formattedRows = data.map((item, index) => ({
          id: item._id || index + 1,
          name: item.name || "N/A",
          email: item.email || "N/A",
          universityId: item.universityId || "N/A",
          universityName: item.universityName || "N/A",
          status: item.isVerified,
          profilePicture: item.profilePicture || "N/A",
          universityIdCardImage: item.universityIdCardImage || "N/A",
        }));
        setRows(formattedRows);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", flex: 1, minWidth: 150 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 150,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      minWidth: 150,
      editable: true,
    },
    {
      field: "universityId",
      headerName: "University ID",
      flex: 1,
      minWidth: 150,
      editable: true,
    },
    {
      field: "universityName",
      headerName: "University Name",
      flex: 1,
      minWidth: 150,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      minWidth: 150,
      editable: true,
      renderCell: (params) => (
        <span
          className={`${params.value ? "bg-green-600 text-light_text" : "bg-red-600 text-light_text"} px-2 py-1 text-center`}
        >
          {params.value ? "Verified" : "Not Verified"}
        </span>
      ),
    },
    {
      field: "profilePicture",
      headerName: "Profile Picture",
      flex: 1,
      minWidth: 150,
      editable: true,
      renderCell: (params) => (
        <a
          href={params.value}
          target="_blank"
          className="text-zinc-300 underline text-center"
        >
          View Profile Picture
        </a>
      ),
    },
    {
      field: "universityIdCardImage",
      headerName: "University ID Card Image",
      flex: 1,
      minWidth: 150,
      editable: true,
      renderCell: (params) => (
        <a
          href={params.value}
          target="_blank"
          className="text-zinc-300 underline text-center"
        >
          View ID Card
        </a>
      ),
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
    navigate(`/dashboard/edit-student/${selectedId}`);
  };

   // Handle Single Delete
   const handleDelete = async () => {
    handleMenuClose();
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to delete this student? This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await deleteStudent(selectedId);
        Swal.fire("Deleted!", "The student has been deleted.", "success");
        setRows(rows.filter((row) => row.id !== selectedId));
      } catch (error) {
        console.error("Error deleting student:", error);
      }
    }
  };

  // Handle Bulk Delete
  const handleBulkDelete = async () => {};

  return (
    <GridTable
      title={"View Students"}
      handleBulkDelete={handleBulkDelete}
      selectedRows={selectedRows}
      rows={rows}
      columns={columns}
      setSelectedRows={setSelectedRows}
    />
  );
};

export default ViewStudents;

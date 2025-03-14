import React, { useEffect, useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import Swal from "sweetalert2";
import GridTable from "./GridTable";
import { getBorrowedRequests, updateBorrowedRequestStatus } from "../../../services/borrowedService";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const BorrowedRequests = () => {
  // Storage
  const token = JSON.parse(localStorage.getItem("token"));

  // State Variables
  const [rows, setRows] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBorrowedRequests(token);
        console.log(data);
        const formattedRows = data.map((item, index) => ({
          id: item._id || index + 1,
          cover: item.book.image || "N/A",
          title: item.book.title || "N/A",
          author: item.book.author || "N/A",
          email: item.student.email || "N/A",
          universityIdCardImage: item.student.universityIdCardImage || "N/A",
          status: item.status,
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
      field: "cover",
      headerName: "Cover",
      flex: 1,
      minWidth: 150,
      editable: true,
      renderCell: (params) => (
        <a
          href={params.value}
          target="_blank"
          className="text-zinc-300 underline text-center"
        >
          View Book
        </a>
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
      field: "author",
      headerName: "Author",
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
      field: "status",
      headerName: "Status",
      flex: 1,
      minWidth: 150,
      editable: true,
      renderCell: (params) => (
        <span className={`bg-red-600 text-light_text px-2 py-1 text-center`}>
          {params.value}
        </span>
      ),
    },
    {
      field: "permissions",
      headerName: "Permissions",
      flex: 1,
      minWidth: 150,
      sortable: false,
      renderCell: (params) => (
        <>
          <IconButton onClick={(event) => handleMenuOpen(event, params.row.id)}>
            <FaArrowUpRightFromSquare size={20} className="text-white" />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl) && selectedId === params.row.id}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={() => handleStatus("Approved")}>
              Approved
            </MenuItem>
            <MenuItem
              onClick={() => handleStatus("Rejected")}
              className="text-red-500"
            >
              Rejected
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

  // Handle Status
  const handleStatus = async (status) => {
    handleMenuClose();
    try {
      const data = { status };
      const updateStatus = await updateBorrowedRequestStatus(selectedId, data, token);
      if (updateStatus.success) {
        Swal.fire({
          icon: "success",
          title: "Status Updated",
          text: "Borrowed request status updated successfully!",
          confirmButtonText: "OK",
        });
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error updating borrowed request status:", error);
    }
  };

  // Handle Bulk Delete
  const handleBulkDelete = async () => {};

  return (
    <GridTable
      title={"Borrowed Requests"}
      handleBulkDelete={handleBulkDelete}
      selectedRows={selectedRows}
      rows={rows}
      columns={columns}
      setSelectedRows={setSelectedRows}
    />
  );
};

export default BorrowedRequests;

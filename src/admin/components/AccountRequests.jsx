import React, { useEffect, useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Swal from "sweetalert2";
import GridTable from "./GridTable";
import { getAccountRequests, updateAccountRequestStatus } from "../../../services/studentService";

const AccountRequests = () => {
  const [rows, setRows] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAccountRequests();
        const formattedRows = data.map((item, index) => ({
          id: item._id || index + 1,
          No: index + 1,
          name: item.name || "N/A",
          email: item.email || "N/A",
          universityId: item.universityId || "N/A",
          universityName: item.universityName || "N/A",
          status: item.isVerified,
          permissions: "",
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
    { field: "No", headerName: "Index", flex: 1, minWidth: 150 },
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
          className={`${
            params.value
              ? "bg-green-500 text-dark_text"
              : "bg-red-500 text-light_text"
          } px-2 py-1 text-center`}
        >
          {params.value ? "Verified" : "Not Verified"}
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
            <MenuItem onClick={() => handleStatus(true)}>Approved</MenuItem>
            <MenuItem
              onClick={() => handleStatus(false)}
              className="text-red-500"
            >
              Rejected
            </MenuItem>
          </Menu>
        </>
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

  // Handle Bulk Delete
  const handleBulkDelete = async () => {
    if (selectedRows.length === 0) {
      Swal.fire(
        "No Selection",
        "Please select at least one account request to delete.",
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
        const response = await deleteManyAccountRequests(selectedRows);
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
        console.error("Error deleting categories:", error);
      }
    }
  };

  // Handle Status
  const handleStatus = async (status) => {
    handleMenuClose();
    try {
      const data = { status };
      const updateStatus = await updateAccountRequestStatus(selectedId, data);
      if (updateStatus.success) {
        Swal.fire({
          icon: "success",
          title: "Status Updated",
          text: "Account request status updated successfully!",
          confirmButtonText: "OK",
        });
        navigate("/dashboard/view-students");
      }
    } catch (error) {
      console.error("Error updating account request status:", error);
      alert("Failed to update account request status");
    }
  };

  return (
    <GridTable
      title={"Account Requests"}
      handleBulkDelete={handleBulkDelete}
      selectedRows={selectedRows}
      rows={rows}
      columns={columns}
      setSelectedRows={setSelectedRows}
    />
  );
};

export default AccountRequests;

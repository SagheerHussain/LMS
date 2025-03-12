import React, { useEffect, useState } from "react";

import { IconButton, Menu, MenuItem } from "@mui/material";
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from "react-router-dom"; // For navigation
import Swal from "sweetalert2";
import GridTable from "../GridTable";
import { BsThreeDotsVertical } from "react-icons/bs";
import { getAuthors } from "../../../../services/authorService";

const ViewAuthor = () => {
  const [rows, setRows] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const navigate = useNavigate();

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
  };

  // Handle Single Delete
  const handleDelete = async () => {};

  // Handle Bulk Delete
  const handleBulkDelete = async () => {};

  const columns = [
    { field: "id", headerName: "ID", flex: 1, minWidth: 150 },
    {
      field: "author",
      headerName: "Author",
      flex: 1,
      minWidth: 150,
      editable: true,
    },
    {
      field: "slug",
      headerName: "Slug",
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAuthors();
        const formattedRows = data.map((item, index) => ({
          id: item._id || index + 1,
          author: item.name || "N/A",
          slug: item.slug || "N/A",
        }));
        setRows(formattedRows);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <GridTable
        title={"View Authors"}
        handleBulkDelete={handleBulkDelete}
        selectedRows={selectedRows}
        rows={rows}
        columns={columns}
        setSelectedRows={setSelectedRows}
      />
    </>
  );
};

export default ViewAuthor;

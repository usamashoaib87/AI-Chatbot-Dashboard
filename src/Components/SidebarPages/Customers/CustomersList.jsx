import React from "react";
import "./Customers.scss";
import { DataGrid } from "@mui/x-data-grid";
import { TableCell } from "@mui/material";
const columns = [
  { field: "id", headerName: "Attribute Name", width: 300 },
  { field: "firstName", headerName: "Attribute Description", width: 300 },
  { field: "lastName", headerName: "Field Type", width: 300 },

  {
    field: "action",
    headerName: "Action",
    width: 260,
    renderCell: () => (
      <TableCell>
        <select
          name=""
          id=""
          style={{ background: "rgba(241, 241, 242, 1)", height: "30px" }}
        >
          <option value="options">Options</option>
        </select>
      </TableCell>
    ),
  },
];

const rows = [
  { id: "Name", lastName: "Description", firstName: "Type" },
  { id: "Name", lastName: "Description", firstName: "Type" },
  { id: "Name", lastName: "Description", firstName: "Type" },
  { id: "Name", lastName: "Description", firstName: "Type" },
  { id: "Name", lastName: "Description", firstName: "Type" },
  { id: "Name", lastName: "Description", firstName: "Type" },
  { id: "Name", lastName: "Description", firstName: "Type" },
  { id: "Name", lastName: "Description", firstName: "Type" },
  { id: "Name", lastName: "Description", firstName: "Type" },
];
const CustomersList = () => {
  return (
    <div>
      <div
        style={{
          height: 490,
          width: "94%",
          marginLeft: "50px",
          marginTop: "40px",
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default CustomersList;

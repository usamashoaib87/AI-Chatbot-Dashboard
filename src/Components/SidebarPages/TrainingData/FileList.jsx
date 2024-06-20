import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import image from "../../../assets/preview.png";

const FileList = ({ files, viewStyle }) => {
  return (
    <div className="file-list">
      {viewStyle === "list" ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Filename</TableCell>
                <TableCell align="right">Size</TableCell>
                <TableCell align="right">Date</TableCell>
                <TableCell align="right">Storage</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {files.map((files) => (
                <TableRow
                  key={files.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {files.name}
                  </TableCell>
                  <TableCell align="right">{files.size}</TableCell>
                  <TableCell align="right">{files.date}</TableCell>
                  <TableCell align="right">{files.storage}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <div className="grid-view">
          {files.map((files) => (
            <div className="grid-item" key={files.name}>
              <img src={image} alt={files.name} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileList;

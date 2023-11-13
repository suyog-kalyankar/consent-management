import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { TABLE_CELLS } from "../../constants/app-constants";

const DataTable = ({ rows, page, rowsPerPage }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="consent table">
        <TableHead>
          <TableRow>
            {TABLE_CELLS.map((cell, index) => (
              <TableCell key={index} align={`${index > 0 ? "center" : "left"}`}>
                {cell}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows
            .slice(
              (page - 1) * rowsPerPage,
              (page - 1) * rowsPerPage + rowsPerPage
            )
            .map((row) => (
              <TableRow
                hover
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.fname}
                </TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">
                  {row.consents?.map((consent) => consent).join(", ")}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;

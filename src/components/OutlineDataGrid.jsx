import { styled } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const OutlineDataGrid = styled(DataGrid)(({ theme }) => ({
  boxShadow: 2,
  border: 2,
  borderColor: "darkPallete.light",
  "& .MuiDataGrid-columnHeader": {
    backgroundColor: theme.palette.darkPallete.light,
  },
  "& .MuiDataGrid-filler": {
    backgroundColor: "white",
  },
  "& .MuiDataGrid-columnHeader, .MuiDataGrid-cell": {
    borderRight: "1px solid #303030",
  },
  "& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell": {
    borderBottom: "1px solid #f0f0f0",
  },
  "& .MuiDataGrid-row:nth-of-type(even)": {
    backgroundColor: theme.palette.darkPallete.light,
  },
  "& .MuiDataGrid-row:nth-of-type(odd)": {
    backgroundColor: "white",
  },
  "& .cl-id": {
    textAlign: "center",
  },
}));

export default OutlineDataGrid;

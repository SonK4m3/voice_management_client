import { Box } from "@mui/material";
import React from "react";
import OutlineDataGrid from "../../components/OutlineDataGrid";
import CallDirection from "./CallDirection";
import { formatSecond, formatTimestamp } from "../../utils/timeUtil";
import AnswerState from "./AnswerState";
import CallingAction from "./CallingAction";

const columns = [
  {
    field: "stt",
    headerName: "STT",
    width: 90,
    editable: false,
    resizable: false,
    headerAlign: "center",
    headerClassName: "cl-id",
    renderCell: ({ value }) => (
      <div style={{ textAlign: "center" }}>{value}</div>
    ),
  },
  {
    field: "call_direction",
    headerName: "Loại",
    width: 150,
    editable: false,
    resizable: false,
    headerAlign: "center",
    renderCell: ({ value }) => <CallDirection value={value} />,
  },
  {
    field: "site_id",
    headerName: "Tổng đài",
    width: 150,
    editable: false,
    resizable: false,
    headerAlign: "center",
    renderCell: ({ value }) => (
      <div style={{ textAlign: "center" }}>{value}</div>
    ),
  },
  {
    field: "dial_number",
    headerName: "Thuê bao gọi",
    width: 150,
    editable: false,
    resizable: false,
    headerAlign: "center",
    renderCell: ({ value }) => (
      <div style={{ textAlign: "center" }}>{value}</div>
    ),
  },
  {
    field: "msisdn",
    headerName: "Thuê bao đến",
    width: 150,
    editable: false,
    resizable: false,
    headerAlign: "center",
    renderCell: ({ value }) => (
      <div style={{ textAlign: "center" }}>{value}</div>
    ),
  },
  {
    field: "call_length",
    headerName: "Thời gian",
    width: 150,
    editable: false,
    resizable: false,
    headerAlign: "center",
    renderCell: ({ value }) => (
      <div style={{ textAlign: "center" }}>{formatSecond(value)}</div>
    ),
  },
  {
    field: "start_timestamp",
    headerName: "Gọi lúc",
    width: "175",
    editable: false,
    resizable: false,
    headerAlign: "center",
    renderCell: ({ value }) => (
      <div style={{ textAlign: "center" }}>{formatTimestamp(value)}</div>
    ),
  },
  {
    field: "cgcm",
    headerName: "Cuộc gọi chuyển máy",
    width: 150,
    editable: false,
    resizable: false,
    headerAlign: "center",
  },
  {
    field: "answer_state",
    headerName: "T.Thái",
    width: 150,
    editable: false,
    resizable: false,
    headerAlign: "center",
    renderCell: ({ value }) => <AnswerState value={value} />,
  },
  {
    field: "kq",
    headerName: "Kết quả",
    width: 150,
    editable: false,
    resizable: false,
    headerAlign: "center",
  },
  {
    field: "action",
    headerName: "",
    width: 150,
    editable: false,
    resizable: false,
    headerAlign: "center",
    renderCell: ({ row }) => (
      <CallingAction recordingPath={row.recording_path} />
    ),
  },
];

const CallingGrid = ({ callRecordings }) => {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <OutlineDataGrid
        rows={callRecordings.map((item, id) => ({ stt: id + 1, ...item }))}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
        }
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default CallingGrid;

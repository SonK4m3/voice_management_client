import { Box, Typography } from "@mui/material";
import React from "react";
import AudioPlayer from "./AudioPlayer";
import { useGetCdrsQuery } from "../../state/cdrApi";
import CallingSearch from "./CallingSearch";
import CallingGrid from "./CallingGrid";
import { RecordProvider } from "../../layouts/RecordProvider";

const Cdr = () => {
  const { data, isSuccess } = useGetCdrsQuery({
    start: 0,
    limit: 5,
  });

  return (
    <Box width="100%" height="100%">
      <Typography variant="h1" color="darkPallete.light">
        Lịch sử cuộc gọi
      </Typography>
      <Box width="100%" mt={2}>
        <CallingSearch />
      </Box>
      <RecordProvider>
        <Box mt={3} mb={2}>
          <AudioPlayer />
        </Box>

        <Typography variant="h2" color="darkPallete.light">
          Cuộc gọi trực tiếp
        </Typography>
        <Box mt="2rem" bgcolor="white" borderRadius={3}>
          {isSuccess && <CallingGrid callRecordings={data} />}
        </Box>
      </RecordProvider>
    </Box>
  );
};

export default Cdr;

import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import AudioPlayer from "./AudioPlayer";
import { useGetCdrsQuery } from "../../state/cdrApi";
import CallRecordingList from "./CallRecordingList";

const Cdr = () => {
  const { data, isSuccess } = useGetCdrsQuery({
    start: 0,
    limit: 5,
  });

  const [currentRecording, setCurrentRecording] = useState(null);

  const handleClickRecording = (recordPath) => {
    console.log(recordPath);
    setCurrentRecording(recordPath);
  };

  return (
    <Box width="100%" height="100%">
      <Typography variant="h1" color="lightskyblue">
        Calling record
      </Typography>
      <Box mt={3}>
        <AudioPlayer recordPath={currentRecording} />
      </Box>

      <Box mt="2rem" bgcolor="white" borderRadius={3}>
        {isSuccess && (
          <CallRecordingList
            callRecordings={data}
            onClickRecord={handleClickRecording}
          />
        )}
      </Box>
    </Box>
  );
};

export default Cdr;

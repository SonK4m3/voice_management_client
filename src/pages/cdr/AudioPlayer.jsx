import React, { useEffect, useState } from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import ReactPlayer from "react-player";
import { useRecord } from "../../layouts/RecordProvider";

const AudioPlayer = () => {
  const [audioUrl, setAudioUrl] = useState(null);
  const { recordPath } = useRecord();

  const [publicPath, setPublicPath] = useState("");

  useEffect(() => {
    const handleFetchAudio = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_RECORD_URL}/media${recordPath}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch WAV file");
        }
        const blob = await response.blob();
        setAudioUrl(URL.createObjectURL(blob));
      } catch (error) {
        console.error("Error fetching WAV file:", error);
      }
    };

    if (recordPath !== undefined && recordPath !== "" && recordPath !== null) {
      handleFetchAudio();
    }
  }, [recordPath]);

  return (
    <Container>
      <Box width="100%" height="100%" bgcolor="white" borderRadius={3} p={3}>
        <Typography variant="h4" color="initial">
          Recording
        </Typography>
        <ReactPlayer
          url={publicPath}
          controls
          playing
          width="100%"
          height="50px"
        />
        <Button
          variant="contained"
          onClick={() => {
            setPublicPath("0a032020-17e3-4774-b452-2522d426b4ac.wav");
          }}
        >
          Nghe cuộc gọi public
        </Button>
        <Box mt="1rem">
          {audioUrl && (
            <ReactPlayer
              url={audioUrl}
              controls
              playing
              width="100%"
              height="50px"
            />
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default AudioPlayer;

import * as React from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import { formatTimestamp } from "../../utils/timeUtil";

function CallRecordingList({ callRecordings, onClickRecord }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <List dense>
          {callRecordings.map((recording, _id) => (
            <ListItem key={_id} mb={3}>
              <ListItemAvatar>
                <Avatar>
                  {/* You could add initials or a call icon here */}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                sx={{
                  "&:hover": {
                    color: "secondary.light",
                    cursor: "pointer",
                  },
                }}
                primary={`${recording.dial_number} - ${recording.answer_state}`}
                secondary={`${formatTimestamp(recording.start_timestamp)} - ${
                  recording.call_length
                }s`}
                onClick={() => onClickRecord(recording.recording_path)}
              />
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
}

export default CallRecordingList;

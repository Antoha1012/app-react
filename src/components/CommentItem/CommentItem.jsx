import React from "react";
import { Grid, Box, Typography } from "@material-ui/core";

const CommentItem = ({ comment }) => {
  const { email, name, body } = comment;
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <Box width="50vw" py="0.5rem" borderBottom={1}>
        <Box>
          <Typography
            variant="subtitle2"
            gutterBottom
            style={{ wordWrap: "break-word" }}
          >
            {email}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h6"
            gutterBottom
            style={{ wordWrap: "break-word" }}
          >
            {name}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="body1"
            gutterBottom
            style={{ wordWrap: "break-word" }}
          >
            {body}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default CommentItem;

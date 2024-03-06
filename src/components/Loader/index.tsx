import { Box, CircularProgress } from "@mui/material";

export const Loader = () => {
  return (
    <Box
      width="100%"
      height="300px"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <CircularProgress size="70px" />
    </Box>
  );
};

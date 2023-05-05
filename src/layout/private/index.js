import { Box } from "@mui/material";
import Headers from "../header";
import Footer from "../footer";

export default function PrivateLayout({ children }) {
  return (
    <Box
      sx={{
        overflow: "hidden",
        height: "100%",
      }}
    >
      <Headers />
      <Box sx={{ marginTop: "150px", minHeight: 120 }}>{children}</Box>
      <Footer />
    </Box>
  );
}

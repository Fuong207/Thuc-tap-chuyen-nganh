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
      <Box sx={{ marginTop: "150px", minHeight: 120, marginBottom: "50px" }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
}

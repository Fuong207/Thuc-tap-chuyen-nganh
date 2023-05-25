import { Box, Typography } from "@mui/material";
import BoxBody from "../../components/box-body";
import { NAVIGATE_DATA } from "../../data/navigate";

export default function Footer() {
  return (
    <Box sx={{
      position: "absolute",
      bottom: 0,
      width: "100%",
    }}>
      <Box textAlign="center">
        <BoxBody>
          <Box>
            <img
              src="https://bantranh.com/wp-content/uploads/2019/02/phuong-thuc-thanh-toan.png"
              alt=""
            />
          </Box>
        </BoxBody>
      </Box>
      <Box>
        <BoxBody>
          <Box display="flex" justifyContent="center" alignItems="center">
            {NAVIGATE_DATA.map((value) => (
              <Typography
                color="#ccc"
                padding={2}
                fontSize="0.85em"
                textAlign="center"
                textTransform="uppercase"
                lineHeight="1.2"
                sx={{ cursor: "pointer" }}
              >
                {value}
              </Typography>
            ))}
          </Box>
        </BoxBody>
      </Box>
    </Box>
  );
}

import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import BoxBody from "../../components/box-body";
import { NAVIGATE_DATA } from "../../data/navigate";
import Icon from "../../components/icon";

export default function Headers() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: 150,
        position: "fixed",
        top: 0,
      }}
    >
      <Box sx={{ height: 30, backgroundColor: "#d36b97" }}>
        <BoxBody>
          <Box display="flex" justifyContent="flex-end" alignItems="center">
            {NAVIGATE_DATA.map((value) => (
              <Typography
                color="white"
                paddingLeft={1}
                paddingRight={1}
                fontSize="0.8em"
                sx={{ cursor: "pointer" }}
              >
                {value}
              </Typography>
            ))}
          </Box>
        </BoxBody>
      </Box>
      <Box sx={{ height: 70 }}>
        <BoxBody>
          <Box display="flex" height="100%" alignItems="center">
            <img
              src="https://bantranh.com/wp-content/uploads/2019/02/logo-2.png"
              alt=""
              height="51px"
            />
            <TextField
              placeholder="Tìm kiếm sản phẩm"
              InputProps={
                <InputAdornment position="end">
                  <IconButton onClick={() => {}}>
                    <Icon name="search" />
                  </IconButton>
                </InputAdornment>
              }
            />
          </Box>
        </BoxBody>
      </Box>
      <Box sx={{ height: 50, backgroundColor: "#6c5070" }}></Box>
    </Box>
  );
}

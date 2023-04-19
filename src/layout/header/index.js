import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import BoxBody from "../../components/box-body";
import { NAVIGATE_DATA } from "../../data/navigate";
import { CATEGORY_DATA } from "../../data/category";
import Cart from "../../feature/cart";
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
          <Box display="flex" justifyContent="end" alignItems="center">
            {NAVIGATE_DATA.map((value) => (
              <Typography
                color="white"
                padding={1}
                fontSize="0.8em"
                sx={{ cursor: "pointer" }}
              >
                {value}
              </Typography>
            ))}
          </Box>
        </BoxBody>
      </Box>
      <Box sx={{ height: 70, backgroundColor: "white" }}>
        <BoxBody>
          <Box
            display="flex"
            height="100%"
            justifyContent="space-between"
            alignItems="center"
          >
            <img
              src="https://bantranh.com/wp-content/uploads/2019/02/logo-2.png"
              alt=""
              height="51px"
            />
            <TextField
              sx={{ margin: "0 32px" }}
              id="margin-none"
              fullWidth
              size="small"
              placeholder="Tìm kiếm sản phẩm"
            />
            <Button variant="outlined">
              <Icon name="search" />
            </Button>
            <Cart />
          </Box>
        </BoxBody>
      </Box>
      <Box
        sx={{ height: 50, backgroundColor: "#6c5070" }}
        display="flex"
        height="100%"
        justifyContent="space-around"
        alignItems="center"
      >
        {CATEGORY_DATA.map((value) => (
          <Typography
            color="white"
            padding={1}
            fontSize="0.8em"
            sx={{ cursor: "pointer" }}
          >
            {value.name}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}

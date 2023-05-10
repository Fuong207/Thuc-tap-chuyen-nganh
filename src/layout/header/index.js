import {
  Box,
  Button,
  IconButton,
  List,
  Popover,
  TextField,
  Typography,
} from "@mui/material";
import BoxBody from "../../components/box-body";
import { NAVIGATE_DATA } from "../../data/navigate";
import { CATEGORY_DATA } from "../../data/category";
import Icon from "../../components/icon";
import { useState } from "react";
import { getSessionItem } from "../../ultis/store";
import CardItem from "../../components/card-item";
import { isEmpty } from "lodash";
import { useClasses } from "../../theme/helper";
import style from "./style";
import { useNavigate } from "react-router";
import { ROUTE } from "../../router/config";

export default function Headers() {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useClasses(style);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const onClose = () => {
    setAnchorEl(null);
  };

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const cardArr = getSessionItem("cards") || [];

  return (
    <Box
      sx={{
        width: "100vw",
        height: 150,
        position: "fixed",
        top: 0,
        zIndex: 1,
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
              sx={{ ml: 2 }}
              id="margin-none"
              fullWidth
              size="small"
              placeholder="Tìm kiếm sản phẩm"
            />
            <Button variant="outlined" sx={{ ml: 1 }}>
              <Icon name="search" />
            </Button>
            <IconButton sx={{ ml: 1 }} onClick={(e) => handleOpen(e)}>
              <Icon name="card" size={30} />
              <Typography color="red">{cardArr.length}</Typography>
            </IconButton>
            <Popover
              open={open}
              anchorEl={anchorEl}
              onClose={onClose}
              PaperProps={{
                variant: "caret",
                sx: { overflow: "hidden" },
              }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              className={classes.root}
            >
              {isEmpty(cardArr) ? (
                <Box sx={{ width: 300, height: 100 }} alignItems="center">
                  <Typography textAlign="center">
                    Không có mặt hàng nào
                  </Typography>
                </Box>
              ) : (
                <Box sx={{ width: 300 }}>
                  <List className={classes.list}>
                    {cardArr.map((item) => (
                      <CardItem
                        key={item.id}
                        nameProc={item.nameProc}
                        price={item.price}
                        quantity={item.quantity}
                        imageUrl={item.imageUrl}
                      />
                    ))}
                  </List>
                  <Button
                    variant="contained"
                    sx={{ mb: 1, ml: 1, mr: 1, mt: 1, width: 200 }}
                    onClick={() => navigate(ROUTE.CART)}
                  >
                    Đến giỏ hàng
                  </Button>
                </Box>
              )}
            </Popover>
          </Box>
        </BoxBody>
      </Box>
      <Box sx={{ height: 50, backgroundColor: "#6c5070" }}>
        <BoxBody>
          <Box
            display="flex"
            height="100%"
            justifyContent="space-around"
            alignItems="center"
            textAlign="center"
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
        </BoxBody>
      </Box>
    </Box>
  );
}

import { Breadcrumbs, Typography } from "@mui/material";
import BoxBody from "../../components/box-body";
import { Link } from "react-router-dom";

function Cart() {
  const breadcrumbs = [
    <Link to="/" style={{ textDecoration: "none" }}>
      <Typography>Trang chủ</Typography>
    </Link>,
    <Typography key="3" color="text.primary">
      Giỏ hàng của bạn
    </Typography>,
  ];
  return (
    <BoxBody>
      <Breadcrumbs separator="/" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
    </BoxBody>
  );
}
export default Cart;

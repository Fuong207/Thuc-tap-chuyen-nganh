import {
  Box,
  Breadcrumbs,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import BoxBody from "../../components/box-body";
import { Link, useParams } from "react-router-dom";
import { getListProduct } from "../../data/product";
import { useClasses } from "../../theme/helper";
import style from "./style";
import { convertWithCommas } from "../../ultis/number";
import CardProduct from "../../components/product-cart";

export default function ProductDetail() {
  const classes = useClasses(style);
  const { id } = useParams();
  const listItem = getListProduct();

  const item = listItem.find((item) => item.id === +id);

  console.log(item);

  const breadcrumbs = [
    <Link to="/" style={{ textDecoration: "none" }}>
      <Typography>Trang chủ</Typography>
    </Link>,
    <Typography key="3" color="text.primary">
      {item.nameProc}
    </Typography>,
  ];
  return (
    <BoxBody>
      <Breadcrumbs separator="/" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      <Grid container spacing={1} mt={2}>
        <Grid item xs={6} xl={12}>
          <img
            src={item.imageUrl}
            alt={item.nameProc}
            className={classes.img}
          />
        </Grid>
        <Grid item xs={4} xl={12} >
          <Typography variant="h4" mt={1} mb={1}>
            {item.nameProc}
          </Typography>
          <Typography color="#df6a6a">{`${convertWithCommas(
            item.price
          )} đ`}</Typography>
          <Typography color="#777">{item.nameCate}</Typography>
          <Typography color="#777">{item.size}</Typography>
          <Box mt={1} sx={{display: "flex", justifyContent: "start", alignItems:"center"}}>
            <TextField type="number" size="small" sx={{width: "80px"}}/>
            <Button sx={{marginLeft: 2,backgroundColor: "#df6a6a", color: "#fff", fontSize: "1em", textAlign: "center"}}>Thêm vào giỏ</Button>
          </Box>
          <Button fullWidth sx={{ marginTop: 2, width: "250px", backgroundColor: "#fb6e2e", color: "#fff", fontSize: "1em", textAlign: "center", }}>
            Mua ngay
          </Button>
        </Grid>
        <Grid item xs={2} xl={12} color="#777">
          <Typography  variant="h6">Đặt hàng và thanh toán</Typography>
          <Typography>Đặt hàng trực tuyến trên website.</Typography>
          <Typography>Đặt hàng qua điện thoại (zalo): 0983568361</Typography>
          <Typography>
            Thanh toán tiền mặt trực tiếp hoặc chuyển khoản
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">Mô tả</Typography>
          <Typography>{item.description}</Typography>
        </Grid>
        <Grid item xs={12} mt={2}>
          <Typography variant="h5">Sản phẩm tương tự</Typography>
        </Grid>
        {listItem.slice(0, 4).map((item) => (
          <Grid item xs={3} xl={6} key={item.id}>
            <CardProduct
              image={item.imageUrl}
              name={item.nameProc}
              price={convertWithCommas(item.price)}
              cateName={item.nameCate}
            />
          </Grid>
        ))}
      </Grid>
    </BoxBody>
  );
}

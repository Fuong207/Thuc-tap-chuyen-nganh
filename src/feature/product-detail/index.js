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
    <BoxBody >
      <Breadcrumbs separator="/" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>

      <Grid container spacing={1} mt={2} >
        <Grid item xs={6} xl={12} sx={{ display: "flex", justifyContent: "around", alignItems: "center", position: "relative"}}>
          <img style={{ width: "50%", maxHeight: "70vh" }}
            src={item.imageUrl}
            alt={item.nameProc}
            className={classes.img}

          />
          <Box sx={{ marginLeft: "24px", position: "absolute", top: 0, left: "50%"}}>
            <Grid item xs={4} xl={12}  >
              <Typography variant="h4" mt={1} mb={1}>
                {item.nameProc}
              </Typography>
              <Typography color="#df6a6a" sx={{margin: "12px 0"}}>{`${convertWithCommas(
                item.price
              )} đ`}</Typography>
              <Typography color="#777">{item.nameCate}</Typography>
              <Typography color="#777">{item.size}</Typography>

            </Grid>
            <Box mt={1} sx={{ display: "flex", justifyContent: "start", alignItems: "center", margin: "16px 0" }}>
              <TextField type="number" size="small" sx={{ width: "80px" }} />
              <Button sx={{ marginLeft: 2, backgroundColor: "#df6a6a", color: "#fff", fontSize: "1em", textAlign: "center" }}>Thêm vào giỏ</Button>
            </Box>
            <Button sx={{ marginTop: 2, width: "250px", backgroundColor: "#fb6e2e", color: "#fff", fontSize: "1em", textAlign: "center", }}>
              Mua ngay
            </Button>
          </Box>
          <Grid item xs={2} xl={12} color="#777777" sx={{position: "absolute", top: 0, left: "80%", marginLeft: 2}} >
            <Typography sx={{ marginTop: 1, fontWeight: "600"}} variant="h6">Đặt hàng và thanh toán</Typography>
            <Typography sx={{ marginTop: 1, display: "flex", alignItems: "center"}}>
              <img style={{marginRight: "6px"}} src="https://bantranh.com/wp-content/uploads/2021/06/dt1.png"/>
              Đặt hàng trực tuyến trên website.
              </Typography>
            <Typography sx={{ marginTop: 1, display: "flex", alignItems: "center" }}>
            <img style={{marginRight: "6px"}} src="https://bantranh.com/wp-content/uploads/2021/06/dt2.png"/>
              Đặt hàng qua điện thoại (zalo): 0983568361
              </Typography>
            <Typography sx={{ marginTop: 1, display: "flex", alignItems: "center" }}>
            <img style={{marginRight: "6px"}} src="	https://bantranh.com/wp-content/uploads/2021/06/dt3.png"/>
              Thanh toán tiền mặt trực tiếp hoặc chuyển khoản
            </Typography>
        </Grid>    
        </Grid>

      
        <Grid item xs={12}>
          <Typography variant="h5" sx={{color:"#555", fontWeight:"bolder"}}>Mô tả</Typography>
          <Typography sx={{ marginTop: 1, color: "#777", margin:"16px 0" }}>{item.description}</Typography>
          <Typography variant="h5" sx={{color:"#555", fontWeight:"bolder"}}>Thông số kỹ thuật</Typography>
          <Box sx={{display:"flex", justifyContent:"start", alignItems:"center", color: "#777"}}>
          <Typography sx={{display:"block", width:"120px", fontWeight:"500"}} variant="h7">CHẤT LIỆU</Typography>
          <Typography sx={{ margin: "16px 64px" }}>{item.material}</Typography>
          </Box>
          <Box sx={{display:"flex", justifyContent:"start", alignItems:"center", color: "#777"}}>
          <Typography sx={{display:"block", width:"120px", fontWeight:"500"}} variant="h7">KÍCH THƯỚC</Typography>
          <Typography sx={{ margin: "16px 64px" }}>{item.size}</Typography>
          </Box>
          <Box sx={{display:"flex", justifyContent:"start", alignItems:"center", color: "#777"}}>
          <Typography sx={{display:"block", width:"120px", fontWeight:"500"}} variant="h7">TRANH HỌA SĨ</Typography>
          <Typography sx={{ margin: "16px 64px" }}>{item.author}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} mt={2}>
          <Typography sx={{ marginBottom: 1 }} variant="h5">Sản phẩm tương tự</Typography>
        </Grid >
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

import {
  Box,
  Breadcrumbs,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import BoxBody from "../../components/box-body";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getListProduct } from "../../data/product";
import { useClasses } from "../../theme/helper";
import style from "./style";
import { convertWithCommas } from "../../ultis/number";
import CardProduct from "../../components/product-cart";
import { useEffect, useState } from "react";
import { getSessionItem, setSessionItem } from "../../ultis/store";
import { isEmpty } from "lodash";
import { ROUTE } from "../../router/config";
import { scrollToTop } from "../../ultis/scroll";

export default function ProductDetail() {
  const classes = useClasses(style);
  const { id } = useParams();
  const listItem = getListProduct();
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const item = listItem.find((item) => item.id === id);

  const cardArr = getSessionItem("cards") || [];

  useEffect(() => {
    scrollToTop();
    setQuantity(1);
  }, [id]);

  const handleAdd = () => {
    const old = cardArr.find((card) => item.id === card.id);
    if (!isEmpty(old)) {
      const itemOther = cardArr.filter((card) => card.id !== item.id);
      setSessionItem("cards", [
        ...itemOther,
        {
          ...item,
          quantity,
        },
      ]);
    } else {
      setSessionItem("cards", [
        ...cardArr,
        {
          ...item,
          quantity,
        },
      ]);
    }
    alert("Đã thêm thành công");
  };

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
        <Grid item xs={6} xl={6}>
          <img
            src={item.imageUrl}
            alt={item.nameProc}
            className={classes.img}
          />
        </Grid>
        <Grid item xs={6} xl={4}>
          <Typography variant="h4" mt={1} mb={1}>
            {item.nameProc}
          </Typography>
          <Typography
            color="#df6a6a"
            sx={{ margin: "12px 0" }}
          >{`${convertWithCommas(item.price)} đ`}</Typography>
          <Typography color="#777">{item.nameCate}</Typography>
          <Typography color="#777">{item.size}</Typography>
          <Box
            mt={1}
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              margin: "16px 0",
            }}
          >
            <TextField
              type="number"
              size="small"
              sx={{ width: "80px" }}
              onChange={(e) => setQuantity(+e.target.value)}
              value={quantity}
            />
            <Button sx={{ ml: 1 }} variant="outlined" onClick={handleAdd}>
              Thêm vào giỏ
            </Button>
          </Box>
          <Button variant="contained" fullWidth>
            Mua ngay
          </Button>
        </Grid>
        <Grid item xs={12} xl={2}>
          <Typography sx={{ marginTop: 1, fontWeight: "600" }} variant="h6">
            Đặt hàng và thanh toán
          </Typography>
          <Typography
            sx={{ marginTop: 1, display: "flex", alignItems: "center" }}
          >
            <img
              style={{ marginRight: "6px" }}
              src="https://bantranh.com/wp-content/uploads/2021/06/dt1.png"
              alt=""
            />
            Đặt hàng trực tuyến trên website.
          </Typography>
          <Typography
            sx={{ marginTop: 1, display: "flex", alignItems: "center" }}
          >
            <img
              style={{ marginRight: "6px" }}
              src="https://bantranh.com/wp-content/uploads/2021/06/dt2.png"
              alt=""
            />
            Đặt hàng qua điện thoại (zalo): 0983568361
          </Typography>
          <Typography
            sx={{ marginTop: 1, display: "flex", alignItems: "center" }}
          >
            <img
              style={{ marginRight: "6px" }}
              src="	https://bantranh.com/wp-content/uploads/2021/06/dt3.png"
              alt=""
            />
            Thanh toán tiền mặt trực tiếp hoặc chuyển khoản
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ color: "#555", fontWeight: "bolder" }}>
            Mô tả
          </Typography>
          <Typography sx={{ marginTop: 1, color: "#777", margin: "16px 0" }}>
            {item.description}
          </Typography>
          <Typography variant="h5" sx={{ color: "#555", fontWeight: "bolder" }}>
            Thông số kỹ thuật
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              color: "#777",
            }}
          >
            <Typography
              sx={{ display: "block", width: "120px", fontWeight: "500" }}
              variant="h7"
            >
              CHẤT LIỆU
            </Typography>
            <Typography sx={{ margin: "16px 64px" }}>
              {item.material}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              color: "#777",
            }}
          >
            <Typography
              sx={{ display: "block", width: "120px", fontWeight: "500" }}
              variant="h7"
            >
              KÍCH THƯỚC
            </Typography>
            <Typography sx={{ margin: "16px 64px" }}>{item.size}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              color: "#777",
            }}
          >
            <Typography
              sx={{ display: "block", width: "120px", fontWeight: "500" }}
              variant="h7"
            >
              TRANH HỌA SĨ
            </Typography>
            <Typography sx={{ margin: "16px 64px" }}>{item.author}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} mt={2}>
          <Typography sx={{ marginBottom: 1 }} variant="h5">
            Sản phẩm tương tự
          </Typography>
        </Grid>
        {listItem.slice(0, 4).map((item) => (
          <Grid item xs={3} xl={6} key={item.id}>
            <CardProduct
              image={item.imageUrl}
              name={item.nameProc}
              price={convertWithCommas(item.price)}
              cateName={item.nameCate}
              onClick={() => navigate(ROUTE.DETAIL.replace(":id", item.id))}
            />
          </Grid>
        ))}
      </Grid>
    </BoxBody>
  );
}

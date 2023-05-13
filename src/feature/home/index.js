import { Button, Grid, Typography } from "@mui/material";
import BoxBody from "../../components/box-body";
import IntroPage from "./intro";
import CategoryCard from "../../components/category-card";
import { LIST_PRODUCT_DATA } from "../../data/list-product";
import { CATEGORY_DATA } from "../../data/category";
import { getListProduct } from "../../data/product";
import { useState } from "react";
import CardProduct from "../../components/product-cart";
import { convertWithCommas } from "../../ultis/number";
import { useNavigate } from "react-router";
import { ROUTE } from "../../router/config";

function HomePage() {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const listCate = LIST_PRODUCT_DATA.map((item) => {
    const category = CATEGORY_DATA.find((cate) => item.idCate === cate.idCate);
    return {
      id: item.idList,
      idCate: item.idCate,
      image: item.items[0].imageUrl,
      title: category.name,
      quantity: item.items.length,
    };
  });

  const listItem = getListProduct();

  return (
    <BoxBody>
      <IntroPage />

      <Typography
        variant="h5"
        textAlign="center"
        sx={{ fontWeight: 700 }}
        mt={3}
      >
        Danh mục nổi bật
      </Typography>
      <Grid container spacing={2} mt={3}>
        {listCate.map((item) => (
          <Grid item xs={4} xl={6} key={item.idCate}
            sx={{
              cursor:"pointer"
            }}
          >
            <CategoryCard
              title={item.title}
              quantity={item.quantity}
              image={item.image}
              onClick={() => navigate(ROUTE.LISTPRODUCT.replace(":id", item.idCate))}
            />
          </Grid>
        ))}
      </Grid>
      <Typography
        variant="h5"
        textAlign="center"
        sx={{ fontWeight: 700 }}
        mt={3}
      >
        Sản phẩm nổi bật
      </Typography>
      <Grid container spacing={2} mt={3}>
        {listItem.slice(0, expanded ? listItem?.length : 3).map((item) => (
          <Grid item xs={4} xl={6} key={item.id}>
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
      <Button onClick={() => setExpanded(!expanded)}>
        {expanded ? "Thu gọn" : "Xem thêm"}
      </Button>
    </BoxBody>
  );
}
export default HomePage;

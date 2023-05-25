import {
  Autocomplete,
  Box,
  Breadcrumbs,
  Button,
  Grid,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import BoxBody from "../../components/box-body";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import ItemSettingTable from "./item-setting-table";
import { useState } from "react";
import { convertWithCommas } from "../../ultis/number";
import { getSessionItem, setSessionItem } from "../../ultis/store";
import { ROUTE } from "../../router/config";
export default function Cart() {
  const breadcrumbs = [
    <Link to="/" style={{ textDecoration: "none" }}>
      <Typography>Trang chủ</Typography>
    </Link>,
    <Typography key="3" color="text.primary">
      Giỏ hàng của bạn
    </Typography>,
  ];

  const navigate = useNavigate();

  const cards = getSessionItem("cards") || [];

  const items = cards.map((card) => ({
    ...card,
    id: card?.id,
    name: card?.nameProc || card?.name,
    price: card?.price,
    quantity: card?.quantity,
    total: +card?.price * +card?.quantity,
  }));

  const totalInit = items.reduce((prev, curr) => +prev + +curr.total, 0);

  const { handleSubmit, register, control, watch, setValue } = useForm({
    defaultValues: {
      items: items,
    },
  });

  const [total, setTotal] = useState(totalInit);

  const updateCard = (val) => {
    const total = val?.items?.reduce((prev, curr) => +prev + curr?.total, 0);
    setTotal(total);
    setSessionItem("cards", val?.items || []);
  };

  return (
    <BoxBody>
      <Breadcrumbs separator="/" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      <Grid container spacing={1} mt={2}>
        <Grid item xs={12} xl={7}>
          <form onSubmit={handleSubmit(updateCard)}>
            <ItemSettingTable
              register={register}
              control={control}
              watch={watch}
              setValue={setValue}
            />
            <Box sx={{ mt: 4 }}>
              <Button variant="outlined" onClick={() => navigate("/")}>
                Tiếp tục xem sản phẩm
              </Button>
              <Button variant="contained" sx={{ ml: 4 }} type="submit">
                Cập nhât giỏ hàng
              </Button>
            </Box>
          </form>
        </Grid>
        <Grid item xs={12} xl={5}>
          <Typography variant="h5" sx={{ ml: 2 }}>
            Tổng số lượng
          </Typography>
          <List>
            <ListItem sx={{ justifyContent: "space-between" }}>
              <Typography>Tổng phụ</Typography>
              <Typography>{`${convertWithCommas(total)} đ`}</Typography>
            </ListItem>
            <ListItem sx={{ justifyContent: "space-between" }}>
              <Typography>Tổng</Typography>
              <Typography>{`${convertWithCommas(total)} đ`}</Typography>
            </ListItem>
            <ListItem>
              <Autocomplete
                options={[]}
                renderInput={(params) => (
                  <TextField {...params} label="Mã giảm giá" size="small" />
                )}
                fullWidth
              />
            </ListItem>
            <ListItem>
              <Button variant="contained" fullWidth
                 onClick={() => navigate(ROUTE.CHECKOUT)}
              >
                Tiến hành thanh toán
              </Button>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </BoxBody>
  );
}

import { ListItem, Typography } from "@mui/material";
import { convertWithCommas } from "../../ultis/number";

function CardItem({ nameProc, price, quantity }) {
  <ListItem disablePadding>
    <Typography>{nameProc}</Typography>
    <Typography>{`${quantity} x ${convertWithCommas(price)} đ`}</Typography>
  </ListItem>;
}

export default CardItem;

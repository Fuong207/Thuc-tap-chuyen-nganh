import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function CategoryCard({ title = "", quantity, image = "" }) {
  return (
    <Card>
      <CardMedia component="img" image={image} alt="" />
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2">{`${quantity} Tác phẩm`}</Typography>
      </CardContent>
    </Card>
  );
}

import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function CategoryCard({ title = "", quantity, image = "" }) {
  return (
    <Card>
      <CardMedia component="img" image={image} alt="" sx={{width: 600, height: 400}} />
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2">{`${quantity} Tác phẩm`}</Typography>
      </CardContent>
    </Card>
  );
}

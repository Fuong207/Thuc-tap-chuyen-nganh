import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function CardProduct({ image = "", name, price, cateName }) {
  return (
    <Card>
      <CardMedia component="img" image={image} alt="" sx={{width: 600, height: 400}} />
      <CardContent>
        <Typography variant="body1" sx={{ opacity: 0.7 }}>
          {cateName}
        </Typography>
        <Typography variant="body1">{name}</Typography>
        <Typography variant="body2">{`Giá: ${price} VND`}</Typography>
      </CardContent>
    </Card>
  );
}

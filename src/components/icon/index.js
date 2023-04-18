import { Box } from "@mui/material";
import { ReactComponent as Search } from "../../access/icon/search.svg";
const icons = {
  search: <Search />,
};
const Icon = ({ name, fill, size, sx, ...props }) => {
  return (
    <Box
      component="span"
      className="x-icon"
      {...props}
      sx={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        ...(size
          ? {
              width: size,
              height: size,
            }
          : {}),
        svg: {
          width: "100%",
          height: "100%",
          path: { fill: fill },
        },
        ...sx,
      }}
    >
      {icons[name]}
    </Box>
  );
};

export default Icon;

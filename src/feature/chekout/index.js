import {
    Breadcrumbs,
    Button,
    Grid,
    TextField,
    Typography,
    Box,
    Select,
    MenuItem,
    Input,
} from "@mui/material";
import BoxBody from "../../components/box-body";
import { Link } from "react-router-dom";
export default function Checkout() {
    const breadcrumbs = [
        <Link to="/cart" key="3" color="text.primary" style={{ textDecoration: "none" }}>
            Giỏ hàng của bạn
        </Link>,
        <Link to="/checkout" key="3" color="text.primary" style={{ textDecoration: "none" }}>
            Tiến hành thanh toán
        </Link>,
        <Link to="/" key="3" color="text.primary" style={{ textDecoration: "none" }}>
            Đơn hàng của bạn
        </Link>,
    ];
    return (
        <BoxBody>
            <Breadcrumbs separator="/" aria-label="breadcrumb">
                {breadcrumbs}
            </Breadcrumbs>
            <Grid container spacing={1} mt={2}>
                <form style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    position:"relative",
                    marginLeft: "48px",
                }}>
                    <Box>
                        <Typography variant="h1" sx={{fontSize: "1rem", fontWeight: "600", color: "#555", marginTop: "12px", borderTop: "1px solid #ccc", paddingTop: "24px"}}>THÔNG TIN THANH TOÁN</Typography>
                        <Box sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%",
                        }}>
                            <Box sx={{margin: "16px 8px 0 0"}}>
                                <Typography>Họ *</Typography>
                                <TextField type="text" size="small"/>
                            </Box>
                            <Box sx={{margin: "16px 0 0 8px"}}>
                                <Typography>Tên *</Typography>
                                <TextField type="text" size="small"/>
                            </Box>
                        </Box>
                        <Box sx={{marginTop: "30px"}}>
                            <Typography>Quốc gia / Khu vực *</Typography>
                            <Select
                                displayEmpty
                                size="medium"
                                sx={{
                                    width: "100%",
                                    height: "40px",
                                    marginTop: "8px",
                                }}
                            >
                                <MenuItem value={'VN'}>Việt Nam</MenuItem>
                                <MenuItem value={'TQ'}>Trung Quốc</MenuItem>
                                <MenuItem value={'USA'}>Mỹ</MenuItem>
                                <MenuItem value={'HQ'}>Hàn Quốc</MenuItem>
                            </Select>
                        </Box>
                        <Box  sx={{marginTop: "20px"}} >
                            <Typography>Địa chỉ *</Typography>
                            <TextField type="text" size="small" fullWidth/>
                        </Box>
                        <Box  sx={{marginTop: "30px"}}>
                            <Typography>Tỉnh / Thành phố *</Typography>
                            <TextField type="text" size="small" fullWidth/>
                        </Box>
                        <Box  sx={{marginTop: "30px"}}>
                            <Typography>Số điện thoại *</Typography>
                            <TextField type="text" size="small" fullWidth/>
                        </Box>
                        <Box  sx={{marginTop: "30px"}}>
                            <Typography>Email *</Typography>
                            <TextField type="text" size="small" fullWidth/>
                        </Box>
                        <Box  sx={{margin: "30px 0"}}>
                            <Typography variant="h1" sx={{fontSize: "1rem", fontWeight: "600", color: "#555", marginBottom: "16px"}}>THÔNG TIN BỔ SUNG</Typography>
                            <Typography sx={{color: "#555", fontWeight: "500", marginBottom: "8px"}}>Ghi chú đơn hàng (tùy chọn)</Typography>
                            <TextField type="text" size="normal" fullWidth/>
                        </Box>
                    </Box>
                    <Box sx={{flex: 1, marginLeft: "32px"}}>
                        <Grid sx={{position: "absolute", top: 0,  border: "2px solid #df6a6a", padding:"16px", width: "400px"}}>
                        <Typography>ĐƠN HÀNG CỦA BẠN</Typography>
                            <Box sx={{display: "flex",justifyContent: "space-between", alignItems:"center", margin: "12px 0", borderBottom: "3px solid #ccc"}}>
                                <Typography>SẢN PHẨM</Typography>
                                <Typography>TỔNG PHỤ</Typography>
                            </Box>
                            <Box sx={{display: "flex",justifyContent: "space-between", alignItems:"center", margin: "12px 0"}}>
                                <Typography>render ở đây cùng số lượng</Typography>
                                <Typography>render tổng tiền</Typography>
                            </Box>
                            <Box sx={{display: "flex",justifyContent: "space-between", alignItems:"center", margin: "12px 0"}}>
                                <Typography>Tổng phụ</Typography>
                                <Typography>render ở đây</Typography>
                            </Box>
                            <Box sx={{display: "flex",justifyContent: "space-between", alignItems:"center", margin: "12px 0"}}>
                                <Typography>Tổng</Typography>
                                <Typography>render ở đây</Typography>
                            </Box>
                            <Box >
                                <Typography>Chuyển khoản qua ngân hàng</Typography>
                            </Box>
                            <Button variant="contained" sx={{ margin: "16px 0"}} onSubmit={(e) => e.preventDefault()}>ĐẶT HÀNG</Button>
                        </Grid>
                        
                    </Box>
                </form>
            </Grid>
        </BoxBody>
    );
}

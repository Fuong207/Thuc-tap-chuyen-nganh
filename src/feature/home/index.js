function HomePage() {
  return <div className="home">
    <div className="silder">
      <img src="https://bantranh.com/wp-content/uploads/2023/04/331149506_156379123937683_5145038622473713745_n.jpg" width="100%" height="400px" />
    </div>
    <div className="introduce"
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        margin: "12px 0",
      }}>
      <div className="quality">
        <img src="https://bantranh.com/wp-content/uploads/2019/02/chatluong.png" width="24px" height="24px" />
        <div className="quality-content"

        >
          <h3>Chất lượng</h3>
          <i>Đảm bảo chất lượng những dịch vụ tốt nhất.</i>
        </div>
      </div>

      <div className="speed">
        < img src="https://bantranh.com/wp-content/uploads/2019/02/tocdo.png" width="24px" height="24px" />
        <div className="speed-content">
          <h3>Tốc độ</h3>
          <i>Giao hàng nhanh chóng đến địa chỉ khách hàng.</i>
        </div>
      </div>
      <div className="help">
        <img src="https://bantranh.com/wp-content/uploads/2019/02/support-icon-400x400.png" width="24px" height="24px" />
        <div className="help-content">
          <h3>Trợ giúp</h3>
          <i>Tư vấn và trợ giúp đặt hàng nhanh chóng.</i>
        </div>
      </div>
    </div>
  </div>;
}
export default HomePage;

export default function IntroPage() {
  return (
    <>
      <div className="silder">
        <img
          src="https://bantranh.com/wp-content/uploads/2023/04/331149506_156379123937683_5145038622473713745_n.jpg"
          width="100%"
          height="400px"
          alt=""
        />
      </div>
      <div
        className="introduce"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          margin: "12px 0",
        }}
      >
        <div className="quality">
          <img
            src="https://bantranh.com/wp-content/uploads/2019/02/chatluong.png"
            width="24px"
            height="24px"
            alt=""
          />
          <div className="quality-content">
            <h3>Chất lượng</h3>
            <i>Đảm bảo chất lượng những dịch vụ tốt nhất.</i>
          </div>
        </div>

        <div className="speed">
          <img
            src="https://bantranh.com/wp-content/uploads/2019/02/tocdo.png"
            width="24px"
            height="24px"
            alt=""
          />
          <div className="speed-content">
            <h3>Tốc độ</h3>
            <i>Giao hàng nhanh chóng đến địa chỉ khách hàng.</i>
          </div>
        </div>
        <div className="help">
          <img
            src="https://bantranh.com/wp-content/uploads/2019/02/support-icon-400x400.png"
            width="24px"
            height="24px"
            alt=""
          />
          <div className="help-content">
            <h3>Trợ giúp</h3>
            <i>Tư vấn và trợ giúp đặt hàng nhanh chóng.</i>
          </div>
        </div>
      </div>
      <div>
        <h3>
          Tranh Phong Cảnh, Tranh Sơn Dầu, Khung Tranh Đẹp, Chất Lượng Cao!
        </h3>
        <span>
          Bán Tranh đang mang đến cho không gian của bạn thêm phần sống động,
          nhiều màu sắc, sự tinh tế, vẻ đẹp thông qua những những bức tranh sơn
          dầu, tranh sơn mài, tranh phong cảnh, tranh hoa, tranh nghệ thuật đẹp
          nhất từ hàng trăm họa sĩ tài năng và giàu kinh nghiệm tại Việt Nam.
          Những bức tranh độc bản được sáng tác đậm chất nghệ thuật và độc đáo
          nhất mà bạn không thể tìm được thấy được ở nơi nào khác đảm bảo sẽ đem
          đến sự hài lòng cho các bạn. Để làm tôn thêm vẻ đẹp cho các bức tranh,
          chúng tôi cũng cung cấp dịch vụ đóng khung tranh theo yêu cầu, những
          khung tranh đẹp, khung tranh gỗ tự nhiên, chất lượng cao với mẫu mã
          phong phú, đa dạng và giá tốt nhất. Ngoài ra, dịch vụ vẽ tranh theo
          yêu cầu của chúng tôi sẽ giúp quý khách sở hữu bức tranh đẹp như ý
          muốn.
        </span>
      </div>
    </>
  );
}

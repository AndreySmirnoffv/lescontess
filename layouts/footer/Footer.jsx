import "./footer.sass";
import vk from "../../assets/shop/tovar/vk-contact.svg";
import ok from "../../assets/shop/tovar/ok-contacts.svg";

const Footer = () => {
  const svgStyle = {
    fill: "#4c4c4c", // Здесь укажите желаемый цвет
  };
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer-wrapper__left">
          <span className="footer-wrapper-left__label">C</span>
          <p className="footer-wrapper-left__year">2021, Les Contes</p>
        </div>
        <div className="footer-wrapper__right">
          <img className="footer-wrapper-right__vk" style={svgStyle} src={vk} alt="" />
          <img className="footer-wrapper-right__ok" style={svgStyle} src={ok} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

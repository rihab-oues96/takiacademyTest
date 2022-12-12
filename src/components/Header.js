import "./Header.scss";

import logo from "../images/logo.png";
import vector from "../images/Vector.png";

const Header = () => {
  return (
    <header>
      <div class="logo">
        <img src={logo} alt="logo" />
      </div>

      <div class="navigation">
        <span>الرئيسيّة</span>
        <span>من نحن؟</span>
        <span className="vector">
          المنصة
          <img src={vector} />
        </span>
        <span>عروضنا</span>
        <span>أساتذتنا</span>
        <span>محتوانا</span>
      </div>

      <div class="btns">
        <div class="btn signin">تسجيل الدخول</div>
        <div class="btn login">سجل مجانا</div>
      </div>
    </header>
  );
};

export default Header;

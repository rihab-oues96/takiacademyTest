import "./Intro.scss";

import intro from "../images/intro.png";
import introPlay from "../images/intro-play.png";
import flechRight from "../images/flech-right.png";
import flechLeft from "../images/flech-left.png";

const Intro = () => {
  return (
    <section className="intro">
      <div className="title">تقديم عام للمنصّة</div>
      <div className="desc">
        <div className="desc-deep">
          <img src={flechRight} />
          <span>شاهد</span>
        </div>
        <img src={intro} />

        <div className="desc-deep">
          <img src={flechLeft} />
          <span>تعرف علينا</span>
        </div>
      </div>

      <div className="intro-text">
        <span>
          تقي أكاديمي هي أوّل منصّة تعليميّة عبر الانترنت في تونس (منذ 2013)
          موجهة لتلامذة الابتدائي، الأساسي و الثانوي. نقدّم دروس دعم في شكل
          فيديوات مسجّلة و حصص مباشرة تفاعلية تحت إشراف ثلة من الأساتذة و
          المربّين من ذوي الخبرة من كافّة المدن التونسيّة.
        </span>
      </div>

      <div className="btn">إشترك الان </div>
    </section>
  );
};

export default Intro;

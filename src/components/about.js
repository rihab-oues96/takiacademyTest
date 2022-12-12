import "./about.scss";

import men from "../images/men.png";
const About = () => {
  return (
    <section className="about">
      <div className="info">
        <div className="title">
          <span> تقي أكاديمي </span>
          <span className="colored"> المنصّة التعليميّة الأولى </span>
          <span> عبر الانترنت في تونس</span>
        </div>

        <div className="description">
          TakiAcademy.com هي منصة تعليمية موجهة للتلاميذ . يشرف عليها ثلة من
          الاساتذة و المربين من ذوي الخبرة . هناكَ أكثر من 1000 فيديو مجّاني
          لترى بنفسكَ
        </div>

        <div className="btn"> إشترك الان </div>
      </div>

      <div className="image">
        <img src={men} />
      </div>
    </section>
  );
};

export default About;

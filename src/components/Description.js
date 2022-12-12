import DescriptionCards from "./cards/DescriptionCards";
import { descriptionInfo } from "../data/data.js";
import "./Description.scss";

const Description = () => {
  const info = descriptionInfo;
  return (
    <section className="description-page">
      <div className="description-cards">
        {info.map((info) => (
          <DescriptionCards key={info.id} info={info} />
        ))}
      </div>
      <div className="description-card">
        <span className="title">
          تقي أكاديمي المنصّة التعليميّة الأولى عبر الانترنت في تونس
        </span>
        <p>
          TakiAcademy.com هي منصة تعليمية موجهة للتلاميذ . يشرف عليها ثلة من
          الاساتذة و المربين من ذوي الخبرة .
        </p>
        <div className="btn"> إشترك الان </div>
      </div>
    </section>
  );
};

export default Description;

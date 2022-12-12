import Card from "./cards/card";

import takiacademy from "../images/takiacademy.jpg";

import { numbersInfo } from "../data/data";
import "./Numbers.scss";

const Numbers = () => {
  const infos = numbersInfo;

  return (
    <section className="numbers">
      <div className="title">أرقام</div>
      <div className="description">
        <span>
          تقي أكاديمي هي أوّل منصّة تعليميّة عبر الانترنت في تونس (منذ 2013)
          موجهة لتلامذة ..
        </span>
        <span>الابتدائي، الأساسي و الثانوي</span>
      </div>

      <div className="content">
        <div className="image-right">
          <img src={takiacademy} />
        </div>
        <div className="cards">
          {infos.map((info) => (
            <Card key={info.id} info={info} />
          ))}
        </div>
      </div>
      <div className="card-buttom">
        <span className="label"> 2019 Label Startup Act</span>
        <p> متحصّلين على علامة الشركة الناشئة في ماي</p>
      </div>
    </section>
  );
};

export default Numbers;

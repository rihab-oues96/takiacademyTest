import CustomerCard from "./cards/CustomerCard.js";

import { customersInfo } from "../data/data";
import "./Customers.scss";

const Customers = () => {
  const infos = customersInfo;
  return (
    <section className="customers">
      <span className="title"> من يمكنه الاستفادة من تقي أكاديمي؟</span>
      <span className="sub-title">
        من التلاميذ و الأولياء وحتّى المدارس والمعاهد والمؤسسات
      </span>

      <div className="customers-cards">
        {infos.map((info) => (
          <CustomerCard key={info.id} info={info} />
        ))}
      </div>
    </section>
  );
};

export default Customers;

import Order from "./Order";
import TitleSubTitle from "./TitleSubTitle";
import bell from "../public/icons/orders/bell.svg";
import css from "../public/icons/orders/css3.svg";
import adobe from "../public/icons/orders/adobe.svg";
import dropbox from "../public/icons/orders/dropbox.svg";
import cart from "../public/icons/orders/cart.svg";
import card from "../public/icons/orders/card.svg";

const Orders = () => {
  return (
    <section className="shadow-sm rounded-lg px-6 py-6">
      <TitleSubTitle
        title="Orders overview"
        sub=" this month"
        greensub="+30%  "
      />

      {/* Orders */}
      <div className="pt-8 space-y-2">
        <Order
          title="$2400, Design changes"
          icon={bell}
          date="22 DEC 7:20 PM"
        />
        <Order title="New order #4219423" icon={css} date="21 DEC 11:21 PM" />
        <Order
          title="Server Payments for April"
          icon={cart}
          date="21 DEC 9:28 PM"
        />
        <Order
          title="New card added for order #3210145"
          icon={card}
          date="20 DEC 3:52 PM"
        />
        <Order
          title="Unlock packages for Development"
          icon={dropbox}
          date="19 DEC 11:35 PM"
        />
        <Order title="New order #9851258" icon={adobe} date="18 DEC 4:41 PM" />
      </div>
    </section>
  );
};

export default Orders;

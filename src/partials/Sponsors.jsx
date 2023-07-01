import GdgHanoi from "../images/logos/gdg_hanoi.png";
import apero from "../images/sponsors/apero.webp";
import fsoft from "../images/sponsors/fsoft.webp";
import gdsc from "../images/sponsors/gdsc.webp";
import nic from "../images/sponsors/nic.webp";
import spiderum from "../images/sponsors/spiderum.webp";

const Sponsors = () => {
  return (
    <section className="w-3/4 lg:w-1/3 grid place-items-center mx-auto text-center mb-20 max-w-md">
      <div className="text-3xl font-bold my-12">
        <p>Organizer</p>
        <img src={GdgHanoi} />
      </div>

      <div className="grid place-items-center text-3xl font-bold my-12">
        <p>Core Partner</p>
        <img className="w-52" src={nic} />
      </div>

      <div className="grid place-items-center text-3xl font-bold my-12">
        <p>Diamond Sponsor</p>
        <img className="w-52" src={apero} />
      </div>

      <div className="grid place-items-center  text-3xl font-bold my-12">
        <p>Gold Sponsor</p>
        <img src={fsoft} />
      </div>

      <div className="grid place-items-center text-3xl font-bold my-12">
        <p>Community Partner</p>
        <div className="flex">
          <img src={gdsc} />
          <img src={spiderum} />
        </div>
      </div>
    </section>
  );
};

export default Sponsors;

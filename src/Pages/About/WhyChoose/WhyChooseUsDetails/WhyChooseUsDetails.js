import "./WhyChooseUsDetails.css";
import { useLocation } from "react-router-dom";

const WhyChooseUsDetails = () => {
  const location = useLocation();

  return (
    <>
      <section className="choose-details">
        <dib className="choose-details-img">
          <img src={location.state.img} alt="img"></img>
        </dib>
        <div>
          <h1>{location.state.title}</h1>
          <p>{location.state.des.slice(0, 350)}</p>
          <p>{location.state.des.slice(350, 500000)}</p>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUsDetails;

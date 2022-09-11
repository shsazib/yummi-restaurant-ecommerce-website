import './WhyChooseUsDetails.css';
import {useLocation } from 'react-router-dom';

const WhyChooseUsDetails = () => {
    const location = useLocation();
    
  return (
    <>
        <section className='choose-details'>
            <h1>{location.state.title}</h1>
            <p>{location.state.des.slice(0, 100)}</p>
            <p>{location.state.des.slice(101, 500000)}</p>
            <img src={location.state.img} alt="img"></img>
        </section>
    </>
  )
}

export default WhyChooseUsDetails;
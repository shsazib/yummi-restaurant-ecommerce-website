import React from 'react';
import './YourDoor.css';
import Img from './image/688x944_img1.jpg';
import { FaChessQueen, FaCanadianMapleLeaf, FaStarOfDavid, FaShippingFast } from 'react-icons/fa';

const YourDoor = () => {
  return (
    <>
    <div className='your-door'>
        <div className='your-door-content'>
            <h1>Real Delicious Food Straight To Your Door</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat.</p>
            <div className='your-door-content-child'>
              <div>
                <FaChessQueen className='your-door-content-child-icon' />
                <h3>Premium Quality</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
              </div>
              <div>
                <FaCanadianMapleLeaf className='your-door-content-child-icon'  />
                <h3>Always Fresh</h3>
                <p>Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis.</p>
              </div>
              <div>
                <FaStarOfDavid className='your-door-content-child-icon'  />
                <h3>Variety of Dishes</h3>
                <p>Suspendisse sollicitudin velit sed leo. Ut pharetra augue nec augue.</p>
              </div>
              <div>
                <FaShippingFast className='your-door-content-child-icon'  />
                <h3>Fastest Delivery</h3>
                <p>Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis.</p>
              </div>
            </div>
        </div>
        <div>
          <img src={Img} alt="Img"></img>
        </div>
    </div>
    </>
  )
}

export default YourDoor;
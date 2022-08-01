import React from 'react';
import classes from './Slide5.module.css';

function Slide5() {
  return (
    <div id={classes.page1slide5}>
        <div id={classes.triangle}></div> 
        <div id={classes.slide5}>
        <div id={classes.white1}></div>
          <h1>
            <b>"iMerit offers annotation quality, competitive pricing, scalability, 
            and a good turnaround time. We needed early support, and they stood out."</b>
            <h3>HEAD OF TECHNICAL OPERATIONS- ANONYMOUS SELF-DRIVING CAR COMPANY</h3>
          </h1>
          <img id={classes.nimg} src='	https://imerit.net/wp-content/uploads/2021/11/Head-of-Technical_Quote.jpg' alt=''/>

        </div>
       
    </div>
  )
}

export default Slide5
/*          <img className='rimg' src='./Photos/respowalk.png' alt=''/>*/
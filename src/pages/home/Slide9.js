import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './Slide.css'
import Card from './Card';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Slide9() {
  return (<div>
   

   



    < div className='persongrid'>

<div
  uk-slider="clsActivated: uk-transition-active"
  className="uk-slider uk-slider-container"
>
  <div
    className="uk-position-relative uk-visible-toggle uk-light"
    tabIndex={-1}
  >
    <ul
      className="uk-slider-items  uk-child-width-1-3@m  uk-child-width-1-3@m uk-grid"
      id='persongridmove'
    >
      <li
        tabIndex={-1}
        className="uk-active uk-transition-active"
        style={{ order: -1 }}
      ><div class="uk-card uk-card-default"  id='summborder'>
      <div class="uk-card-media-top">
      <p class="uk-card-title" id='summit'>SUMMIT</p>
      </div>
      <div class="uk-card uk-card-default uk-card-hover uk-card-body" id='summpadding'>
      <div class="imageover">
    <img className="img__effect" src="https://imerit.net/wp-content/uploads/2021/12/2022-%E2%80%98The-Year-of-ML-DataOps-%E2%80%93-The-Ground-Truth-of-AI-DataOps-Summit.jpg" alt="" id='imgsummit' uk-cover/>
  <div className="img__overlay">
    <p className="description"><p>2022: ‘The Year of ML DataOps’ – The Ground Truth of AI</p></p>
  </div>
  </div>
  </div>
  <div class="uk-card-media-top">
      <p class="uk-card-title" id='watch'>watch Now
      
      </p>
      </div>
      
  </div>
        
      </li>
      <li
        tabIndex={-1}
        className="uk-active uk-transition-active"
        style={{ order: -1 }}
      >
<div class="uk-card uk-card-default"  id='summborder'>
      <div class="uk-card-media-top">
      <p class="uk-card-title" id='summit'>SUMMIT</p>
      </div>
      <div class="uk-card uk-card-default uk-card-hover uk-card-body" id='summpadding'>
      <div class="imageover">
    <img className="img__effect" src="https://imerit.net/wp-content/uploads/2021/12/Emerging-AI-Companies-Are-Driving-A-Paradigm-Shift-in-ML-DataOps-Summit.jpg" alt="" id='imgsummit' uk-cover/>
  <div className="img__overlay">
    <p className="description"><p>Emerging AI Companies Are Driving A Paradigm Shift in ML</p></p>
  </div>
  </div>
  </div>
  <div class="uk-card-media-top">
      <p class="uk-card-title" id='watch'>watch Now</p>
      </div>
      
  </div>
      </li>
      <li
        tabIndex={-1}
        className="uk-active uk-transition-active"
        style={{ order: -1 }}
      ><div class="uk-card uk-card-default"  id='summborder'>
      <div class="uk-card-media-top">
      <p class="uk-card-title" id='summit'>SUMMIT</p>
      </div>
      <div class="uk-card uk-card-default uk-card-hover uk-card-body" id='summpadding'>
      <div class="imageover">
    <img className="img__effect" src="https://imerit.net/wp-content/uploads/2021/12/Solving-Edge-Cases-The-Path-to-Accelerating-AI-DataOps-Summit.jpg" alt="" id='imgsummit' uk-cover/>
  <div className="img__overlay">
    <p className="description"><p>Solving Edge Cases: The Path To Accelerating AI</p></p>
  </div>
  </div>
  </div>
  <div class="uk-card-media-top">
      <p class="uk-card-title" id='watch'>watch Now</p>
      </div>
      
  </div>

      </li>
      <li
        tabIndex={-1}
        className="uk-active uk-transition-active"
        style={{ order: -1 }}
      >
        <div class="uk-card uk-card-default"  id='summborder'>
      <div class="uk-card-media-top">
      <p class="uk-card-title" id='summit'>SUMMIT</p>
      </div>
      <div class="uk-card uk-card-default uk-card-hover uk-card-body" id='summpadding'>
      <div class="imageover">
    <img className="img__effect" src="https://imerit.net/wp-content/uploads/2021/12/Building-a-Tooling-Strategy-with-Humans-in-the-Loop-DataOps-Summit.jpg" alt="" id='imgsummit' uk-cover/>
  <div className="img__overlay">
    <p className="description"><p>Building A Tooling Strategy with Humans-in-the-Loop</p></p>
  </div>
  </div>
  </div>
  <div class="uk-card-media-top">
      <p class="uk-card-title" id='watch'>watch Now</p>
      </div>
      
  </div>
      </li>
      <li tabIndex={-1} className="" style={{ order: -1 }}>
      <div class="uk-card uk-card-default"  id='summborder'>
      <div class="uk-card-media-top">
      <p class="uk-card-title" id='summit'>AWAREDS</p>
      </div>
      <div class="uk-card uk-card-default uk-card-hover uk-card-body" id='summpadding'>
      <div class="imageover">
    <img className="img__effect" src="https://imerit.net/wp-content/uploads/2021/09/Commitment-to-being-a-GPTW-iMerit.png" alt="" id='imgsummit' uk-cover/>
  <div className="img__overlay">
    <p className="description"><p>iMerit Recognized for its Commitment to Being a Great Place to Work</p></p>
  </div>
  </div>
  </div>
  <div class="uk-card-media-top">
      <p class="uk-card-title" id='watch'>Read More</p>
      </div>
      
  </div>
      </li>
      <li tabIndex={-1} className="" style={{ order: -1 }}>
      <div class="uk-card uk-card-default"  id='summborder'>
      <div class="uk-card-media-top">
      <p class="uk-card-title" id='summit'>POST</p>
      </div>
      <div class="uk-card uk-card-default uk-card-hover uk-card-body" id='summpadding'>
      <div class="imageover">
    <img className="img__effect" src="https://imerit.net/wp-content/uploads/2021/09/Crowdsourced-data-labeling-1.jpg" alt="" id='imgsummit' uk-cover/>
  <div className="img__overlay">
    <p className="description"><p>Crowdsourced Data Labeling: When To Use it, and When Not To</p></p>
  </div>
  </div>
  </div>
  <div class="uk-card-media-top">
      <p class="uk-card-title" id='watch'>watch Now</p>
      </div>
      
  </div>
      </li>
      <li tabIndex={-1} className="" style={{ order: -1 }}>
      <div class="uk-card uk-card-default"  id='summborder'>
      <div class="uk-card-media-top">
      <p class="uk-card-title" id='summit'>POST</p>
      </div>
      <div class="uk-card uk-card-default uk-card-hover uk-card-body" id='summpadding'>
      <div class="imageover">
    <img className="img__effect" src="https://imerit.net/wp-content/uploads/2021/09/Outsourcing-data-labeling.jpg" alt="" id='imgsummit' uk-cover/>
  <div className="img__overlay">
    <p className="description"><p>2022: ‘The Year of ML DataOps’ – The Ground Truth of AI</p></p>
  </div>
  </div>
  </div>
  <div class="uk-card-media-top">
      <p class="uk-card-title" id='watch'>Read more</p>
      </div>
      
  </div>
      </li>

    </ul>
    
  </div>
  <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin" id='summlink'>
    <li uk-slider-item={0} className="uk-active">
      <a href="" />
    </li>
    <li uk-slider-item={1} className="">
      <a href="" />
    </li>
    <li uk-slider-item={2} className="">
      <a href="" />
    </li>
    <li uk-slider-item={3} className="">
      <a href="" />
    </li>
    <li uk-slider-item={4} className="">
      <a href="" />
    </li>
    <li uk-slider-item={5} className="">
      <a href="" />
    </li>
    <li uk-slider-item={6} className="">
      <a href="" />
    </li>
    <li uk-slider-item={7} className="">
      <a href="" />
    </li>
    
  </ul>

  <div className='gradLin2'>.</div>
</div>


</div>




<div className='mobilecamp769'>
<div
  uk-slider="clsActivated: uk-transition-active"
  className="uk-slider uk-slider-container"
>
  <div
    className="uk-position-relative uk-visible-toggle uk-light"
    tabIndex={-1}
  >
    <ul
      className="uk-slider-items  uk-child-width-1-2@s  uk-child-width-1-2@s uk-grid"
      id='mobilecamp769move'
    >
      <li
        tabIndex={-1}
        className="uk-active uk-transition-active"
        style={{ order: -1 }}
      ><div class="uk-card uk-card-default"  id='summborder'>
      <div class="uk-card-media-top">
      <p class="uk-card-title" id='summit'>SUMMIT</p>
      </div>
      <div class="uk-card uk-card-default uk-card-hover uk-card-body" id='summpadding'>
      <div class="imageover">
    <img className="img__effect" src="https://imerit.net/wp-content/uploads/2021/12/2022-%E2%80%98The-Year-of-ML-DataOps-%E2%80%93-The-Ground-Truth-of-AI-DataOps-Summit.jpg" alt="" id='imgsummit' uk-cover/>
  <div className="img__overlay">
    <p className="description"><p>2022: ‘The Year of ML DataOps’ – The Ground Truth of AI</p></p>
  </div>
  </div>
  </div>
  <div class="uk-card-media-top">
      <p class="uk-card-title" id='watch'>watch Now</p>
      </div>
      
  </div>
        
      </li>
      <li
        tabIndex={-1}
        className="uk-active uk-transition-active"
        style={{ order: -1 }}
      >
<div class="uk-card uk-card-default"  id='summborder'>
      <div class="uk-card-media-top">
      <p class="uk-card-title" id='summit'>SUMMIT</p>
      </div>
      <div class="uk-card uk-card-default uk-card-hover uk-card-body" id='summpadding'>
      <div class="imageover">
    <img className="img__effect" src="https://imerit.net/wp-content/uploads/2021/12/Emerging-AI-Companies-Are-Driving-A-Paradigm-Shift-in-ML-DataOps-Summit.jpg" alt="" id='imgsummit' uk-cover/>
  <div className="img__overlay">
    <p className="description"><p>Emerging AI Companies Are Driving A Paradigm Shift in ML</p></p>
  </div>
  </div>
  </div>
  <div class="uk-card-media-top">
      <p class="uk-card-title" id='watch'>watch Now</p>
      </div>
      
  </div>
      </li>
      <li
        tabIndex={-1}
        className="uk-active uk-transition-active"
        style={{ order: -1 }}
      ><div class="uk-card uk-card-default"  id='summborder'>
      <div class="uk-card-media-top">
      <p class="uk-card-title" id='summit'>SUMMIT</p>
      </div>
      <div class="uk-card uk-card-default uk-card-hover uk-card-body" id='summpadding'>
      <div class="imageover">
    <img className="img__effect" src="https://imerit.net/wp-content/uploads/2021/12/Solving-Edge-Cases-The-Path-to-Accelerating-AI-DataOps-Summit.jpg" alt="" id='imgsummit' uk-cover/>
  <div className="img__overlay">
    <p className="description"><p>Solving Edge Cases: The Path To Accelerating AI</p></p>
  </div>
  </div>
  </div>
  <div class="uk-card-media-top">
      <p class="uk-card-title" id='watch'>watch Now</p>
      </div>
      
  </div>

      </li>
      <li
        tabIndex={-1}
        className="uk-active uk-transition-active"
        style={{ order: -1 }}
      >
        <div class="uk-card uk-card-default"  id='summborder'>
      <div class="uk-card-media-top">
      <p class="uk-card-title" id='summit'>SUMMIT</p>
      </div>
      <div class="uk-card uk-card-default uk-card-hover uk-card-body" id='summpadding'>
      <div class="imageover">
    <img className="img__effect" src="https://imerit.net/wp-content/uploads/2021/12/Building-a-Tooling-Strategy-with-Humans-in-the-Loop-DataOps-Summit.jpg" alt="" id='imgsummit' uk-cover/>
  <div className="img__overlay">
    <p className="description"><p>Building A Tooling Strategy with Humans-in-the-Loop</p></p>
  </div>
  </div>
  </div>
  <div class="uk-card-media-top">
      <p class="uk-card-title" id='watch'>watch Now</p>
      </div>
      
  </div>
      </li>
      <li tabIndex={-1} className="" style={{ order: -1 }}>
      <div class="uk-card uk-card-default"  id='summborder'>
      <div class="uk-card-media-top">
      <p class="uk-card-title" id='summit'>AWAREDS</p>
      </div>
      <div class="uk-card uk-card-default uk-card-hover uk-card-body" id='summpadding'>
      <div class="imageover">
    <img className="img__effect" src="https://imerit.net/wp-content/uploads/2021/09/Commitment-to-being-a-GPTW-iMerit.png" alt="" id='imgsummit' uk-cover/>
  <div className="img__overlay">
    <p className="description"><p>iMerit Recognized for its Commitment to Being a Great Place to Work</p></p>
  </div>
  </div>
  </div>
  <div class="uk-card-media-top">
      <p class="uk-card-title" id='watch'>Read More</p>
      </div>
      
  </div>
      </li>
      <li tabIndex={-1} className="" style={{ order: -1 }}>
      <div class="uk-card uk-card-default"  id='summborder'>
      <div class="uk-card-media-top">
      <p class="uk-card-title" id='summit'>POST</p>
      </div>
      <div class="uk-card uk-card-default uk-card-hover uk-card-body" id='summpadding'>
      <div class="imageover">
    <img className="img__effect" src="https://imerit.net/wp-content/uploads/2021/09/Crowdsourced-data-labeling-1.jpg" alt="" id='imgsummit' uk-cover/>
  <div className="img__overlay">
    <p className="description"><p>Crowdsourced Data Labeling: When To Use it, and When Not To</p></p>
  </div>
  </div>
  </div>
  <div class="uk-card-media-top">
      <p class="uk-card-title" id='watch'>watch Now</p>
      </div>
      
  </div>
      </li>
      <li tabIndex={-1} className="" style={{ order: -1 }}>
      <div class="uk-card uk-card-default"  id='summborder'>
      <div class="uk-card-media-top">
      <p class="uk-card-title" id='summit'>POST</p>
      </div>
      <div class="uk-card uk-card-default uk-card-hover uk-card-body" id='summpadding'>
      <div class="imageover">
    <img className="img__effect" src="https://imerit.net/wp-content/uploads/2021/09/Outsourcing-data-labeling.jpg" alt="" id='imgsummit' uk-cover/>
  <div className="img__overlay">
    <p className="description"><p>2022: ‘The Year of ML DataOps’ – The Ground Truth of AI</p></p>
  </div>
  </div>
  </div>
  <div class="uk-card-media-top">
      <p class="uk-card-title" id='watch'>Read more</p>
      </div>
      
  </div>
      </li>

    </ul>
    
  </div>
  <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin" id='summlink'>
    <li uk-slider-item={0} className="uk-active">
      <a href="" />
    </li>
    <li uk-slider-item={1} className="">
      <a href="" />
    </li>
    <li uk-slider-item={2} className="">
      <a href="" />
    </li>
    <li uk-slider-item={3} className="">
      <a href="" />
    </li>
    <li uk-slider-item={4} className="">
      <a href="" />
    </li>
    <li uk-slider-item={5} className="">
      <a href="" />
    </li>
    <li uk-slider-item={6} className="">
      <a href="" />
    </li>
    <li uk-slider-item={7} className="">
      <a href="" />
    </li>
    
  </ul>

  <div className='gradLin2'>.</div>
</div>
    
</div>






<div className='mobilecamp425'>
<div
  uk-slider="clsActivated: uk-transition-active"
  className="uk-slider uk-slider-container"
>
  <div
    className="uk-position-relative uk-visible-toggle uk-light"
    tabIndex={-1} 
  >
    <ul
      className="uk-slider-items  uk-child-width-1-1@s  uk-child-width-1-1@s uk-grid" id='mobilecamp425move'
      
    >
      <li
        tabIndex={-1}
        className="uk-active uk-transition-active"
        style={{ order: -1 }}
      ><div class="uk-card uk-card-default"  id='summborder'>
      <div class="uk-card-media-top">
      <p class="uk-card-title" id='summit'>SUMMIT</p>
      </div>
      <div class="uk-card uk-card-default uk-card-hover uk-card-body" id='summpadding'>
      <div class="imageover">
    <img className="img__effect" src="https://imerit.net/wp-content/uploads/2021/12/2022-%E2%80%98The-Year-of-ML-DataOps-%E2%80%93-The-Ground-Truth-of-AI-DataOps-Summit.jpg" alt="" id='imgsummit' uk-cover/>
  <div className="img__overlay">
    <p className="description"><p>2022: ‘The Year of ML DataOps’ – The Ground Truth of AI</p></p>
  </div>
  </div>
  </div>
  <div class="uk-card-media-top">
      <p class="uk-card-title" id='watch'>watch Now</p>
      </div>
      
  </div>
        
      </li>
      <li
        tabIndex={-1}
        className="uk-active uk-transition-active"
        style={{ order: -1 }}
      >
<div class="uk-card uk-card-default"  id='summborder'>
      <div class="uk-card-media-top">
      <p class="uk-card-title" id='summit'>SUMMIT</p>
      </div>
      <div class="uk-card uk-card-default uk-card-hover uk-card-body" id='summpadding'>
      <div class="imageover">
    <img className="img__effect" src="https://imerit.net/wp-content/uploads/2021/12/Emerging-AI-Companies-Are-Driving-A-Paradigm-Shift-in-ML-DataOps-Summit.jpg" alt="" id='imgsummit' uk-cover/>
  <div className="img__overlay">
    <p className="description"><p>Emerging AI Companies Are Driving A Paradigm Shift in ML</p></p>
  </div>
  </div>
  </div>
  <div class="uk-card-media-top">
      <p class="uk-card-title" id='watch'>watch Now</p>
      </div>
      
  </div>
      </li>
      <li
        tabIndex={-1}
        className="uk-active uk-transition-active"
        style={{ order: -1 }}
      ><div class="uk-card uk-card-default"  id='summborder'>
      <div class="uk-card-media-top">
      <p class="uk-card-title" id='summit'>SUMMIT</p>
      </div>
      <div class="uk-card uk-card-default uk-card-hover uk-card-body" id='summpadding'>
      <div class="imageover">
    <img className="img__effect" src="https://imerit.net/wp-content/uploads/2021/12/Solving-Edge-Cases-The-Path-to-Accelerating-AI-DataOps-Summit.jpg" alt="" id='imgsummit' uk-cover/>
  <div className="img__overlay">
    <p className="description"><p>Solving Edge Cases: The Path To Accelerating AI</p></p>
  </div>
  </div>
  </div>
  <div class="uk-card-media-top">
      <p class="uk-card-title" id='watch'>watch Now</p>
      </div>
      
  </div>

      </li>
      <li
        tabIndex={-1}
        className="uk-active uk-transition-active"
        style={{ order: -1 }}
      >
        <div class="uk-card uk-card-default"  id='summborder'>
      <div class="uk-card-media-top">
      <p class="uk-card-title" id='summit'>SUMMIT</p>
      </div>
      <div class="uk-card uk-card-default uk-card-hover uk-card-body" id='summpadding'>
      <div class="imageover">
    <img className="img__effect" src="https://imerit.net/wp-content/uploads/2021/12/Building-a-Tooling-Strategy-with-Humans-in-the-Loop-DataOps-Summit.jpg" alt="" id='imgsummit' uk-cover/>
  <div className="img__overlay">
    <p className="description"><p>Building A Tooling Strategy with Humans-in-the-Loop</p></p>
  </div>
  </div>
  </div>
  <div class="uk-card-media-top">
      <p class="uk-card-title" id='watch'>watch Now</p>
      </div>
      
  </div>
      </li>
      <li tabIndex={-1} className="" style={{ order: -1 }}>
      <div class="uk-card uk-card-default"  id='summborder'>
      <div class="uk-card-media-top">
      <p class="uk-card-title" id='summit'>AWAREDS</p>
      </div>
      <div class="uk-card uk-card-default uk-card-hover uk-card-body" id='summpadding'>
      <div class="imageover">
    <img className="img__effect" src="https://imerit.net/wp-content/uploads/2021/09/Commitment-to-being-a-GPTW-iMerit.png" alt="" id='imgsummit' uk-cover/>
  <div className="img__overlay">
    <p className="description"><p>iMerit Recognized for its Commitment to Being a Great Place to Work</p></p>
  </div>
  </div>
  </div>
  <div class="uk-card-media-top">
      <p class="uk-card-title" id='watch'>Read More</p>
      </div>
      
  </div>
      </li>
      <li tabIndex={-1} className="" style={{ order: -1 }}>
      <div class="uk-card uk-card-default"  id='summborder'>
      <div class="uk-card-media-top">
      <p class="uk-card-title" id='summit'>POST</p>
      </div>
      <div class="uk-card uk-card-default uk-card-hover uk-card-body" id='summpadding'>
      <div class="imageover">
    <img className="img__effect" src="https://imerit.net/wp-content/uploads/2021/09/Crowdsourced-data-labeling-1.jpg" alt="" id='imgsummit' uk-cover/>
  <div className="img__overlay">
    <p className="description"><p>Crowdsourced Data Labeling: When To Use it, and When Not To</p></p>
  </div>
  </div>
  </div>
  <div class="uk-card-media-top">
      <p class="uk-card-title" id='watch'>watch Now</p>
      </div>
      
  </div>
      </li>
      <li tabIndex={-1} className="" style={{ order: -1 }}>
      <div class="uk-card uk-card-default"  id='summborder'>
      <div class="uk-card-media-top">
      <p class="uk-card-title" id='summit'>POST</p>
      </div>
      <div class="uk-card uk-card-default uk-card-hover uk-card-body" id='summpadding'>
      <div class="imageover">
    <img className="img__effect" src="https://imerit.net/wp-content/uploads/2021/09/Outsourcing-data-labeling.jpg" alt="" id='imgsummit' uk-cover/>
  <div className="img__overlay">
    <p className="description"><p>2022: ‘The Year of ML DataOps’ – The Ground Truth of AI</p></p>
  </div>
  </div>
  </div>
  <div class="uk-card-media-top">
      <p class="uk-card-title" id='watch'>Read more</p>
      </div>
      
  </div>
      </li>

    </ul>
    
  </div>
  <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin" id='summlink'>
    <li uk-slider-item={0} className="uk-active">
      <a href="" />
    </li>
    <li uk-slider-item={1} className="">
      <a href="" />
    </li>
    <li uk-slider-item={2} className="">
      <a href="" />
    </li>
    <li uk-slider-item={3} className="">
      <a href="" />
    </li>
    <li uk-slider-item={4} className="">
      <a href="" />
    </li>
    <li uk-slider-item={5} className="">
      <a href="" />
    </li>
    <li uk-slider-item={6} className="">
      <a href="" />
    </li>
    <li uk-slider-item={7} className="">
      <a href="" />
    </li>
    
  </ul>

  <div className='gradLin2'>.</div>
</div>
    
</div>






































   




    


















    </div>
  );
}

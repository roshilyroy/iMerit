import React,{useEffect} from 'react'
import './TenthSection.css' 

function TenthSection() {
  return (
    <div className='tenthContainer'>
        <div className='container'>
            <div className='row'>
                <div className='gradLine1'>.</div>
            </div>
            <div className='row'>
                <h1 className='tenthHead'>GETTING STARTED WITH IMAGE ANNOTATION</h1>
            </div>
            <div className='row'>
                <p className='tenthPara'>The need for speed in high-quality image annotation has never been greater. iMerit combines the best predictive and automated annotation technology with world-class data annotation and subject matter experts to deliver the data you need to get to production, fast.</p>
            </div>
             <div className=' asvg'>
              
            <a href='#' className='tenthA'>TALK TO AN EXPERT</a>

             <svg id="button-svg"  shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
                <line id="line3" x1="0" y1="0" x2="30" y2="0" fill="none" stroke="#E33D3B" stroke-width="1" stroke-miterlimit="10" style={{stroke: '#fff'}}></line>
                <line id="line1" x1="0" y1="40" x2="50" y2="-25" fill="none" stroke="#E33D3B" stroke-width="1" stroke-miterlimit="10" style={{stroke: '#fff'}}></line>
                <line id="line2" x1="0" y1="0" x2="0" y2="40" fill="none" stroke="#E33D3B" stroke-width="1" stroke-miterlimit="10" style={{stroke: '#fff'}}></line>
                <line id="line" x1="0" y1="20" x2="30" y2="20" fill="none" stroke="#E33D3B" stroke-width="0" stroke-miterlimit="10" style={{stroke: '#fff'}}></line>
            </svg>
            
             </div>
             <div className='row'>
                <div className='gradLine2'>.</div>
            </div>
        </div>
    </div>
  )
}

export default TenthSection

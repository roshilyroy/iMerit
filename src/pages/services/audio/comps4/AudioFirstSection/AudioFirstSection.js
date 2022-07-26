import React from 'react'
import './AudioFirstSection.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function AudioFirstSection() {
  return (
    <div className='firstContainer'>
    <div className='container'>
       <div className='row'>
           <div className='col-md-8'>
               <div className='sec1Audio'>
                   <h1>AUDIO TRANSCRIPTION SERVICES</h1>
                   <p>iMerit delivers stellar audio transcription services that power artificial intelligence, machine learning, and data operation strategies.</p>
                   <div className='svgbut2'>
                   <a href='#'>LET'S CONNECT </a>
                   <svg id="button-svg2"  shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
                        <line id="line3first" x1="0" y1="0" x2="30" y2="0" fill="none" stroke="#E33D3B" stroke-width="1" stroke-miterlimit="10" style={{stroke: 'rgb(56, 1, 152)'}}></line>
                        <line id="line1first" x1="0" y1="40" x2="50" y2="-25" fill="none" stroke="#E33D3B" stroke-width="1" stroke-miterlimit="10" style={{stroke: 'rgb(56, 1, 152)'}}></line>
                        <line id="line2first" x1="0" y1="0" x2="0" y2="40" fill="none" stroke="#E33D3B" stroke-width="1" stroke-miterlimit="10" style={{stroke: 'rgb(56, 1, 152)'}}></line>
                        <line id="linefirst" x1="0" y1="20" x2="30" y2="20" fill="none" stroke="#E33D3B" stroke-width="0" stroke-miterlimit="10" style={{stroke: 'rgb(56, 1, 152)'}}></line>
                    </svg>
                    </div> 
                   <div className='box'><span className='triangle2'></span></div>
                    
               </div>
           </div>
           <div className='col-md-4'>
               <div className='sec2Audio'>
                   <img src='https://imerit.net/wp-content/uploads/2021/05/Audio-Transcription-hero.png' alt='image' />
                   <div className='triangleAudio'></div>
               </div>
           </div>
       </div>
    </div>
   </div>
  )
}

export default AudioFirstSection

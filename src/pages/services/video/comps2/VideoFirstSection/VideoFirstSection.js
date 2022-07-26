import React from 'react'
import './VideoFirstSection.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function VideoFirstSection() {
  return (
    <div className='firstContainerVideo'>
     <div className='container'>
        <div className='row'>
            <div className='col-md-8'>
                <div className='sec1'>
                    <h1>Video Annotation Services</h1>
                    <p>iMerit delivers stellar  video annotation services that power AI, machine learning, and data operation strategies.</p>
                        <div className='svgbut2'>
                        <a href='#'className='connect'>LET'S CONNECT </a>
                        <svg id="button-svg2"  shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
                            <line id="line3first" x1="0" y1="0" x2="30" y2="0" fill="none" stroke="#E33D3B" stroke-width="1" stroke-miterlimit="10" style={{stroke: '#531cb3'}}></line>
                            <line id="line1first" x1="0" y1="40" x2="50" y2="-25" fill="none" stroke="#E33D3B" stroke-width="1" stroke-miterlimit="10" style={{stroke: '#531cb3'}}></line>
                            <line id="line2first" x1="0" y1="0" x2="0" y2="40" fill="none" stroke="#E33D3B" stroke-width="1" stroke-miterlimit="10" style={{stroke: '#531cb3'}}></line>
                            <line id="linefirst" x1="0" y1="20" x2="30" y2="20" fill="none" stroke="#E33D3B" stroke-width="0" stroke-miterlimit="10" style={{stroke: '#531cb3'}}></line>
                        </svg>
                        </div>
                </div>
            </div>
            <div className='col-md-4'>
                <div className='sec2'>
                    <img src='https://imerit.net/wp-content/uploads/2020/06/Object-Tracking-in-Video@1x.jpg' alt='image' />
                    <div className='triangle'></div>
                </div>
            </div>
        </div>
     </div>
    </div>
  )
}

export default VideoFirstSection

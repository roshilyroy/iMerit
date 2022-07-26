import React, { useEffect } from 'react'
import './AudioTenthSection.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function AudioTenthSection() {
  return (
    <div className='ninethContainerAudio'>
    <div className='container'>
        <div className='row'>
            <h1 className='headNineAudio'>LEARN MORE ABOUT AUDIO TRANSCRIPTION</h1> 
        </div>
        <div className='row postsAudio orig2'>
            <div className='col-md-6'>
                <div className='post1' data-aos="fade-up" data-aos-duration="4s" >
                    <h1 className='post1Head'>WHITEPAPER</h1>
                    <img className='post1Image' src='https://imerit.net/wp-content/uploads/2020/06/Natural-Language-Processing@1x-1.jpg' alt='post'></img>
                    <div className='post1Overlay'  >
                        <p className='post1Para'>Annotating Data for Natural Language Processing</p>
                    </div>
                    <h3 className='post1Subhead'>READ MORE</h3>
                    <img src="https://img.icons8.com/office/344/line.png" alt="logo" className='lineImage7'></img>
                        <img src="https://img.icons8.com/office/344/line.png" alt="logo" className='lineImage8'></img>                    
                </div>
            </div>
            <div className='col-md-6'>
                <div className='post2' data-aos="fade-up" data-aos-duration="4s" >
                    <h1 className='post2Head'>WEBINAR</h1>
                    <img className='post2Image' src='https://imerit.net/wp-content/uploads/2020/05/NLP-Webinar-1.jpg' alt='post'></img>
                    <div className='post2Overlay'>
                        <p className='post2ParaAudio'>Getting started with Natural Language Processing: From unstructured text to labeled corpus</p>
                    </div>
                    <h3 className='post2Subhead'>READ MORE</h3>
                    <img src="https://img.icons8.com/office/344/line.png" alt="logo" className='lineImage7'></img>
                        <img src="https://img.icons8.com/office/344/line.png" alt="logo" className='lineImage8'></img>                    
                </div>
            </div>
        </div>
        <div className='row dup2  '>
            <div id="demo" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <div className='post3'  >
                    <h1 className='post3Head'>WHITEPAPER</h1>
                    <img className='post3Image' src='https://imerit.net/wp-content/uploads/2020/06/Natural-Language-Processing@1x-1.jpg' alt='post'></img>
                    <div className='post3Overlay'  >
                        <p className='post3ParaAudio'>Annotating Data for Natural Language Processing</p>
                    </div>
                    <h3 className='post3Subhead'>READ MORE</h3>
                    <img src="https://img.icons8.com/office/344/line.png" alt="logo" className='lineImage3'></img>
                        <img src="https://img.icons8.com/office/344/line.png" alt="logo" className='lineImage4'></img>                    
                </div>
                    </div>
                    <div class="carousel-item">
                    <div className='post4' >
                    <h1 className='post4Head'>WEBINAR</h1>
                    <img className='post4Image' src='https://imerit.net/wp-content/uploads/2020/05/NLP-Webinar-1.jpg' alt='post'></img>
                    <div className='post4Overlay'>
                        <p className='post4ParaAudio'>Getting started with Natural Language Processing: From unstructured text to labeled corpus</p>
                    </div>
                    <h3 className='post4Subhead'>READ MORE</h3>
                    <img src="https://img.icons8.com/office/344/line.png" alt="logo" className='lineImage3'></img>
                        <img src="https://img.icons8.com/office/344/line.png" alt="logo" className='lineImage4'></img>                    
                </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default AudioTenthSection

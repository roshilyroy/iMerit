import React, { useEffect } from 'react'
import './NinethSection.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { AiOutlineLine } from "react-icons/ai";
import { MdSignalCellular0Bar } from "react-icons/md";
 

function NinethSection() {
    useEffect(() =>{
        Aos.init({});
    },[]);
    
    
  return (
    <div className='ninethContainer'>
        <div className='container'>
            <div className='row'>
                <h1 className='headNine'>LEARN MORE ABOUT IMAGE ANNOTATION</h1> 
            </div>
            <div className='row posts orig2'>
                <div className='col-md-6'>
                    <div className='post1' data-aos="fade-up" data-aos-duration="4s" >
                        <h1 className='post1Head'>POST</h1>
                        <img className='post1Image' src='https://imerit.net/wp-content/uploads/2017/04/iMerit_ComputerVision_EmbeddedVisionSummit.jpg' alt='post'></img>
                        <div className='post1Overlay'  >
                            <p className='post1Para'>Computer Vision Reshapes Baseball With In-Game Motion Capture</p>
                        </div>
                        <h3 className='post1Subhead'>READ MORE</h3>    /
                        <img src="https://img.icons8.com/office/344/line.png" alt="logo" className='lineImage1'></img>
                        <img src="https://img.icons8.com/office/344/line.png" alt="logo" className='lineImage2'></img>                    
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='post2' data-aos="fade-up" data-aos-duration="4s" >
                        <h1 className='post2Head'>POST</h1>
                        <img className='post2Image' src='https://imerit.net/wp-content/uploads/2021/01/Data-Annotation-trends.jpg' alt='post'></img>
                        <div className='post2Overlay'>
                            <p className='post2Para'>Top 5 Data Annotation Tooling and Workflow Trends For 2021</p>
                        </div>
                        <h3 className='post2Subhead'>READ MORE</h3>
                        <img src="https://img.icons8.com/office/344/line.png" alt="logo" className='lineImage1'></img>
                        <img src="https://img.icons8.com/office/344/line.png" alt="logo" className='lineImage2'></img>                    
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
                        <h1 className='post3Head'>POST</h1>
                        <img className='post3Image' src='https://imerit.net/wp-content/uploads/2017/04/iMerit_ComputerVision_EmbeddedVisionSummit.jpg' alt='post'></img>
                        <div className='post3Overlay'  >
                            <p className='post3Para'>Computer Vision Reshapes Baseball With In-Game Motion Capture</p>
                        </div>
                        <h3 className='post3Subhead'>READ MORE</h3>
                        <img src="https://img.icons8.com/office/344/line.png" alt="logo" className='lineImage3'></img>
                        <img src="https://img.icons8.com/office/344/line.png" alt="logo" className='lineImage4'></img>                    
                    </div>
                        </div>
                        <div class="carousel-item">
                        <div className='post4' >
                        <h1 className='post4Head'>POST</h1>
                        <img className='post4Image' src='https://imerit.net/wp-content/uploads/2021/01/Data-Annotation-trends.jpg' alt='post'></img>
                        <div className='post4Overlay'>
                            <p className='post4Para'>Top 5 Data Annotation Tooling and Workflow Trends For 2021</p>
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

export default NinethSection

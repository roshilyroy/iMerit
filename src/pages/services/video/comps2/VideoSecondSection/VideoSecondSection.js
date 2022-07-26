import React from 'react'
import './VideoSecondSection.css'
function VideoSecondSection() {
  return (
    <div className='secondContainer'>
      <div className='container'>
        <div className='row'>
            <div className='col-md-6'>
                <div className='sec3'>
                    <img src="https://imerit.net/wp-content/uploads/2021/07/WHAT-IS-VIDEO-ANNOTATION_.jpg" alt="image"></img>
                </div>
            </div>
            <div className='col-md-6'>
                <div className='sec4'>
                    <h1>WHAT IS VIDEO ANNOTATION?</h1>
                    <p className='para1Video'>Video annotation is the process of labeling or tagging video clips which are used for training computer vision models to detect or identify objects. Unlike image annotation, video annotation involves annotating objects on a frame-by-frame basis to make them recognizable for machine learning models.</p>  
                    <p className='para2Video'>High-quality video annotation generates ground truth datasets for optimal machine learning functionality. There are numerous deep learning applications for video annotation across industries including self-driving cars, medical AI, and geospatial technology.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default VideoSecondSection

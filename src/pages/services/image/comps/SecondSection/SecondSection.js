import React from 'react'
import  './SecondSection.css'
function SecondSection() {
  return (
    <div className='secondContainer'>
      <div className='container'>
        <div className='row'>
            <div className='col-md-6'>
                <div className='sec3'>
                    <img src="https://imerit.net/wp-content/uploads/2021/07/What-is-image-annotation_.jpg" alt="image"></img>
                </div>
            </div>
            <div className='col-md-6'>
                <div className='sec4'>
                    <h1>WHAT IS IMAGE ANNOTATION?</h1>
                    <p className='para1'>Image annotation is the process of labeling an image, which strategically involves human- powered work and sometimes, computer-assisted help. It is an important step in creating computer vision models for tasks like image segmentation, image classification, and object detection.
                    Image annotation can range from annotating every group of pixels within an image to one label for an entire image.</p>  
                    <p className='para2'>Successful image annotation projects involving computer vision are built on high-quality annotation. The type of annotation needed will depend on the use case the project is designed for.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SecondSection

 import React from 'react'
 import './VideoThirdSection.css'
 function VideoThirdSection() {
   return (
    <div className='thirdContainer'>
      <div className='container'>
        <div className='row'>
            <div className='col-12'>
                <div className='sec5'>
                    <h5>WHAT ARE THE TYPES OF VIDEO ANNOTATION SERVICES?</h5>
                    <p className='para3Video'>iMerit provides video annotation services for all annotation projects including bounding box annotation, polygon annotation, keypoint annotation, and semantic segmentation. iMerit’s team works with the client to calibrate the quality and throughput of the job and deliver the best cost-quality ratio as you iterate. We recommend running a sample batch to clarify instructions, edge cases, and approximate task times, before launching full batches.</p>
                 </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <div className='sec6'>
                        <h5 className='service'>iMERIT’S VIDEO ANNOTATION SERVICES</h5>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-4 col-md-6 col-sm-4 col-6 first'>
                    <img className='firstImage' src='https://imerit.net/wp-content/uploads/2020/06/Defense-Bounding-Box@1x.jpg' alt='image'></img>
                    <h1 className='firstHeading'>BOUNDING BOXES</h1>
                    <p className='firstParaVideo'>It is the most commonly used type of video annotation in computer vision. iMerit computer vision experts use rectangular box annotation to illustrate objects and create training data so apps and algorithms can identify and localize objects during ML processes.</p>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-4 col-6 second'>
                    <img className='secondImage' src='https://imerit.net/wp-content/uploads/2020/06/Polygon-Annotation@1x.jpg' alt='image'></img>
                    <h1 className='secondHeadingVideo'>POLYGON ANNOTATION</h1>
                    <p className='secondPara'>Expert annotators plot points on each vertex of the target object. Polygon annotation allows all of the object’s exact edges to be annotated, regardless of shape.</p>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-4 col-6 thirdVideo'>
                    <img className='thirdImage' src='https://imerit.net/wp-content/uploads/2020/06/Semantic-Segmention.jpg' alt='image'></img>
                    <h1 className='thirdHeading'>SEMANTIC SEGMENTATION</h1>
                    <p className='thirdPara'>Videos are segmented into component parts, by the iMerit team, and then annotated. iMerit computer vision experts examine video frames and classify objects pixel by pixel.</p>
                </div>
            
                <div className='col-lg-4 col-md-6 col-sm-4 col-6 fourthVideo'>
                    <img className='fourthImage' src='https://imerit.net/wp-content/uploads/2020/06/Keypoint-Annotation@1x-1.jpg' alt='image'></img>
                    <h1 className='fourthHeadingVideo'>KEYPOINT ANNOTATION</h1>
                    <p className='fourthParaVideo'>iMerit teams outline objects and shape variations by connecting individual points across objects. This annotation type detects body features and could include facial expressions and emotions.</p>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-4 col-6 fifthVideo'>
                    <img className='fifthImageVideo' src='https://imerit.net/wp-content/uploads/2021/11/Landmark-annotation.jpg' alt='image'></img>
                    <h1 className='fifthHeadingVideo'>LANDMARK ANNOTATION</h1>
                    <p className='fifthParaVideo'>iMerit experts use points on landmarks and peoples’ faces when annotating video footage. Expertly-conducted landmark annotation creates valuable training datasets for high-performing computer vision models.</p>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-4 col-6 sixthVideo'>
                    <img className='sixthImageVideo' src='https://imerit.net/wp-content/uploads/2021/11/3d-cuboid-annotation.jpg' alt='image'></img>
                    <h1 className='sixthHeading'>3D CUBOID ANNOTATION</h1>
                    <p className='sixthParaVideo'>iMerit experts perform object tracking by drawing cubes around objects. This allows systems to recognize a given object’s length, width, and height.</p>  
                </div>
                <div className='col-lg-4 col-md-6 col-sm-4 col-6 eighVideo'>
                    <img className='eighthImageVideo' src='https://imerit.net/wp-content/uploads/2021/11/Polyline-annotation.jpg' alt='image'></img>
                    <h1 className='eighthHeadingVideo'>POLYLINE ANNOTATION</h1>
                    <p className='eighthParaVideo'>iMerit experts create training datasets using polyline annotation that teach models to identify physical boundaries to operate within.</p>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-4 col-6 ninethVideo'>
                <img className='ninethImageVideo' src='https://imerit.net/wp-content/uploads/2021/11/Rapid-annotation.jpg' alt='image'></img>
                <h1 className='ninethHeadingVideo'>RAPID ANNOTATION</h1>
                <p className='ninethParaVideo'>iMerit’s video annotation platform utilizes video interpolation to rapidly annotate suitable video footage. iMerit annotation experts create best-in-class video training datasets in rapid time for any AI or ML project.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
   )
 }
 
 export default VideoThirdSection
 

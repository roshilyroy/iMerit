import React from 'react'
import './ThirdSection.css'
function ThirdSection() {
  return (
    <div className='thirdContainer'>
      <div className='container'>
        <div className='row'>
            <div className='col-12'>
                <div className='sec5'>
                    <h5>WHAT ARE THE TYPES OF IMAGE ANNOTATION SERVICES?</h5>
                    <p className='para3'>iMerit provides various image annotation services that will cater to a client’s project needs, including bounding boxes, polygon annotations, keypoint annotation, LiDar, semantic segmentation, and image classification. iMerit’s team works with the client to calibrate the quality and throughput of the job and deliver the best cost-quality ratio as you iterate. We recommend running a sample batch to clarify instructions, edge cases, and approximate task times, before launching full batches.</p>
                    <p className='para4'>High-quality image annotation generates ground truth datasets for optimal machine learning functionality. There are numerous types of deep learning applications for image annotation across industries including autonomous technology & transportation, medical AI, commerce, geospatial, finance, government, and more.</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <div className='sec6'>
                        <h5>iMERIT’S IMAGE ANNOTATION SERVICES</h5>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-4 col-md-6 col-sm-4 col-6 first'>
                    <img className='firstImage' src='https://imerit.net/wp-content/uploads/2020/06/Bounding-Box.jpg' alt='image'></img>
                    <h1 className='firstHeading'>BOUNDING BOXES</h1>
                    <p className='firstPara'>It is the most commonly used type of image annotation in computer vision. iMerit computer vision experts use rectangular box annotation to illustrate objects and train data, enabling algorithms with annotated images to identify and localize objects during the machine learning process. The simplicity of bounding boxes is exactly their strength, making this method of image annotation applicable for a wide range of uses.</p>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-4 col-6 second'>
                    <img className='secondImage' src='https://imerit.net/wp-content/uploads/2020/06/Polygon-Bounding-Box-Annotation@1x.jpg' alt='image'></img>
                    <h1 className='secondHeading'>POLYGON ANNOTATION</h1>
                    <p className='secondPara'>Expert annotators plot points on each vertex of the target object. Polygon annotation allows all of the object’s exact edges to be annotated, regardless of shape. This allows computer vision and other artificial intelligence models to recognize and respond to objects. This technique is especially useful in computer vision as annotators can use it to identify irregular shapes, allowing computers to identify and respond to them.</p>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-4 col-6 third'>
                    <img className='thirdImage' src='https://imerit.net/wp-content/uploads/2020/06/Semantic-Segmention.jpg' alt='image'></img>
                    <h1 className='thirdHeading'>SEMANTIC SEGMENTATION</h1>
                    <p className='thirdPara'>Images are segmented into component parts, by the iMerit team, and then annotated. iMerit computer vision experts detect desired objects within images at the pixel level. With expert semantic segmentation, data can be organized in multiple formats for AI models across a variety of use cases.</p>
                </div>
            
                <div className='col-lg-4 col-md-6 col-sm-4 col-6 fourth'>
                    <img className='fourthImage' src='https://imerit.net/wp-content/uploads/2020/06/LIDAR.jpg' alt='image'></img>
                    <h1 className='fourthHeading'>LIDAR ANNOTATION</h1>
                    <p className='fourthPara'>iMerit teams label images and videos in 360-degree visibility, captured by multi-sensor cameras, in order to build accurate, high-quality, ground truth datasets for use in computer vision models such as autonomous vehicles.</p>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-4 col-6 fifth'>
                    <img className='fifthImage' src='https://imerit.net/wp-content/uploads/2020/06/Geospatial-Image-Classification@1x.jpg' alt='image'></img>
                    <h1 className='fifthHeading'>IMAGE CLASSIFICATION</h1>
                    <p className='fifthPara'>iMerit annotators classify images or objects within images based on custom multi-level taxonomies, including land use, crops, residential property features, among others. Expert image classification turns image data into image insights for AI and ML models.</p>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-4 col-6 sixth'>
                    <img className='sixthImage' src='https://imerit.net/wp-content/uploads/2021/11/3D-Cuboid-Annotaion.jpg' alt='image'></img>
                    <h1 className='sixthHeading'>3D CUBOID ANNOTATION</h1>
                    <p className='sixthPara'>Through the use of cuboids, iMerit annotators can generate training datasets to teach machine learning models to recognize the depth of objects. Expert data labeling creates best-in-class training datasets for computer vision models to detect object and obstacle dimensions. Through the use of anchor points typically placed at the edges of an item, these dots are then connected with a line that results in a 3D representation of the object.</p>  
                </div>
            
                <div className='col-lg-4 col-md-6 col-sm-4 col-6 seventh'>
                    <img className='seventhImage' src='https://imerit.net/wp-content/uploads/2021/11/keypoint-annotation-involve-facial-recognition.jpg' alt='image'></img>
                    <h1 className='seventhHeading'>KEYPOINT ANNOTATION   </h1>
                    <p className='seventhPara'>iMerit teams outline objects and shape variations by connecting individual points across objects. This annotation type detects body features and could include facial expressions and emotions. Popular use cases for keypoint annotation involve facial recognition.</p>  
                </div>
                <div className='col-lg-4 col-md-6 col-sm-4 col-6 eighth'>
                    <img className='eighthImage' src='https://imerit.net/wp-content/uploads/2021/11/Polyline-annotation-1.jpg' alt='image'></img>
                    <h1 className='eighthHeading'>POLYLINE ANNOTATION</h1>
                    <p className='eighthPara'>iMerit experts create training datasets using polyline annotation that teach a machine learning model to identify physical boundaries to operate within. Popular use cases include autonomous vehicles and teaching them road boundaries.</p>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-4 col-6 nineth'>
                <img className='ninethImage' src='https://imerit.net/wp-content/uploads/2021/11/Rapid-annotation-1.jpg' alt='image'></img>
                <h1 className='ninethHeading'>RAPID ANNOTATION</h1>
                <p className='ninethPara'>iMerit’s image annotation platform utilizes image interpolation to rapidly annotate suitable files including JPG, PNG, and even CSV. iMerit annotation experts create best- in-class video training datasets in rapid time for any AI or ML project. Give your data science team the expert service they need to take their project from idea to production.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ThirdSection

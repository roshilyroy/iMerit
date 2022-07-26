import React from 'react'
import './TextSecondSection.css'
function TextSecondSection() {
  return (
    <div className='secondContainerText'>
    <div className='container'>
      <div className='row'>
          <div className='col-md-6'>
              <div className='sec3'>
                  <img src="https://imerit.net/wp-content/uploads/2021/07/WHAT-IS-TEXT-ANNOTATION_.jpg" alt="image"></img>
              </div>
          </div>
          <div className='col-md-6'>
              <div className='sec4'>
                  <h1 className='what'>WHAT IS TEXT ANNOTATION?</h1>
                  <p className='para1Text'>Text annotation helps machine learning models understand text data. Common workflows that utilize text annotation include sentiment and intent analysis, part-of-speech tagging, entity recognition and classification. During the text annotation process, the data is parsed into the required categories including phrases, sentences, and keywords, based on the guidelines of the project. The annotated datasets train machines to communicate efficiently in the natural language of humans. Text annotation can be used in the creation of training data to improve the performance of search engines, build chatbots, design a question answering system, help students improve their reading comprehension, facilitate translation of text from one language to another, and so much more. Text annotation can also be combined with image annotation to train multimodal machine learning models.</p>  
               </div>
          </div>
      </div>
    </div>
  </div>
  )
}

export default TextSecondSection

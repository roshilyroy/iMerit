import React from 'react'
import Card2content from './Card2content/Card2content'
import Cardcontent1 from './cardcontent/Cardcontent'
import Cardcontent2 from './cardcontent/Cardcontent2'

import Firstcontent from './Firstcontent/Firstcontent'
import Fourcontent from './Fourcontent/Fourcontent'
import Processcontent from './Processconten/Processcontent'
import Secondpartcontent from './Secondpart/Secondpartcontent'
import Thirdcontent from './tthird/Thirdcontent'

function Contentmoderation() {
  return (
    <div>
      <Firstcontent/>
      <Secondpartcontent/>
      <Cardcontent1/>

     <Processcontent/>
     <Cardcontent2/>
   <Thirdcontent/>
   <Fourcontent/>
   <Card2content/>
    </div>
  )
}

export default Contentmoderation
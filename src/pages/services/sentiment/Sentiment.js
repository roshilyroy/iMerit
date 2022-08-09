import React from 'react'
import Card2sentiment from './card2sent/Card2Sent'
import Cardsentiment from './CardSentiment/Cardsentiment'
import Cardsentiment1 from './CardSentiment/CardSentiment1'
import Firstsentiment from './Firstpartsentiment/Firstsentiment'
import Fivesentiment from './Fivesentiment/Fivesentiment'
import Foursentiment from './Foursent/Foursentiment'
import Processsentiment from './Processsentiment/Processsentiment'
import Secondsentiment from './Secondsentiment/Secondsentiment'
import Thirdsentiment from './Thirdsentiment/Thirdsentiment'

function Sentiment() {
  return (
    <div><Firstsentiment/>
    <Secondsentiment/>
    <Thirdsentiment/>
    <Cardsentiment/>
    <Processsentiment/>
    <Cardsentiment1/>
    <Foursentiment/>
    <Fivesentiment/>
    <Card2sentiment/></div>
  )
}

export default Sentiment
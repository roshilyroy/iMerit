import { Grid } from '@mui/material'
import React from 'react'
import './Secondpartcontent.css'
function Secondpartcontent() {
  return (
    <div className='seccontent'><div><Grid container>
        <Grid item xs={1} sm={.5}lg={1} md={.5}></Grid>
        <Grid item xs={10} lg={4} md={4} sm={4}><div><img src="https://imerit.net/wp-content/uploads/2021/07/What-is-content-moderation.jpg" alt="" /></div></Grid>
        <Grid item xs={6} lg={6} md={6} sm={6}>
          <div className='secondcontent'>
            <h1  className="contentsecondhead">WHAT IS CONTENT MODERATION?</h1>
            <div ><p className='contentsecondpara'>Content moderation is the practice of monitoring, assessing, and filtering content based on a predetermined set of rules. Online marketplaces and social media platforms rely on user-generated content (UGC) for engagement and activity, and moderation helps maintain and enforce community guidelines. Moderation can be performed either by human moderators or an automated content moderating system.</p>
            <p className='contentsecondpara1'>Content moderation can help identify:</p></div>
            <div className='ulist'>
              <ul className='uli1'>



                <li>Violence</li>
                <li>Hate Speech</li>
                <li>Profanity</li>
                <li>Sexual-derived language</li>
                <li>Inappropriate images</li>
               
              </ul>
              <ul className='uli2'>
                  <li>Substance abuse</li>
                <li>Nudity</li>
                <li>Racism</li>
                <li>Religion</li>
                <li>
Political extremism
</li>
                
              </ul>
              <ul className='uli3'>
                <li>Fake news</li>
                <li>Scams</li>
                <li>Evidence of deteriorating mental health or PTSD</li>
                <li>


Other inappropriate content</li>
                
                

              </ul>
            </div>
            
<p className='contentsecondpara'>Regular content moderation audits are important to ensure that offensive online content is being removed without impinging on the overall user experience. It is even more important to evaluate the balance in decision-making when algorithms are involved as they can be skewed by biased data. Social media companies and Silicon Valley tech companies all perform regular audits of their content moderation work to keep their platforms safe and enjoyable for all contributors.</p></div>
        </Grid>
        <Grid item xs={1} lg={1} md={1.5}></Grid></Grid></div></div>
  )
}

export default Secondpartcontent
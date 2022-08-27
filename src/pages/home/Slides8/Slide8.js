import React from 'react'
import Diagram from '../Diagram/Diagram'
import './Slide8.css'

function Slide8() {
  return (
    <div><Diagram/>
        <div uk-slideshow="animation: scale">

    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">

        <ul class="uk-slideshow-items">
            <li>
                <img src="https://imerit.net/wp-content/uploads/2020/05/Baseball.jpg" alt="" uk-cover className='football1'/>
                <div class="top-triangle"></div>
                <p className='criket1'>"iMerit's data annotation enables us to build accurate models and actionable insights for hundreds of MLB pitchers"</p>
                <p className='attribution'>Steven Cadavid, President, KinaTrax</p>
            </li>
            <li>
                <img src="https://imerit.net/wp-content/uploads/2021/11/Geospatial-intelligence-company.jpg" alt="" uk-cover className='football1'/>
                <div class="top-triangle"></div>
                <p className='criket1'>"Well-managed team, hits predictable timelines, good quality work, easy to scale team up and down. iMerit helps us produce our products faster."</p>
                <p className='attribution'>CTO - Geospatial intelligence company focused on property risk and valuation</p>
            </li>
            <li>
                <img src="https://imerit.net/wp-content/uploads/2020/05/Cultural-Institution.jpg" alt="" uk-cover className='football1'/>
                <div class="top-triangle"></div>
                <p className='criket1'>"I appreciate the love iMerit brought to the work and will be delighted to collaborate further on data challenges."</p>
                <p className='attribution'>Chief Digital Officer, Leading cultural institution</p>
            </li>
            <li>
                <img src="https://imerit.net/wp-content/uploads/2020/05/CrowdReason.jpg" alt="" uk-cover className='football1'/>
                <div class="top-triangle"></div>
                <p className='criket1'>"iMerit is an invaluable partner, providing us with accurate data which helped us develop our property tax software."</p>
                <p className='attribution'>Brandon Van Volkenburgh, CTO &amp; Co-founder, CrowdReason </p>
            </li>
        </ul>
       

        

    </div>

    <ul class="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin"></ul>

</div></div>
  )
}

export default Slide8
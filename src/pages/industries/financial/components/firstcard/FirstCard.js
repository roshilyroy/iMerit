import React from "react";
import "./Firstcard.css";
function FirstCard() {
  return (
    <div className="firstcards">
      <h1 className="cardstitle">USE CASES</h1>
      <div
        class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin card1"
        uk-grid
      >
        <div class="uk-card-media-left uk-cover-container covercontainer">
          <img
            src="https://imerit.net/wp-content/uploads/2021/09/Document-Automation.jpg"
            alt=""
            uk-cover
          />
        </div>
        <div className="triangle1"></div>
        <div>
          <div class="uk-card-body cardbody">
            <h5 class="uk-card-title h21 fi">
              Document<br></br>Automation
            </h5>
            <h5 class="uk-card-title h22 fi">
              Document Automation
            </h5>
            <p>
              iMerit’s Natural Language Processing specialists extract critical
              data from documents including invoices, expense, credit, shipping,
              and tax to automate repetitive tasks like reporting and
              reconciliation processes.
            </p>
          </div>
        </div>
      </div>

      <div
        class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin card2"
        uk-grid
      >
        <div class="uk-flex-last@s uk-card-media-right uk-cover-container covercontainer">
          <img
            src="	https://imerit.net/wp-content/uploads/2021/09/Fund-Research.jpg"
            alt=""
            uk-cover
          />
        </div>
        <div className="triangle1"></div>
        <div>
          <div class="uk-card-body cardbody">
            <h5 class="uk-card-title fi">Fund Research</h5>
            <p>
              iMerit’s financial services team extract, track, and verify
              relevant details of funds including asset classes, family details,
              and redemption periods by leveraging a combination of manual
              extraction and OCR technology.
            </p>
          </div>
        </div>
      </div>

      <div className="secondcards">
        <div
          class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin card1"
          uk-grid
        >
          <div class="uk-card-media-left uk-cover-container covercontainer">
            <img
              src="https://imerit.net/wp-content/uploads/2021/09/Earnings-Call-Analysis.jpg"
              alt=""
              uk-cover
            />
          </div>
          <div className="triangle1"></div>
          <div>
            <div class="uk-card-body cardbody">
              <h5 class="uk-card-title fi">Earnings Call Analysis</h5>
              <p>
                Earnings calls from conferences and other important meetings are
                transcribed and analyzed by iMerit’s data labelers using Natural
                Language Processing to identify opportunities and risks to the
                company.
              </p>
            </div>
          </div>
        </div>

        <div
          class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin card2"
          uk-grid
        >
          <div class="uk-flex-last@s uk-card-media-right uk-cover-container covercontainer">
            <img
              src="https://imerit.net/wp-content/uploads/2021/09/Financial-Forecasting.jpg"
              alt=""
              uk-cover
            />
          </div>
          <div className="triangle1"></div>
          <div>
            <div class="uk-card-body cardbody">
              <h5 class="uk-card-title fi">Financial Forecasting </h5>
              <p>
                iMerit experts extract and categorize key financial information
                from unstructured data sources like investor letters and social
                chat forums for fast, easy, and valuable structured data inputs
                to proprietary models.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="thirdcards">
        <div
          class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin card1"
          uk-grid
        >
          <div class="uk-card-media-left uk-cover-container covercontainer">
            <img
              src="	https://imerit.net/wp-content/uploads/2021/09/Compliance-and-Fraud-Detection.jpg"
              alt=""
              uk-cover
            />
          </div>
          <div className="triangle1"></div>
          <div>
            <div class="uk-card-body fifth cardbody">
              <h5 class="uk-card-title fi">Compliance and Fraud Detection</h5>
              <p>
                iMerit experts verify data by analyzing transaction patterns and
                performing thorough analysis to meet compliance processes on
                time and with high accuracy for advisory and risk management.
              </p>
            </div>
          </div>
        </div>

        <div
          class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin card2"
          uk-grid
        >
          <div class="uk-flex-last@s uk-card-media-right uk-cover-container covercontainer">
            <img
              src="	https://imerit.net/wp-content/uploads/2021/09/chatbot.jpg"
              alt=""
              uk-cover
              className="forthimg"
            />
          </div>
          <div className="triangle1"></div>
          <div>
            <div class="uk-card-body cardbody">
              <h5 class="uk-card-title fi">Chatbots</h5>
              <p>
                iMerit’s dedicated finance data labeling team extracts financial
                text, data, and audio to power next-generation chatbots and
                digital assistants to provide financial advice virtually and
                enhance customer support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstCard;

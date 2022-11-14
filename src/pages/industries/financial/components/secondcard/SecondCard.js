import React from "react";
import "./SecondCard.css";
function SecondCard() {
  return (
    <>
      <h1 className="cardstitle title2">CAPABILITIES</h1>
      <div className="card2nd">
        <div className="card8title c3f c21">
          <div class="uk-card uk-card-default uk-card-body uk-width-1-3@m card12nd">
            <img src="https://imerit.net/wp-content/uploads/2021/09/Data-Extraction.jpg" />
          </div>
          <div className="cardtext cardtextf ct1">
            <h1>DATA EXTRACTION</h1>
            <p>
              iMerit experts extract and organize relevant material from vast
              sets of unstructured text and visual data to enable the automation
              of manual processes and streamlining of operations.
            </p>
          </div>
        </div>
        <div className="card8title c3f c22">
          <div class="uk-card uk-card-default uk-card-body uk-width-1-3@m card22nd">
            <img src="https://imerit.net/wp-content/uploads/2021/09/Data-Verification.jpg" />
          </div>
          <div className="cardtext cardtextf ct2">
            <h1>DATA VERIFICATION</h1>
            <p>
              Trained content teams inspect data from varied sources for
              accuracy and inconsistencies, and help companies meet compliance
              requirements and further fraud detection measures.
            </p>
          </div>
        </div>
        <div className="card8title c3f c23">
          <div class="uk-card uk-card-default uk-card-body uk-width-1-3@m card32nd card3f2nd">
            <img src="https://imerit.net/wp-content/uploads/2021/09/Transaction-classification.jpg" />
          </div>
          <div className="cardtext cardtextf ct3">
            <h1>TRANSACTION CLASSIFICATION</h1>
            <p>
              iMerit’s expert data annotators label financial transactions for
              banks, processors, credit bureaus, and expense management tools to
              enable custom modeling and reporting.
            </p>
          </div>
        </div>
        <div className="card8title c3f c24">
          <div class="uk-card uk-card-default uk-card-body uk-width-1-3@m card42nd card4f2nd">
            <img src="https://imerit.net/wp-content/uploads/2021/09/Transcription.jpg" />
          </div>
          <div className="cardtext cardtextf ct4">
            <h1>TRANSCRIPTION</h1>
            <p>
              Earnings call results are transcribed and key financial data from
              sources including investor letters and online chat forums is
              extracted to build investment models.
            </p>
          </div>
        </div>
        <div className="cs3 csf3 c3f card8title c25">
          <div class="uk-card uk-card-default uk-card-body uk-width-1-3@m card52nd card5f2nd">
            <img
              src="https://imerit.net/wp-content/uploads/2021/09/Sentiment-analysis.jpg"
              className="card5img"
            />
          </div>
          <div className="cardtext cardtextf ct5">
            <h1>SENTIMENT ANALYSIS</h1>
            <p>
              Advanced sentiment analysis solutions are provided by classifying
              expressions as positive, negative, or neutral to help domain
              experts interpret nuances in financial data.
            </p>
          </div>
        </div>
      </div>

      
    </>
  );
}

export default SecondCard;

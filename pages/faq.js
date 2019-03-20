import React from 'react';

import Layout from '../components/layout';

const Question = props => (
  <div>
    <strong>{props.question}</strong>
    {props.answer}
  </div>
);

const Questions = () => (
  <div>
    <Question
      question="Where is the ceremony?"
      answer={
        <p>
          The ceremony will be held at{' '}
          <a
            href="https://www.google.com/maps/place/Main+Street+United+Methodist+Church/@34.1871073,-82.3410296,12z/data=!4m8!1m2!2m1!1smain+street+united+methodist+church!3m4!1s0x88f7fb568c99204d:0x548dcae9dea4a05e!8m2!3d34.1794938!4d-82.3803895"
            target="_blank">
            Main Street United Methodist Church, Abbeville
          </a>
        </p>
      }
    />
    <Question
      question="Where will the meal be held?"
      answer={
        <p>
          We will have the meal at the church following the ceremony in the
          Greene Center.
        </p>
      }
    />
    <Question
      question="Where is the after party?"
      answer={
        <p>
          The after party will be held at the{' '}
          <a
            href="https://www.google.com/maps/place/Inn+on+the+Square/@34.1883399,-82.1616077,17z/data=!3m1!4b1!4m5!3m4!1s0x88f8016d9eb21d8f:0x93fd2c7f995ecff!8m2!3d34.1883399!4d-82.159419"
            target="_blank">
            Inn on the Square{' '}
          </a>
          at 104 East Court Avenue, Greenwood, SC 29646.
        </p>
      }
    />
    <Question
      question="Where is our Wedding Registry?"
      answer={
        <p>
          Our wedding registry can be found on Amazon via{' '}
          <a
            href="https://www.amazon.com/wedding/greg-potts-michelle-phelps-abbeville-october-2019/registry/5EGW9T4EIEYQ"
            target="_blank">
            this link
          </a>
          .
        </p>
      }
    />
    <Question
      question="Where should we book our hotel reservations?"
      answer={
        <p>
          We recommend you book your hotel reservations at the same place we are
          having the after party. At the{' '}
          <a
            href="https://www.google.com/maps/place/Inn+on+the+Square/@34.1883399,-82.1616077,17z/data=!3m1!4b1!4m5!3m4!1s0x88f8016d9eb21d8f:0x93fd2c7f995ecff!8m2!3d34.1883399!4d-82.159419"
            target="_blank">
            Inn on the Square{' '}
          </a>
          at 104 East Court Avenue, Greenwood, SC 29646.
        </p>
      }
    />
    <Question
      question="What airports are near the venue?"
      answer={
        <div>
          <p>
            We recommend you fly in to Greenville-Spartanburg International
            Airport (GSP). See the following table with information about
            distance/time information.
          </p>
          <p>
            <a
              href="https://www.google.com/maps/dir/Greenville-Spartanburg+International+Airport+(GSP),+2000+GSP+Dr,+Greer,+SC+29651/Main+Street+United+Methodist+Church,+300+N+Main+St,+Abbeville,+SC+29620/@34.5366321,-82.6652316,10z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x88582a0a39cbf875:0x4d9cda4b48e8eb19!2m2!1d-82.2172338!2d34.8959008!1m5!1m1!1s0x88f7fb568c99204d:0x548dcae9dea4a05e!2m2!1d-82.3803895!2d34.1794938"
              target="_blank">
              Airport to Church
            </a>
          </p>
          <p>
            <a
              href="https://www.google.com/maps/dir/Greenville-Spartanburg+International+Airport+(GSP),+2000+GSP+Dr,+Greer,+SC+29651/Inn+on+the+Square,+Court+Avenue+East,+Greenwood,+SC/@34.5291944,-82.4020613,10z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x88582a0a39cbf875:0x4d9cda4b48e8eb19!2m2!1d-82.2172338!2d34.8959008!1m5!1m1!1s0x88f8016d9eb21d8f:0x93fd2c7f995ecff!2m2!1d-82.159419!2d34.1883399!3e0"
              target="_blank">
              Airport to Hotel (Inn on the Square)
            </a>
          </p>
        </div>
      }
    />
  </div>
);

class FAQ extends React.Component {
  state = {};

  render() {
    return (
      <Layout container="true" title="FAQs">
        <Questions />
      </Layout>
    );
  }
}

export default FAQ;

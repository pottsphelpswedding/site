import React from 'react';

import Layout from '../components/layout';

const EmmaImagePath = '/static/images/party/bride/emma_hill.jpg';
const KahliImagePath = '/static/images/party/bride/kahli_potts.jpg';
const KatherineImagePath = '/static/images/party/bride/katherine_hill.jpg';
const MadeleineImagePath = '/static/images/party/bride/madeleine_tilley.jpg';
const NatalieImagePath = '/static/images/party/bride/natalie_ferguson.jpg';
const PaigeImagePath = '/static/images/party/bride/paige_plampin.jpg';

const RyanImagePath = '/static/images/party/groom/ryan_phelps.jpg';
const TylerImagePath = '/static/images/party/groom/tyler_phelps.jpg';

const PartyMember = props => (
  <div
    style={{
      width: '400px',
      background: props.isMaidOfHonor ? '#6A2541' : '#F0EAD6',
      color: props.isMaidOfHonor ? 'white' : 'black',
      borderRadius: '5px',
      margin: '10px',
      padding: '20px',
    }}>
    <img
      src={props.img}
      style={{
        width: '200px',
        height: '200px',
        borderRadius: '2px',
        display: 'block',
        margin: 'auto',
        marginBottom: '20px',
      }}
    />
    <h4>
      {props.name}{' '}
      {props.isMaidOfHonor ? (
        <span style={{color: '#DAA520'}}>&mdash; Maid of Honor</span>
      ) : (
        ''
      )}
    </h4>
    <p>{props.blurb}</p>
  </div>
);

class MeetTheParty extends React.Component {
  state = {};

  render() {
    return (
      <Layout container="true" title="Meet the Party">
        <h2>Bridesmaids</h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
          <PartyMember
            name="Emma"
            isMaidOfHonor
            img={EmmaImagePath}
            blurb="Emma and I met in the 5th grade. We don’t really remember how we first initially met but all we know is that we became instant best friends. We most likely connected due to our weirdness and sense of humor. We spent our middle school sleep overs hacking people’s emails and trying to become YouTube famous. We spent most nights on the phone quizzing each other for upcoming tests. We were both high achievers in school and awfully competitive when it came to comparing our grades. Emma is now an ICU Nurse at The Cleveland Clinic and she is currently in school to become a Nurse Practitioner. "
          />
          <PartyMember
            name="Kahli"
            img={KahliImagePath}
            blurb="I met Kahli 7 years ago. Kahli is Greg’s sister, and my soon to be sister-in-law. Kahli is the most fun-loving person I know. She keeps things real. If she were to try to tell you a lie, she would bust up laughing while telling you. "
          />
          <PartyMember
            name="Katherine"
            img={KatherineImagePath}
            blurb="Katherine and I met in pharmacy school. I can always depend on Katherine to relieve my nerves before a quiz or exam. I enjoy all our laughs and jokes in the stressful place called pharmacy school. Katherine is down to earth and basically the mom of us friends in pharmacy school."
          />
          <PartyMember
            name="Madeleine"
            img={MadeleineImagePath}
            blurb="Madeleine and I met in pharmacy school. This girl is glued to the books. She is absolutely addicted to knowing 110% more than what she will need for the exam. Although she is extremely studious and smart, she definitely knows how to put the books down every once and awhile to have a good time. Madeleine is such a dependable friend."
          />
          <PartyMember
            name="Natalie"
            img={NatalieImagePath}
            blurb="Natalie and I met at some point in middle school or high school. We both graduated high school together. I told my older brother to quit trying to date people in my class, but I’m glad he didn’t listen for this one. Natalie and Tyler are getting married June 21 this year as well. Natalie graduated from Kent State University and joined the family here in SC to teach special education."
          />
          <PartyMember
            name="Paige"
            img={PaigeImagePath}
            blurb="Paige and I met in pharmacy school. Paige is the person you text and she doesn’t respond for 3 days. But you know that she isn’t ignoring you, but she’s just busy and isn’t connected to her phone like every other living person at this point. We all love this about Paige. Paige is like me in the sense that you think she’s real quiet when you first meet her but she’s really funny and knows how to have a good time."
          />
        </div>
        <hr />

        <h2>Groomsmen</h2>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <PartyMember
            name="Ryan"
            img={RyanImagePath}
            blurb="Ryan is Michelle’s younger brother. He currently attends college at the Ohio State University."
          />
          <PartyMember
            name="Tyler"
            img={TylerImagePath}
            blurb="Tyler is Michelle’s older brother. He currently works for Clemson."
          />
        </div>
      </Layout>
    );
  }
}

export default MeetTheParty;

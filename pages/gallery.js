import React from 'react';

import Layout from '../components/layout';

import Lightbox from 'lightbox-react';
import 'lightbox-react/style.css'; // This only needs to be imported once in your app

/*
const images = [
  {src: '/static/gallary/bridge.jpg'},
  {src: '/static/gallary/bridge_closeup.jpg'},
];
*/

const images = [
  '/static/images/gallary/bridge.jpg',
  '/static/images/gallary/bridge_closeup.jpg',
  '/static/images/gallary/IMG_9591.jpg',
  '/static/images/gallary/IMG_9598.jpg',
  '/static/images/gallary/IMG_9602.jpg',
  '/static/images/gallary/IMG_9632.jpg',
  '/static/images/gallary/IMG_9634.jpg',
  '/static/images/gallary/IMG_9643.jpg',
  '/static/images/gallary/IMG_9656.jpg',
  '/static/images/gallary/IMG_9674.jpg',
  '/static/images/gallary/IMG_9677.jpg',
  '/static/images/gallary/IMG_9687.jpg',
  '/static/images/gallary/10170779_10201684581144924_4847843769851294683_n.jpg',
  '/static/images/gallary/10407031_10203616764168292_6700116900001374603_n.jpg',
  '/static/images/gallary/10450255_10201953969439463_617204074067021296_o.jpg',
  '/static/images/gallary/1395965_483918355038707_388862754_n.jpg',
  '/static/images/gallary/15977136_10208277311634001_6958630516197453667_n.jpg',
  '/static/images/gallary/16105563_10207903673058335_9145503258166403164_n.jpg',
  '/static/images/gallary/19143364_10209164625581360_5723004907285111179_o.jpg',
  '/static/images/gallary/193205_3864922905113_94190184_o.jpg',
  '/static/images/gallary/20170818_161711.jpeg',
  '/static/images/gallary/20170818_161853.jpeg',
  '/static/images/gallary/20597499_10209549003950579_7449077369122412928_n.jpg',
  '/static/images/gallary/26731370_10210678037055701_2811744982179558763_n.jpg',
  '/static/images/gallary/26815116_10210669294557144_1286669479930534194_n.jpg',
  '/static/images/gallary/29066851_10211082160398532_8931895382686826496_o.jpg',
  '/static/images/gallary/29472981_10211375338442735_2680632738909782016_n.jpg',
  '/static/images/gallary/465474_4135386671603_1072586947_o.jpg',
  '/static/images/gallary/75791_3761355881067_1376469404_n.jpg',
  '/static/images/gallary/941410_10200184723204348_1792065584_n.jpg',
  '/static/images/gallary/IMG_0045.jpeg',
  '/static/images/gallary/IMG_0503.jpeg',
  '/static/images/gallary/IMG_0530.jpeg',
  '/static/images/gallary/IMG_0534.jpeg',
  '/static/images/gallary/IMG_0629.jpg',
  '/static/images/gallary/file_01.png',
];

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const {photoIndex, isOpen} = this.state;

    return (
      <Layout container="true" title="Gallery" dark>
        <div>
          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => this.setState({isOpen: false})}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + images.length - 1) % images.length,
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % images.length,
                })
              }
            />
          )}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
          }}>
          {images.map((x, i) => (
            <div style={{width: '300px'}} key={i}>
              <img
                src={x}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '3px',
                  margin: '4px 0px',
                }}
                onClick={() => this.setState({isOpen: true, photoIndex: i})}
              />
            </div>
          ))}
        </div>
      </Layout>
    );
  }
}

export default Gallery;

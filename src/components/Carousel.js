import React, {Component} from 'react'
import { Slide } from 'react-slideshow-image';
 
const slideImages = [
  'images/slide_2.jpg',
  'images/slide_3.jpg',
  'images/slide_4.jpg'
];
 
const properties = {
  duration: 50000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}
 
const Slideshow = () => {
    return (
      <Slide {...properties}>
        <div className="each-slide">
          <div class="img-div">
            <a class="img-anchor" href="http://repo-sweeper.herokuapp.com" target="_blank"><img class="cover" src={require("../resources/repo-sweeper.jpg")} /></a>
          </div>
        </div>
        <div className="each-slide">
          <div class="img-div">
           <a class="img-anchor" href="http://thebitbook.herokuapp.com" target="_blank" ><img  class="cover" src={require("../resources/bitbook.png")} /></a>
          </div>
        </div>
        <div className="each-slide">
          <div class="img-div">
            <a class="img-anchor" href="#contact" ><img class="cover" src={require("../resources/buildyou.jpg")} /></a>
          </div>
        </div>
      </Slide>
    )
 }


export default Slideshow
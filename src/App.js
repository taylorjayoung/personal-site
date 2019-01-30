import React, { Component, Fragment } from 'react';
import './App.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Slideshow from './components/Carousel';
import {Button, Checkbox, Form, Icon, TextArea} from 'semantic-ui-react'
import Icons from './components/IconSet'
import InterestIcons from './components/InterestIcons'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      width: 0,
      height: 0
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }

  componentDidMount() {
    console.log('MOUNT')
    console.log('--------------------')
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount(){
    console.log('UNMOUNT')
    console.log('--------------------')
    window.removeEventListener('resize')
  }

  updateWindowDimensions(){
    console.log('update window dimensions')
    console.log('--------------------')
    console.log(window.innerHeight, window.innerWidth)

    this.setState({width: window.innerWidth, height: window.innerHeight})
  }

  render() {
    return (
      <div id="main-div">
        <div id="navbar-container">
          <div id="linkBox">
            <AnchorLink class="linkText" href='#home'>Home</AnchorLink>
            <AnchorLink class="linkText" href='#about'>About</AnchorLink>
            <AnchorLink class="linkText" href='#projects'>Projects</AnchorLink>
            <AnchorLink class="linkText" href='#blog'>Blog</AnchorLink>
            <AnchorLink class="linkText" href='#contact'>Contact</AnchorLink>
          </div>
        </div>
          <section id="home">
            <div class="home-div">
              <h1 class="header">Taylor J. Young, Developer </h1>
              <div class="header-media-icons">
                <Icons windowWidth={this.state.width} />
              </div>
            </div>
          </section>

          <section id="about">
            <div class="about-container">
              <div class="picture-section"></div>
              <div class="story-section">
                <div class="main-story-section">
                  <h2>Skills</h2>
                    <div class="skill-icon-div story-div">
                      <div class="span-div"> 
                         <i class="devicon devicon-javascript-plain colored"></i>
                         <span>Javascript</span>
                      </div>
                      <div class="span-div">  <i class="devicon devicon-ruby-plain-wordmark colored"></i>
                          <span>Ruby</span>
                      </div>
                       <div class="span-div">  
                         <i class="devicon devicon-react-original-wordmark colored"></i>
                        <span>React.js</span>
                      </div>
                      <div class="span-div">  
                        <i class="devicon devicon-rails-plain-wordmark colored"></i>
                        <span>Ruby on Rails</span>
                      </div>
                      <div class="span-div">  
                        <i class="devicon devicon-html5-plain colored"></i>
                        <span>HTML5</span>
                      </div>
                      <div class="span-div"> 
                         <i class="devicon devicon-css3-plain colored"></i>
                         <span>CSS3</span>
                     </div>
                  </div>

                  <h2>Interests</h2>
                    <div class="interest-icon-div story-div">
                      <InterestIcons windowWidth={this.state.width} />
                    </div>
                  <h2>Idols</h2>
                    <div class="idols-div story-div">
                      <div class="idol-div idol-1"><span>Milton Friedman, Economist</span></div>
                      <div class="idol-div idol-2"><span>Sam Harris, Neuroscientist and Philosopher</span></div>
                      <div class="idol-div idol-3"><span>Christopher Hitchens, Political Critic and Author</span></div>
                      <div class="idol-div idol-4"><span>Thomas Sowell, Economist</span></div>
                      <div class="idol-div idol-5"><span>Greg Giraldo, Comedian</span></div>

                    </div> 
                </div>
              </div>
            </div>
          </section>

          <section id="projects">             
            <div class="project-container">    
              <div class="carousel-container"> 
              <Slideshow />
              </div>
            </div>
          </section>
          <section id="blog">
            <div>
            <h1 class="header">Blog</h1>
                <div class="blog-content-div">
                  <div class="main-blog-article">
                    
                    
                    <a target="none" href="https://medium.com/datadriveninvestor/parsin-the-interruption-3b620ae9a275"> <h2>How Does Javascript Parse Memory?</h2></a>
                    <p>As you all know, JavaScript parses and executes code separately. As the code is scanned, memory is set aside for each object it comes across. But how much memory is allocated for each object? Is it decided on the spot? Is there some predetermined amount of memory set aside for each element?</p>
                    <p><img style={{padding: "1%", float: "left"}} class="article-img" src={require("./resources/js.gif")}></img>In JavaScript, the prototypes for scalar primitive values are immutable whereas compound values are mutable. Immutable means you can’t change the value, when you reassign the same value to a new variable and change the value, you are changing a copy of the value that was made on reassignment.</p>
                    <p>You can assign a number to a variable, assign another variable to the first variable, change the value of one variable and not affect the value assignment of the other.</p>
                    <p>Let me say that again…

You can assign a number to a variable, assign another variable to the first variable, change the value of one variable and not affect the value assignment of the other.


This is because when you assign the second variable to the first, you are actually assigning it to a copy of the value that the variable points at, and not the variable itself or the value itself. It creates a new copy of the value and stores it. So each of the variables point to distinct values. That is the main characteristic of variables assigned and passed by value in the stack.</p>
                  </div>

                  <div class="secondary-blog-articles">

                  <a target="none" href="https://medium.com/@taylorjayoung/the-easiest-way-to-delete-multiple-github-repositories-at-once-e71e16734b59"><h2>New Way To Delete GitHub Repositories!</h2></a>
                    <p>As a recent graduate of a coding bootcamp I can attest to a unique problem bootcamp graduates face — finding a way to delete the hundreds of repositories that were forked as labs and projects. A few weeks ago I graduated from Flatiron School and had nearly 400 forked labs to delete. Unfortunately, GitHub only allows a user to erase one repository at a time, and it’s not a very user-friendly process. So deleting hundreds could easily take an hour.
                    </p>
                    
                  <a target="none" href="https://medium.com/datadriveninvestor/bootcamper-vs-junior-developer-coding-working-learning-805762da9aa3"> <h2>What's The Industry Take on Bootcamps?</h2></a>
                    <p>Coding bootcamps are rigorous. Students spend anywhere from 60-70 hours a week on coding labs and computer science lectures — all in order to become professional developers. Every day, they build their technical and conceptual repertoires, but because of the intensity, they don’t always understand what’s going on outside the classroom. This information can be just as crucial as the inside information.</p>
                  
                  </div>  
                </div>
            </div>
          </section>

          <section id="contact">
            <div id="contact-container">
              <div class="content-container">
                <div class= "contactInfoBox">
                  <div class="contactMainTextDiv">
                  <h1>Get in Touch</h1>
                    <div class="contactForm">
                      <Form size={"huge"} >
                        <Form.Field width={12} >
                            <label>Name</label>
                            <input placeholder='Name' />
                          </Form.Field>
                          <Form.Field width={12} required>
                            <label>Email</label>
                            <input placeholder='Email' />
                          </Form.Field>
                          <Form.Field required>
                          <label>Message</label>
                          <TextArea  style={{ marginTop: "1%" }} placeholder='Message' />
                          <span class="submit-button"><Button style={{ marginTop: "3%" }}  size="big" type='submit'>Submit</Button></span>
                          </Form.Field>
                        </Form>
                    </div>    
                 </div>
                </div>
              </div>
            </div>
          </section>
        <footer>
          <div id="footer-div">
            <div class="social">
              <h3>
                <a href="https://github.com/taylorjayoung?tab=repositories" target="_none"><Icon inverted  color='black' name='github huge  link icon' /></a>
                 <a href="https://www.linkedin.com/in/taylor-j-young/" target="_none"><Icon inverted color='blue' name='linkedin huge link icon' /></a>
                 <a href="https://medium.com/@taylorjayoung" target="_none"><Icon inverted color='black' name='medium huge link icon' /></a>
                 <a href="https://stackoverflow.com/users/10881188/t-young" target="_none"><Icon inverted color='orange' name='stack overflow huge link icon' /></a>
              </h3>
            </div>
            <div class="contact">
              <h1>-Stay Connected-</h1>
            </div>

          </div>
        </footer>
      </div>
    );
  }
}

export default App;




 
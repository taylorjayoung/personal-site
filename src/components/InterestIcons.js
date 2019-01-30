import React, {Fragment, Component} from 'react'
import {Button, Checkbox, Form, Icon, TextArea} from 'semantic-ui-react'

export default class InterestIcons extends Component {

 
    TinyIcons =
    <> 
        <div class="icon-div"><span>Reading</span><Icon circular color="blue" size='tiny' name='book' /></div>
        <div class="icon-div"><span>Drinking Coffee</span><Icon circular color="brown" size='tiny' name='coffee' /></div>
        <div class="icon-div"><span>Playing Chess</span><Icon circular color="grey" size='tiny' name='chess' /></div>
        <div class="icon-div"><span>Sports, Mostly Basketball</span><Icon circular color='orange' size='tiny' name='basketball ball' /></div> 
    < />
 
  
   SmallIcons =
          <> 
            <div class="icon-div"><span>Reading</span><Icon circular color="blue" size='big' name='book' /></div>
            <div class="icon-div"><span>Drinking Coffee</span><Icon circular color="brown" size='big' name='coffee' /></div>
            <div class="icon-div"><span>Playing Chess</span><Icon circular color="grey" size='big' name='chess' /></div>
            <div class="icon-div"><span>Sports, Mostly Basketball</span><Icon circular color='orange' size='big' name='basketball ball' /></div> 
          < />
       

   BigIcons = 
          <>
              <div class="icon-div"><span>Reading</span><Icon circular color="blue"  name='big book' /></div>
            <div class="icon-div"><span>Drinking Coffee</span><Icon circular color="brown"  name='big coffee' /></div>
            <div class="icon-div"><span>Playing Chess</span><Icon circular color="grey"  name='big chess' /></div>
            <div class="icon-div"><span>Sports, Mostly Basketball</span><Icon circular color='orange'  name='big basketball ball' /></div> 
          < />
  
   

    HugeIcons = 
    <>
        <div class="icon-div"><span>Reading</span><Icon circular color="blue" size='huge' name='book' /></div>
            <div class="icon-div"><span>Drinking Coffee</span><Icon circular color="brown" size='huge' name='coffee' /></div>
            <div class="icon-div"><span>Playing Chess</span><Icon circular color="grey" size='huge' name='chess' /></div>
            <div class="icon-div"><span>Sports, Mostly Basketball</span><Icon circular color='orange' size='huge' name='basketball ball' /></div> 
    < />
  

   
  determineIconSize = () => {
      if(this.props.windowWidth < 370){
          return this.SmallIcons
      }

      else if(this.props.windowWidth < 950) {
          return this.BigIcons
      }

      else if (this.props.windowWidth <1200){
          return this.HugeIcons
      }

      else if (this.props.windowWidth >1200){
          return this.HugeIcons
      }
  }

  render(){
      return(
          this.determineIconSize()
      )
  }

}
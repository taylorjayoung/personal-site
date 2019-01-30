import React, {Component, Fragment} from 'react'
import {Button, Checkbox, Form, Icon, TextArea} from 'semantic-ui-react'

 class Icons extends Component {

      TinyIcons =
      <> 
          <a href="https://github.com/taylorjayoung?tab=repositories" target="_none"><Icon bordered inverted color='black' name='github tiny  link icon' /></a>
          <a href="https://www.linkedin.com/in/taylor-j-young/" target="_none"><Icon bordered inverted color='blue' name='linkedin tiny link icon' /></a>
          <a href="https://medium.com/@taylorjayoung" target="_none"><Icon bordered inverted color='black' name='medium tiny link icon' /></a>
          <a href="https://stackoverflow.com/users/10881188/t-young" target="_none"><Icon bordered inverted color='orange' name='stack overflow tiny link icon' /></a>
      < />
   
    
     SmallIcons =
            <> 
                <a href="https://github.com/taylorjayoung?tab=repositories" target="_none"><Icon bordered inverted color='black' name='github medium  link icon' /></a>
                <a href="https://www.linkedin.com/in/taylor-j-young/" target="_none"><Icon bordered inverted color='blue' name='linkedin medium link icon' /></a>
                <a href="https://medium.com/@taylorjayoung" target="_none"><Icon bordered inverted color='black' name='medium link icon' /></a>
                <a href="https://stackoverflow.com/users/10881188/t-young" target="_none"><Icon bordered inverted color='orange' name='stack overflow medium link icon' /></a>
            < />
         

     BigIcons = 
            <>
                <a href="https://github.com/taylorjayoung?tab=repositories" target="_none"><Icon bordered inverted color='black' name='big github link icon' /></a>
                <a href="https://www.linkedin.com/in/taylor-j-young/" target="_none"><Icon bordered inverted color='blue' name='big linkedin link icon' /></a>
                <a href="https://medium.com/@taylorjayoung" target="_none"><Icon bordered inverted color='black' name='big medium link icon' /></a>
                <a href="https://stackoverflow.com/users/10881188/t-young" target="_none"><Icon bordered inverted color='orange' name='big stack overflow link icon' /></a>
            < />
    
     

    HugeIcons = 
    <>
        <a href="https://github.com/taylorjayoung?tab=repositories" target="_none"><Icon bordered inverted color='black' name='github huge  link icon' /></a>
        <a href="https://www.linkedin.com/in/taylor-j-young/" target="_none"><Icon bordered inverted color='blue' name='linkedin huge link icon' /></a>
        <a href="https://medium.com/@taylorjayoung" target="_none"><Icon bordered inverted color='black' name='medium huge link icon' /></a>
        <a href="https://stackoverflow.com/users/10881188/t-young" target="_none"><Icon bordered inverted color='orange' name='stack overflow huge link icon' /></a>
    < />
    

     
    determineIconSize = () => {
        if(this.props.windowWidth < 370){
            return this.TinyIcons
        }

        else if(this.props.windowWidth < 600) {
            return this.SmallIcons
        }

        else if (this.props.windowWidth <1200){
            return this.BigIcons
        }

        else if (this.props.windowWidth >1200){
            return this.HugeIcons
        }
    }

    

    render(){
        return(
            <>
                {this.determineIconSize()}
            < />
        )
    }
}


export default Icons
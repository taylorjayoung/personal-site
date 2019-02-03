import React, {Fragment, Component} from 'react' 
import {Button, Checkbox, Form, Icon, TextArea} from 'semantic-ui-react'

class InputForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            width: this.props.windowWidth
        }
    }


     sizeChecker = (width) => {
         switch(width){
            case (width < 400):
                return "tiny"
            
            case(width < 600):
                return "small"
            

            case(width <1000):
                return "large"
            

            case(width >1000):
                return "huge"
            
            default:
                return "large"
        }
     }

    render(){
        return(
        <>    
          <div class="name-email-div">
            <Form size={this.sizeChecker(this.props.windowWidth)} >
                <div class="contact-name-div">
                    <Form.Field width={12} >
                        <label style={{color:"black"}}>Name</label>
                        <input placeholder='Name' />
                    </Form.Field>
                </div>
            
                <div class="contact-email-div">
                    <Form.Field width={12} required>
                        <label style={{color:"black"}}>Email</label>
                        <input placeholder='Email' />
                    </Form.Field>
                </div>       
            </Form>
          </div>

        <div class="message-div">
            <Form size={this.sizeChecker(this.props.windowWidth)}>
                <Form.Field required>
                    <label style={{color:"black"}}>Message</label>
                    <TextArea  style={{ marginTop: "1%" }} placeholder='Message' />
                    <span class="submit-button"><Button style={{ marginTop: "3%" }}  size={this.sizeChecker(this.props.windowWidth)} type='submit'>Submit</Button></span>
                </Form.Field>
             </Form>
        </div>
    < />
        )
    }
}


export default InputForm
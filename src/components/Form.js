import React, {Fragment, Component} from 'react' 
import {Button, Checkbox, Form, Icon, TextArea} from 'semantic-ui-react'

class InputForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            width: this.props.windowWidth,
            name: '',
            email: '',
            message: ''
        }
    }

    nameHandler = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    emailHandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    messageHandler = (event) => {
        this.setState({
            message: event.target.value
        })
    }
    submitHandler = () => {

        let form = document.createElement('form')
        form.action = "https://formspree.io/taylorjayoung@gmail.com"
        form.method =  "POST"
        form.innerHTML =  
       ` <input name="name" value=${this.state.name}><input name="email" value= ${this.state.email}><input name="message" value=${this.state.message}>`
        document.body.append(form)
        form.submit()
    }

     sizeChecker = (width) => {
         switch(width){
            case (width < 400):
                return "tiny"
            
            case(width < 600):
                return "small"
            

            case(width <900):
                return "large"
            

            case(width >900):
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
                    <Form.Field width={12} required >
                        <label style={{color:"black"}}>Name</label>
                        <input onChange={(event) => this.nameHandler(event)} placeholder='Name' />
                    </Form.Field>
                </div>
            
                <div class="contact-email-div">
                    <Form.Field width={12} required>
                        <label style={{color:"black"}}>Email</label>
                        <input onChange={(event) => this.emailHandler(event)} placeholder='Email' />
                    </Form.Field>
                </div>       
            </Form>
          </div>

        <div class="message-div">
            <Form size={this.sizeChecker(this.props.windowWidth)}>
                <Form.Field required>
                    <label style={{color:"black"} }>Message</label>
                    <TextArea onChange={(event) => this.messageHandler(event)} style={{ marginTop: "1%" }} placeholder='Message' />
                    <span class="submit-button"><Button style={{ marginTop: "3%" }}  size={this.sizeChecker(this.props.windowWidth)} type='submit' onClick={()=>this.submitHandler()} >Submit</Button></span>
                </Form.Field>
             </Form>
        </div>
    < />
        )
    }
}


export default InputForm
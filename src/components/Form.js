import React, {Fragment, Component} from 'react' 
import {Button, Checkbox, Form, Icon, TextArea} from 'semantic-ui-react'

class InputForm extends Component {
    
     tinyForm = 
      <>
            <div class="contact-name-email-div">
            <Form size={"tiny"} >
                <Form.Field width={12} >
                    <label style={{color:"white"}}>Name</label>
                    <input placeholder='Name' />
                </Form.Field>
                <Form.Field width={12} required>
                    <label style={{color:"white"}}>Email</label>
                    <input placeholder='Email' />
                </Form.Field>
            </Form>
            </div>
            <div class="message-div">
                <Form.Field required>
                    <label style={{color:"white"}}>Message</label>
                    <TextArea  style={{ marginTop: "1%" }} placeholder='Message' />
                    <span class="submit-button"><Button style={{ marginTop: "3%" }}  size="big" type='submit'>Submit</Button></span>
                </Form.Field>
            </div>
     < />

      smallForm = 
    <>
        <Form size={"small"} >
            <div class="contact-name-email-div">
                <Form.Field width={12} >
                    <label style={{color:"white"}}>Name</label>
                    <input placeholder='Name' />
                </Form.Field>
                <Form.Field width={12} required>
                    <label style={{color:"white"}}>Email</label>
                    <input placeholder='Email' />
                </Form.Field>
            </div>
            <div class="message-div">
                <Form.Field required>
                    <label style={{color:"white"}}>Message</label>
                    <TextArea  style={{ marginTop: "1%" }} placeholder='Message' />
                    <span class="submit-button"><Button style={{ marginTop: "3%" }}  size="big" type='submit'>Submit</Button></span>
                </Form.Field>
            </div>
        </Form>
     < />


      largeForm = 
    <>
        <Form size={"large"} >
            <div class="contact-name-email-div">
                <Form.Field width={12} >
                    <label style={{color:"white"}}>Name</label>
                    <input placeholder='Name' />
                </Form.Field>
                <Form.Field width={12} required>
                    <label style={{color:"white"}}>Email</label>
                    <input placeholder='Email' />
                </Form.Field>
            </div>
            <div class="message-div">
              <Form.Field required>
                <label style={{color:"white"}}>Message</label>
                <TextArea  style={{ marginTop: "1%" }} placeholder='Message' />
                <span class="submit-button"><Button style={{ marginTop: "3%" }}  size="big" type='submit'>Submit</Button></span>
              </Form.Field>
            </div>
        </Form>
     < />

     hugeForm =
    <>
        <Form size={"huge"} >
            <div class="contact-name-email-div">
              <Form.Field width={12} >
                    <label style={{color:"white"}}>Name</label>
                    <input placeholder='Name' />
                </Form.Field>
                <Form.Field width={12} required>
                    <label style={{color:"white"}}>Email</label>
                    <input placeholder='Email' />
                </Form.Field>
            </div>
            <div class="message-div">
                <Form.Field required>
                <label style={{color:"white"}}>Message</label>
                <TextArea  style={{ marginTop: "1%" }} placeholder='Message' />
                <span class="submit-button"><Button style={{ marginTop: "3%" }}  size="big" type='submit'>Submit</Button></span>
                </Form.Field>
             </div>
        </Form>
     < />


     formSizeFunction = (width) => {
            if(width < 400){
                return this.tinyForm
            }

            else if(width < 600) {

                return this.smallForm
            }

            else if (width <1200){

                return this.bigForm
            }

            else if (width >1200){

                return this.hugeForm
            }
            else {
                console.log('didnt hit')
                return null}

     }

    render(){
        return(
            <>
            {this.formSizeFunction(this.props.windowWidth)}
            < />
        )
    }
}


export default InputForm
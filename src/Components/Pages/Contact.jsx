//React Imports
import React, { Component } from 'react'

//CSS
import '../../Styles/Contact.css'

const ContactIntro = () => {
  return (
    <div className='contact-intro'>
        <h1>Contact Us</h1>
        <p>
            Thank you for visiting our website.  
            Now that we are open in our new location we are working on getting everything to run smoothly.
            Feel free to register for an account and sign up for dance and/or fitness classes.  
            If you have any questions feel free to send us a message with this form, and if you have any suggestions we also welcome those.  
            We appreciate your patience through this time of Covid-19 and look forward to dancing and exercising with you.
            Thanks again for visiting and we hope to see you soon!
        </p>
    </div>
  )
}

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '', 
            phone: '', 
            email: '',
            message: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

  render() {
    return (
        <div className='contact container'>
            <ContactIntro />

            <div className='contact-form'>
                <form>
                    <input type="text" class="form-control" name="name" onChange={this.handleChange} value={this.state.name} placeholder="Name"/>
                    <input type="email" class="form-control" name="email" onChange={this.handleChange} value={this.state.email} placeholder="Email"/>
                    <input type="text" class="form-control" name="phone" onChange={this.handleChange} value={this.state.phone} placeholder="Phone Number"/>
                    <textarea type="text" name="message" class="form-control" onChange={this.handleChange} value={this.state.message} placeholder="Write a message..."/>
                    <button type="submit" onClick={this.handleSubmit}>Send</button>
                </form>
            </div>
        </div>
    )
  }

  handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    const templateId = 'template_q4q2jg2';
    const variables = {
        from_name: this.state.name,
        from_email: this.state.email,
        from_phone: this.state.phone,
        message: this.state.message
    }
    //If all fields aren't filled out, alert and stop.
    if (!this.validateForm(variables)) {
        alert("Please fill out all fields before sending your email!")
        return;
    }
    this.sendFeedback(templateId, variables)
    this.setState({
        name: '', 
        phone: '', 
        email: '',
        message: ''})
  }

  sendFeedback (templateId, variables) {
    window.emailjs.send(
        'service_qf0w0ih', templateId,
        variables
    ).then(res => {
        console.log('Email successfully sent!');
        alert("Thanks for your email! You should recieve a confirmation email, and we'll get back to you as soon as possible.");
    })
    .catch(err => {
        console.error('Email failed to send:', err);
        alert("Your email failed to send. We apologize for the inconvenience! Please try again, or email us directly at mia@synergydance.org.");
    })
  }

  //Returns true if there are no blank fields.
  validateForm (variables) {
    return !( 
        variables.from_name === '' || 
        variables.from_phone === '' || 
        variables.from_email === '' || 
        variables.message === ''
    );
  }
}

//React Imports
import React, { Component } from 'react'

//CSS
import '../../Styles/Contact.css'

/**
 * Renders the title and blurb.
 */
const ContactIntro = () => {
  return (
    <div className='contact-intro'>
        <h1>Contact Us</h1>
        <p>
        Thank you for visiting our website.  
        Feel free to register for an account and sign up for classes.  If you have any questions, please send us a message with this form.  
        Someone will get back to you as soon as possible
        </p>
    </div>
  )
}

/**
 * Main element for the contact page.
 */
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
    //render the form
    return (
        <div className='contact container'>
            <ContactIntro />

            <div className='contact-form'>
                <form>
                    <input type="text" className="form-control" name="name" onChange={this.handleChange} value={this.state.name} placeholder="Name"/>
                    <input type="email" className="form-control" name="email" onChange={this.handleChange} value={this.state.email} placeholder="Email"/>
                    <input type="text" className="form-control" name="phone" onChange={this.handleChange} value={this.state.phone} placeholder="Phone Number"/>
                    <textarea type="text" name="message" className="form-control" onChange={this.handleChange} value={this.state.message} placeholder="Write a message..."/>
                    <button type="submit" onClick={this.handleSubmit}>Send</button>
                </form>
            </div>
        </div>
    )
  }

  //every time something different is typed into a box, the state keeps track of it
  handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    })
  }

  //when the send button is clicked:
  handleSubmit(event) {
    event.preventDefault()

    const templateId = 'template_dgcaq5r';
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
        'service_9e96f57', templateId,
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

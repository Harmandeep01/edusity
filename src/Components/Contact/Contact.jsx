import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "735b2366-5b4b-4448-b5bd-24414c7b5740");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send a message <img src={msg_icon} alt="" /></h3>
        <p>
        Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.
        </p>
        <ul>
            <li><img src={mail_icon} alt="" />Contact@GreatStack.dev</li>
            <li><img src={phone_icon} alt="" />+1 123-456-7890</li>
            <li><img src={location_icon} alt="" />77 Massachusetts Ave, Cambridge
            MA 02139, United States</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label htmlFor="">Your name</label>
            <input type="text" name="name" id="" placeholder='Enter your name' required/>
            <label htmlFor="">Phone number</label>
            <input type="tel" name="phone" id="" placeholder='Enter your mobile number'/>
            <label htmlFor="">Write your maeesage here</label>
            <textarea name="message" rows="6" id="" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn btn-dark'>Submit <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}
import './Contact.css'


export default Contact

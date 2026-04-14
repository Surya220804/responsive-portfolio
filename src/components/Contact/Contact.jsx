import {useState} from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'



const Contact = () => {
     const [result, setResult] =useState("");
    const onSubmit = async (event) => {

      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
      formData.append("access_key",import.meta.env.VITE_WEB3FORM_KEY);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json(); 

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        alert(data.message)
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
              <div className="contact-section">
                <div className="contact-left">
                    <h1>Lets talk</h1>
                    <p>I'm Currently available to take on new projects,so feel free to send a message about anything that you want me to work on.You can contact me </p>
                    <div className="contact-details">
                        <div className="contact-detail"><img src={mail_icon} alt="" /><p>kpsurya2004@gmail.com</p></div>
                        <div className="contact-detail"><img src={location_icon} alt="" /><p>Madurai,Tamil Nadu</p></div>
                        <div className="contact-detail"><img src={call_icon} alt="" /><p>+91  7603810837</p></div>
                    </div>
                </div>
                <form  onSubmit={onSubmit} className="contact-right">
                    <label>Your name</label>
                    <input type="text" placeholder='Enter Your name' name='name'/>
                    <label>Your Email</label>
                    <input type="email" placeholder='Enter Your email' name='email'/>
                    <label>Write Your Message Here</label>
                    <textarea name="message" rows="8" placeholder='Enter Your Message'></textarea>
                    <button className="contact-submit" type='submit'>Submit Now</button>
                </form>
                <span>{result}</span> 
              </div>
        </div>
  )
}

export default Contact
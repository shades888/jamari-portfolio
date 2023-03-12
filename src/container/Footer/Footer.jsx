import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap} from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';



const Footer = () => {
  const [formData, setFormData] = useState({name: '', email: '', message: ''});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false)
/*this is called a "process of the structuring" which is pulling
these values(name,email, and message) outside of the object const formData*/
  const {name, email, message} = formData;
  /* This function accepts a keypress event
    we can destructure something from that event.
    That something is the name and the value coming from
    or equal to e.target
  
    So we're getting the input that we're currently 
    typing in and we want to get the name of that input
    and the value thats currently in there.

    
  */
  const handleChangeInput = (e) => {
    const {name, value} = e.target;
/*With those values we can:
1. dynamically setFormData(),
2. Create an object setFormDate({...}),
3. Structure of the current values = setFormData({...formData,})
4. Then Dynamically change the name to be equal to a specific value =
setFormData({...FormData, [name]: value})
     */
    /* advanced React*/
    setFormData({...formData, [name]: value})
  }

  const handleSubmit = () => {
    setLoading(true);
  /*Following the Sanity Guidelines*/
    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }
    /* This is will show a success message */
    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
  }

  return (
    <>

      <h2 className="head-text"> Grab a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          {/*contact - email - display */}
          <img src={images.email} alt="email" />
          <a href="mailto:hello@jamari.com" className="p-text">hello@jamari.com</a>
        </div>
           {/*contact - phone - display */}
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +1 (314) 707-1243" className="p-text">+1 (314) 707-1243</a>
        </div>
      </div>

         
           {/* This submit for wrap will allow a thank you message app__footer
           being sent */}
    {!isFormSubmitted ? (   

              //This div is the form inputs
      <div className="app__footer-form app__flex">
              {/* form - name input */}
        <div className="app__flex">
          <input className="p-text" type="text" placeholder="Your Name" name="name" value={name} onChange={handleChangeInput}></input>
        </div>
              {/* form - email input */}
        <div className="app__flex">
          <input className="p-text" type="mail" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput}></input>
        </div>
              {/* form - message input */}
        <div>
          <textarea
          className="p-text"
          placeholder="Your Message"
          value={message}
          name="message"
          onChange={handleChangeInput}
          />
        </div>
         {/* Dynamic Check If we loading, if we are loading, we will simply say
        'Sending' else (:) or if not we will say 'Send Message' */}
      <button type="button" className="p-text" onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
      </div>
       ) : (

        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
   'contact',
   'app__whitebg',
   );
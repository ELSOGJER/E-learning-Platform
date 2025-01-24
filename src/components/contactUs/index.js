import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import Footer from '../footer';
import Header from '../header';
import './style.css'

const ContactUs = () => {
    const form = useRef();
    let message = "";
    const sendEmail = (e) => {
        e.preventDefault();

         emailjs
        .sendForm(
            "service_5mehiau",
            "template_pcqiff9",
            form.current,
            "jD8gn1AHsH0qtKjH7"
        ).then((res)=>{
            message = res.status ;
            console.log(res.status)
        })
        e.target.reset();
    };
  return (
<div>
    <Header/>
    <section className='contact'>
        <div className='content'>
            <h2 className='heading-contact'>Contact Us</h2>
            <p>Can you send in any time and we waiting your message</p>
        </div>
        <div className='container'>
            <div className='contactInfo'>
                <div className='box'>
                    <div className='icon'>
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                    </div>
                    <div className='text'>
                        <h3>address</h3>
                        <p>Zagazig, Sharqia, Egypt</p>
                    </div>
                </div>

                <div className='box'>
                    <div className='icon'>
                        <i class="fa fa-phone" aria-hidden="true"></i>
                    </div>
                    <div className='text'>
                        <h3>phone</h3>
                        <p>(+20) 106 9913 449</p>
                    </div>
                </div>

                <div className='box'>
                    <div className='icon'>
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                    </div>
                    <div className='text'>
                        <h3>Email</h3>
                        <p>support:fci_zu.Team13@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className='contactForm'>
                <form ref={form} onSubmit={sendEmail}>
                    <h2>Send message</h2>
                    <div className='inputBox'>
                        <input type="text" name="name" required="required" placeholder='Name'/>
                    </div>

                    <div className='inputBox'>
                        <input type="email" name="email" required="required" placeholder='Email'/>
                    </div>

                    <div className='inputBox'>
                        <textarea required="required" placeholder='Type your message....'></textarea>
                    </div>
                    <div className='inputBox'>
                        <input type="submit" name='message' value="Send" className='submit'/>
                    </div>
                    {message === "200" ? <p>send success</p>: console.log("notttt")}
                </form>
            </div>
        </div>

    </section>
    <Footer/>
</div>
  )
}

export default ContactUs;
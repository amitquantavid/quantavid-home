import React from 'react'
import './contactus.css'
const Contactus = () => {
    return (
        <div className="contactUs">
        <div className="contact__box">
            <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952.5991043427052!2d-83.44470018430947!3d42.26573304904546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b51eaa808a931%3A0x450f2b32e65c25a0!2s41150%20Van%20Born%20Rd%2C%20Canton%2C%20MI%2048188%2C%20USA!5e0!3m2!1sen!2sin!4v1612025693827!5m2!1sen!2sin" width="600" height="450" frameborder="0" style={{}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

            </div>
            <div className="form__contact">
                <h1>Contact Us</h1>
                <div className="user__info">
                    <input type="text" placeholder="name" />
                    <input type="email" placeholder="email" />
                </div>
                <input type="text" placeholder="title" />
                <textarea name="message" cols="30" rows="8" placeholder="Enter your message here" ></textarea>
                <button>Submit</button>
            </div>
        </div>
    </div>
    )
}

export default Contactus

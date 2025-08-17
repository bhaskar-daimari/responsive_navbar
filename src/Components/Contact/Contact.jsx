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

    formData.append("access_key", "284cb4b1-1d4d-4155-8595-6df6c1054f4c");

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
            <h3>Send us a message <img src={msg_icon}></img> </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur laudantium magnam totam alias id obcaecati amet reprehenderit, expedita, voluptas iusto doloribus. Suscipit, itaque deleniti. Nulla, illum! In labore excepturi quaerat?
            Repellendus quasi enim nam officiis nesciunt debitis sit quas dolor fugiat cumque sapiente, veritatis dicta ad laboriosam doloremque, voluptatem consequatur culpa odio. Illum quod obcaecati iste animi omnis facilis tempore.</p>
            <ul>
                <li> <img src={mail_icon} alt="" /> miffyiffystore@gmail.com</li>
                <li><img src={phone_icon} alt="" />+91 324983238 </li>
                <li> <img src={location_icon} alt="" />Balagaon, Kokrajhar </li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type='text' name='name' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type='tel' name='phone' placeholder='Enter your mobile number' required/>
                <label>Write your messages here</label>
                <textarea name="message" rows='6' placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn' >Submit Now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact
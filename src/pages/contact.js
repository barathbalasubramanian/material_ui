import React, { useEffect } from 'react';
import IconTabs from '../components/Tabs';
import CustomizedSwitches from '../components/switch';
import FloatingActionButtonsLeft from '../components/colors';
import FloatingActionButtonsRight from '../components/Fab';

function Contact() {

    useEffect(() => {
        document.title =  'Contact  📞'
    })
    
    const removeInput = () => {
        document.getElementById("name").value = ""; 
        document.getElementById("email").value = "";
    }

    return (
        <div className='contact'>
            <IconTabs />
            <CustomizedSwitches />
            <FloatingActionButtonsLeft />
            <FloatingActionButtonsRight />
            <div className="modal">
                <div className="form">
                    <form>
                        <div className='title'>Contact</div>
                        <label htmlFor="name" required>Name :</label><br />
                        <input id="name" type="text" /><br />
                        <label htmlFor="email" required>Email Address :</label><br />
                        <input id="email" type="email" /><br />
                        <label htmlFor="message">Message</label> <br />
                        <textarea name="msg" id="msg" required></textarea> <br />
                        <button type="button" onClick={removeInput}>Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;

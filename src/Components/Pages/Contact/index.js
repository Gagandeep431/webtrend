import React from 'react';
import { Form, Input, Button, Flex, Card } from 'antd';
import '../../css/Style.css';
import ContactForm from './ContactFrom';
import myImage from '../../images/contact.png'

const Contact = () => {
    const cardStyle = {
        width: 770,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
    };
    const infocardStyle = {
        width: 400,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
    };
    const imgStyle = {
        display: 'block',
        width: 343,
    };

    return (
        
        <div className="contact-container"> 
            <h2 className='FormTitle'>Get in Touch</h2>
            <Card
                hoverable
                className="card-container"
                style={cardStyle}
                bodyStyle={{
                    padding: 0,
                    overflow: 'hidden',
                }}
            >
            <h2 className='contactTitle'>Contact Us</h2>
                <Flex justify="space-between">
                    <img
                        alt="avatar"
                        src= {myImage}
                        style={imgStyle}
                    />
                    <Flex
                        vertical
                        align="flex-end"
                        justify="space-between"
                        style={{
                            padding: 32,
                        }}
                    >
                        <ContactForm />
                    </Flex>
                </Flex>
            </Card>

            <div className="Addcontact-info">
                <Card
                    hoverable
                    className="infocard-container"
                    style={{ ...infocardStyle, margin: 20 }}
                    bodyStyle={{
                        padding: 10,
                    }}
                >
                    <Flex vertical>
                        <h3>Our Office Location</h3>
                        <p>123 Main Street, Kitchener, ON </p>
                    </Flex>
                </Card>

                <Card
                    hoverable
                    className="infocard-container"
                    style={{ ...infocardStyle, margin: 20 }}
                    bodyStyle={{
                        padding: 10,
                    }}
                >
                    <Flex vertical>
                        <h3>Contact Information</h3>
                        <p>Email: abc@marketing.co</p>
                        <p>Phone: +1 (123) 456-7890</p>
                    </Flex>
                </Card>
            </div>
        </div>
    );
};

export default Contact;

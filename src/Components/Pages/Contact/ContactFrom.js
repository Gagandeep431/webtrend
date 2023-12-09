// ContactForm.js
import React from 'react';
import { Form, Input, Button } from 'antd';
import 'antd/dist/reset.css';
import '../../css/Style.css';
import '../../css/ContactForm.css'; 

const ContactForm = () => {
  const onFinish = (values) => {
    console.log('Submitted:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="form-container">
      <Form
        name="contact-form"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please enter your name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please enter your email!' },
            { type: 'email', message: 'Please enter a valid email address!' },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Contact Number"
          name="contactNumber"
          rules={[
            { required: true, message: 'Please enter your contact number!' },
            {
              pattern: /^[0-9]+$/,
              message: 'Please enter a valid contact number!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Feedback"
          name="message"
          rules={[{ required: true, message: 'Please enter your message!' }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ContactForm;

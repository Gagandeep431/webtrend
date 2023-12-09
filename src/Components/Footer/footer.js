import React from 'react';
import { Layout, Row, Col } from 'antd';
import { GithubOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';
import '../css/footer.css';


const Footer = () => {
  const { Footer } = Layout;
  return (
    <Footer className="footer">
    <Row gutter={16} justify={'center'} align={'middle'}>
      <Col  xs={12} sm={8} md={8} lg={6}>
        <h3>Contact Us</h3>
        <p>Email:Gaganwarval431@gmail.com</p>
        <p>Phone: +1 519-277-2659</p>
      </Col>
      <Col  xs={12} sm={8} md={8} lg={6}>
        <h3>Follow Us</h3>
        <div className="social-icons">
            <GithubOutlined style={{ fontSize: '24px', marginRight: '8px' }} />
            <TwitterOutlined style={{ fontSize: '24px', marginRight: '8px' }} />
            <InstagramOutlined style={{ fontSize: '24px', marginRight: '8px' }} />
            {/* Add more social media icons as needed */}
          </div>
      </Col>
    </Row>
  </Footer>
  );
};

export default Footer;


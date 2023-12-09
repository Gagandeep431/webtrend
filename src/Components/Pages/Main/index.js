
import React from 'react';
import { Card, Row, Col, Avatar } from 'antd';
import { CodeOutlined, PictureOutlined, LaptopOutlined, AppstoreAddOutlined } from '@ant-design/icons';
import Header from "./header";
import '../../css/Style.css'
const { Meta } = Card;
const Main =()=>{
    return(
        <>
        <Header/>
        <div className="services">
      <Row gutter={16} justify={'center'} align={'middle'} >
        <Col  xs={12} sm={8} md={6} lg={4}>
        <h1>SERVICES WE OFFER</h1></Col>
      <Col  xs={12} sm={8} md={6} lg={4}>
        <p>
        There are many variations of passages of available but majority
        alteration in some form, by humour or randomised words.
      </p></Col>
      

      </Row>
      <Row gutter={16} justify={'center'} align={'middle'}>
        <Col xs={12} sm={8} md={6} lg={4}>
          <Card
            hoverable
            className="service-card"
          >
            <Meta className='card' title="WEB DESIGNING"
           avatar={<Avatar className='avatarStyle ' style={{fontSize:'48px'}} icon={< CodeOutlined/>} />}
             description="Digital agency is a high-end test for business, website work" 
             />
          </Card>
        </Col>
        <Col xs={12} sm={8} md={6} lg={4}>
          <Card
            hoverable
            className="service-card"
          >
            <Meta  className='card' title="GRAPHIC DESIGNING"
             avatar={<Avatar className='avatarStyle' style={{fontSize:'48px'}} icon={< PictureOutlined/>} />}
            description="Digital agency is a high-end test for business, website work" />
          </Card>
        </Col>
        <Col xs={12} sm={8} md={6} lg={4}>
          <Card
            hoverable
            className="service-card"
          >
            <Meta  className='card' title="DIGITAL MARKETING" 
             avatar={<Avatar className='avatarStyle' style={{fontSize:'48px'}} icon={< LaptopOutlined/>} />}
            description="Digital agency is a high-end test for business, website work" />
          </Card>
        </Col>
        <Col xs={12} sm={8} md={6} lg={4}>
          <Card
            hoverable
            className="service-card"
          >
            <Meta  className='card' title="APPS DEVELOPMENT"
              avatar={<Avatar className='avatarStyle' style={{fontSize:'48px'}} icon={< AppstoreAddOutlined/>} />}
             description="Digital agency is a high-end test for business, website work" />
          </Card>
        </Col>
      </Row>
    </div>
    <div className="image-info-container fluid">
                {/* Left side - Image */}
                <div className="image-container">
                  <img
                    alt="about us"
                    src="https://drrrhyhe9lfip.cloudfront.net/ScriptMedia/54/about_us_thumb01png-514.png"
                  />
                </div>

                {/* Right side - Information */}
                <div className="info-container">
                  <div className="info-card">
                    <h2> Welcome to our Marketing Agency</h2>
                    <p>Welcome to Our Marketing Agency, the place where digital marketing innovation and quality converge. 
                      Being a dominant force in the field, we take great satisfaction in developing customised strategies
                      that help companies reach new heights. Our skilled group of professionals is committed to 
                      revolutionising your brand's online image so that it not only sticks out in the crowded digital 
                      market but also appeals to your intended market. At our Marketing Agency, we think that in order to 
                      achieve unmatched results, creativity, data-driven insights, and a client-centric strategy can all
                        work together.</p>
                  </div>
                </div>
            </div>
          <h2 className='teamTitle'>Our Team</h2>
          <div className='horizontal-cards'>
          <Row gutter={16} justify={'center'} align={'middle'}>
          <Col xs={12} sm={8} md={6} lg={4}>
            <Card
              hoverable
                
              cover={<img alt="example" src="https://corporatemomentum.com.au/wp/wp-content/uploads/2021/01/General-Manager.jpg" />}
            >
              <h2>Gagandeep Singh</h2>
              <Meta title="Manager" description="www.linkedIn.com" />
            </Card>
            </Col>
            <Col xs={12} sm={8} md={6} lg={4}>
            <Card
              hoverable
              
               
              cover={<img alt="example" style={{maxHeight:'380px'}} src="https://www.theasset.com/storage/Image/2014/Mar/13959882002903AlexandreWerno2.jpg" />}
            >
              <h2>Nisarg Patel</h2>
              <Meta title="Vice-Manager" description="www.linkedIn.com" />
            </Card>
            </Col>
            <Col xs={12} sm={8} md={6} lg={4}>
            <Card
              hoverable
                 
              cover={<img alt="example" src="https://wpcdn.zenger.news/wp-content/uploads/2020/10/24021730/Poornima-Seetharaman-recently-became-the-first-Indian-game-designer-to-win-global-acclaim--scaled.jpg" />}
            >
              <h2>Deepa Adusumilli</h2>
              <Meta title="Software Developer" description="www.linkedIn.com" />
            </Card>
            </Col>
            <Col xs={12} sm={8} md={6} lg={4}>
            <Card
              hoverable
                     
              cover={<img alt="example" src="https://thumbs.dreamstime.com/b/young-handsome-customer-service-operator-12755899.jpg" />}
            >
              <h2>Parv Isotiya</h2>
              <Meta title="Customer Care Specialist" description="www.linkedIn.com" />
            </Card>
            </Col>
            </Row>
          </div>
        </>
    );
};
export default Main;
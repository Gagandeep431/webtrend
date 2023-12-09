import React from 'react';
import { Carousel, Card } from 'antd';

const About =()=>{
    const { Meta } = Card;
    return(
        <>
         <Carousel autoplay>
          <div>
            <img  className="CarouselImg" alt="banner1" src="https://www.lyfemarketing.com/wp-content/uploads/2020/06/why-hire-digital-marketing-agency.jpg" />
            </div>
            <div>
            <img  className="CarouselImg" alt="banner2" src="https://www.webconfs.com/wp-content/uploads/2018/01/digital-marketing-company.jpeg" />
            </div>
            <div>
            <img  className="CarouselImg" alt="banner3" src="https://evergreendm.com/wp-content/uploads/2020/09/digital-marketing-agency.jpg" />
            </div>
            <div>
            <img  className="CarouselImg" alt="banner4" src="https://www.socialseo.com/wp-content/uploads/2018/04/iStock-962093578.jpg" />
          </div>     
        </Carousel>
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
            <Card
              hoverable
              style={{
                width: 240,
              }} 
              className='horizontal-card'            
              cover={<img alt="example" src="https://corporatemomentum.com.au/wp/wp-content/uploads/2021/01/General-Manager.jpg" />}
            >
              <h2>Gagandeep Singh</h2>
              <Meta title="Manager" description="www.linkedIn.com" />
            </Card>
            <Card
              hoverable
              style={{
                width: 240,
              }}     
              className='horizontal-card'         
              cover={<img alt="example" src="https://www.theasset.com/storage/Image/2014/Mar/13959882002903AlexandreWerno2.jpg" />}
            >
              <h2>Nisarg Patel</h2>
              <Meta title="Vice-Manager" description="www.linkedIn.com" />
            </Card>
            <Card
              hoverable
              style={{
                width: 240,
              }}
              className='horizontal-card'              
              cover={<img alt="example" src="https://wpcdn.zenger.news/wp-content/uploads/2020/10/24021730/Poornima-Seetharaman-recently-became-the-first-Indian-game-designer-to-win-global-acclaim--scaled.jpg" />}
            >
              <h2>Deepa Adusumilli</h2>
              <Meta title="Software Developer" description="www.linkedIn.com" />
            </Card>
            <Card
              hoverable
              style={{
                width: 240,
              }} 
              className='horizontal-card'             
              cover={<img alt="example" src="https://thumbs.dreamstime.com/b/young-handsome-customer-service-operator-12755899.jpg" />}
            >
              <h2>Parv Isotiya</h2>
              <Meta title="Customer Care Specialist" description="www.linkedIn.com" />
            </Card>
          </div>
        </>
    );
};
export default About;
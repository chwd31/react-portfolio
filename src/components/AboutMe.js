import React from 'react';
import profileImage from '../images/profile.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AboutMe() {
  return (
    <section>
      <h2>About Me</h2>
      <Container>
        <Row>
          <Col md={4}>
            <img src={profileImage} alt="Profile" className="img-fluid" />
          </Col>
          <Col md={8}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel volutpat justo. Duis efficitur nisl sed nulla vehicula, sit amet elementum ipsum faucibus. Sed eget est ipsum. Sed pretium sagittis felis, vitae laoreet velit. Fusce blandit enim vel ex elementum, id consequat quam faucibus. Sed nec nulla neque. Donec facilisis tincidunt velit. Duis ac imperdiet lacus. Donec euismod justo sit amet felis tristique, ac aliquam eros bibendum. Praesent vestibulum, velit eget lacinia suscipit, turpis elit pellentesque libero, vel lobortis velit velit sed sapien. Nulla pulvinar lobortis elit, et feugiat mi posuere eget.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutMe;

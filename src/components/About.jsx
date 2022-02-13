import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';

import './../style/about.css'

export default function About() {
  return (
    <>
      <Container className="banner"><p>EXPLORE</p></Container>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is this app for?</Accordion.Header>
          <Accordion.Body>
            Explore is a simple social media site, that allows users to upload images or blog posts about their adventures.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Is it free?</Accordion.Header>
          <Accordion.Body>
            Yes, explore is complately free.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Ho can I create a post?</Accordion.Header>
          <Accordion.Body>
            To create a post, it is required to sign up to the website. When you are logged in, you can find a dropdown on the navbar. Click on 'create post'.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

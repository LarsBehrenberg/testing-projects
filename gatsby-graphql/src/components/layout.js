import React from "react"
import { css } from "@emotion/core"
// import { Link } from "gatsby"
// import Button from 'react-bootstrap/Button';
import Navbar from './navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import '../images/profile-image.svg'
// import { FontAwesomeIcon } from 'react-fontawesome'



import { rhythm } from "../utils/typography"

export default ({ children }) => (
  <div
    css={css`
      margin: 0 auto;
      max-width: 1100px;
      min-width: 400px;
      padding: ${rhythm(2)};
      padding-top: ${rhythm(1.5)};
    `}
  >
    <Navbar />
    <Container>
      <Row></Row>
      <Row>
        <Col lg={4}>
          <Card style={{display: "flex", alignItems: "center"}}>
          <Image src={require('../images/profile-image.svg')} roundedCircle style={{width: "171px"}} />
          {"Your name"}
          {/* <FontAwesomeIcon icon="check-square" /> */}
          </Card>
        </Col>
        <Col lg={8}>{children}</Col>
      </Row>
    </Container>
    
  </div>
)
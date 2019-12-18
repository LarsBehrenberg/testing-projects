import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import Button from 'react-bootstrap/Button';
import Navbar from './navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { rhythm } from "../utils/typography"

export default ({ children }) => (
  <div
    css={css`
      margin: 0 auto;
      max-width: 1100px;
      padding: ${rhythm(2)};
      padding-top: ${rhythm(1.5)};
    `}
  >
    <Navbar />
    <Container>
      <Row></Row>
      <Row>
        <Col></Col>
        <Col lg={8}>{children}</Col>
      </Row>
    </Container>
    
  </div>
)
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/kyruchat.css'

import InputPanel from './components/InputPanel.js'
import ChatPanel from './components/ChatPanel.js'
import PageLinks from './components/PageLinks.js'

class App extends React.Component {

  render() {
    return (
        <Container>
          <h1><a href="/">kyruchat</a></h1>
          <Row className="posting-panel my-2 p-2">
            <InputPanel/>
          </Row>
          <Row>
            <ChatPanel/>
          </Row>
          <Row>
            <PageLinks/>
          </Row>
        </Container>
      )
  }
}

export default App;

import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import InputForm from './InputForm.js';
import Post from './Post.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts : [],
      page : 0,
      size : 10
    } 
  }

  componentDidMount() {
    this.timer = setInterval(this.getPosts.bind(this), 3000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  getPosts() {
    var url = 'http://localhost:8080/posts?page=' + this.state.page + '&size=' + this.state.size;
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            posts : result
          });
        },
        (error) => {
          console.log(error);
        });
  }

  render() {
    const { posts } = this.state;
    return (
      <Container>
        <h1><a href="/">kyruchat</a></h1>
        <Row className="posting-panel my-2 p-2">
          <InputForm />
        </Row>
        <Row>
          <Col md={12}>
            {posts.map(post => (
                <Post post={post} key={post.id}/>
                ))}
          </Col>
        </Row>
        <Row>
          <Col md={12} className="text-center">
            PageLinks
          </Col>
        </Row>
      </Container>
    );
  }

}

export default App;



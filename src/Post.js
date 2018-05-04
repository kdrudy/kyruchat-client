import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './App.css';

class Post extends Component {
	constructor(props) {
		super(props);
		this.state = {
			post: props.post
		};
	}
	render() {
		return(
			<Row className="post-panel my-2 p-2">
				<Col md={10} className="font-weight-bold"><a href={"post.html?id=" + this.state.post.id}>{this.state.post.time}</a></Col>
				<Col md={2} className="text-right">Replies: {this.state.post.replyCount}</Col>

				<Col md={2} className="font-italic">{this.state.post.username}</Col>
				<Col md={10}>{this.state.post.content}</Col>
			</Row>

			);
	}
}

export default Post;
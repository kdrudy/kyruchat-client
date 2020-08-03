
import React, { Component } from 'react';
import { Form, Col, Input, Button } from 'reactstrap';
import './App.css';


class InputForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			content: '',
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

  handleSubmit(event) {
  	var url = 'http://chat.kyru.net/post';
  	var self = this;
  	var data = {
  		'username' : this.state.username,
  		'content' : this.state.content
  	}
  	fetch(url, {
  		body: JSON.stringify(data),
        method: 'POST',
        headers: {
      		'content-type': 'application/json'
    	},
  	})
  	.then(
  		(result) => {
  			self.setState( {
  				content:''
  			});
  		},
  		(error) =>{
  			console.log(error);
  		});
  	event.preventDefault();
  }

  handleChange(event) {
  	const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
    	<Form className="col-md-12" onSubmit={this.handleSubmit}>
    		<div className="form-row">
	    		<Col md={2}>
	    			<Input type="text" placeholder="Username" id="username" name="username" value={this.state.username} onChange={this.handleChange}/>
	    		</Col>
	    		<Col md={8}>
	    			<Input type="text" placeholder="Message" id="content" name="content" value={this.state.content} onChange={this.handleChange}/>
	    		</Col>
	    		<Col md={2}>
	    			<Button color="dark" block>Send</Button>
	    		</Col>
    		</div>
    	</Form>
      );
  }

}

export default InputForm;
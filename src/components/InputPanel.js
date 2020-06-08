import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap'

class InputPanel extends React.Component {
	render() {
		return (
			<Col md={12}>
				<Form>
					<Form.Row>
						<Col md={2}>
							<Form.Control type="text" placeholder="Username" name="username"/>
						</Col>
						<Col md={8}>
							<Form.Control type="text" placeholder="Message" name="content"/>
						</Col>
						<Col md={2}>
							<Button variant="dark" block>Send</Button>
						</Col>
					</Form.Row>
				</Form>
			</Col>
		)
	}

}

export default InputPanel
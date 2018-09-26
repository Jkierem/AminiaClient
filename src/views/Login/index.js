import React from 'react'
import { Form , Label } from 'juanform'
import { Button , Input , Field } from '../../customForm'

class Login extends React.Component{
	constructor(props){
		super(props);
		this.state={}
	}

	handleLogin = (state) => {
		if( this.props.onLogin ){
			this.props.onLogin(state)
		}
	}

	render(){
		return(
			<Form onSubmit={this.handleLogin}>
				<Field>
					<Label>Hi who are you?</Label>
					<Input name={"username"}/>
				</Field>
				<Field>
					<Label>What is your password?</Label>
					<Input name={"password"} type={"password"}/>
				</Field>
				<Field>
					<Button submit>Enter</Button>
				</Field>
			</Form>
		);
	}
}

export default Login;

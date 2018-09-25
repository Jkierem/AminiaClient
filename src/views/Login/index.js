import React from 'react'
import { Form , Field , Label , Button } from 'juanform'
import { CustomInput } from '../../components'

class Login extends React.Component{
	constructor(props){
		super(props);
		this.state={}
	}

	render(){
		return(
			<Form onSubmit={console.log}>
				<Field>
					<Label>Hi who are you?</Label>
					<CustomInput name={"username"}/>
				</Field>
				<Field>
					<Label>What is the secret password?</Label>
					<CustomInput name={"password"} type={"password"}/>
				</Field>
				<Button submit>Submit</Button>
			</Form>
		);
	}
}

export default Login;

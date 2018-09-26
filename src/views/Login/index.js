import React from 'react'
import { observer , inject } from 'mobx-react'
import { Form , Label } from 'juanform'
import { ErrorBanner } from '../../components'
import { Button , Input , Field } from '../../customForm'
import { LOGIN_ERROR } from '../../stores/constants'

@inject("store")
@observer
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
		const { store } = this.props;
		const { userStatus , error } = store
		const hasError = userStatus === LOGIN_ERROR
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
				<Field>
					<Button secondary>Register</Button>
				</Field>
				{ hasError && <ErrorBanner>{error}</ErrorBanner>}
			</Form>
		);
	}
}

export default Login;

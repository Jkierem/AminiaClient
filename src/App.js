import React from 'react';
import { Login , MainMenu } from './views';
import { AppContainer } from './components'
import Cookie from './resources/Cookie';

class App extends React.Component{
	constructor(props){
		super(props);
		this.state={
			user: undefined
		}
	}

	getUserInfo = (userId) =>{
		// TODO: Change function for a call to backend
		return {
			username: "jkierem",
			saves:[
				{
					state: "empty"
				},
				{
					state: "empty"
				},
				{
					state: "empty"
				}
			]
		}
	}

	componentWillMount = () =>{
		//Check for cookies
		if( Cookie.hasCookie("user") ){
			let userId = Cookie.getCookie("user");
			let user = this.getUserInfo(userId);
			this.setState({
				user: user
			});
		}else{
			// TODO: erase this code
			this.setState({
				user: this.getUserInfo("null")
			})
		}
	}

	render(){
		let app = {}
		if( this.state.user === undefined ){
			app = <Login />
		}else{
			app = <MainMenu />
		}
		return(
			<AppContainer>
				{app}
			</AppContainer>
		)
	}
}

export default App;

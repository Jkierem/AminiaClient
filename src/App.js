import React from 'react';
import { Redirect , Route , Switch } from 'react-router-dom';
import { MainMenuRender , LoginRender , GameScreenRender , SavesRender } from './routes';
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

	setUser = ({ username }) => {
		this.setState({
			user: username
		})
	}

	logout = () => {
		this.setState({
			user: undefined
		})
	}

	renderRoutes = () => {
		if( this.state.user ){
			return (
				<Switch>
					<Route exact path={"/menu"} render={MainMenuRender({ logout:this.logout})}/>
					<Route exact path={"/game"} render={GameScreenRender()}/>
					<Route exact path={"/saves"} render={SavesRender()}/>
					<Route render={()=><Redirect to={"/menu"}/>} />
				</Switch>
			)
		}else{
			return(
				<Switch>
					<Route exact path={"/login"} render={LoginRender({ onLogin:this.setUser })}/>
					<Route render={()=><Redirect to={"/login"}/>} />
				</Switch>
			)
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
		}else{/*
			this.setState({
				user: { name : "juan"}
			});*/
		}
	}

	render(){
		return(
			<AppContainer>
				{this.renderRoutes()}
			</AppContainer>
		)
	}
}

export default App;

import React from 'react';
import { observer } from 'mobx-react'
import { Redirect , Route , Switch } from 'react-router-dom';
import { MainMenuRender , LoginRender , GameScreenRender , SavesRender } from './routes';
import { AppContainer } from './components'
import * as constants from './stores/constants'
//import Cookie from './resources/Cookie';

@observer
class App extends React.Component{
	constructor(props){
		super(props);
		console.log(props.store.userStatus)
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

	login = ({username,password}) => {
		this.props.store.attempLogin(username,password)
	}

	logout = () => {
		console.log("logout")
		this.props.store.logout();
	}

	renderRoutes = () => {
		const { store } = this.props
		console.log(store.userState == constants.IN)
		if( store.userState === constants.IN ){
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
					<Route exact path={"/login"} render={LoginRender({ onLogin:this.login })}/>
					<Route render={()=><Redirect to={"/login"}/>} />
				</Switch>
			)
		}
	}

	componentWillMount(){
		//Check for cookies
		/*if( Cookie.hasCookie("user") ){
			let userId = Cookie.getCookie("user");
			let user = this.getUserInfo(userId);
			this.props.store.setUser(user)
		}*/
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

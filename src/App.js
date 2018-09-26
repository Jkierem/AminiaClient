import React from 'react';
import { withRouter } from 'react-router'
import { observer , inject } from 'mobx-react'
import { Redirect , Route , Switch } from 'react-router-dom';
import { MainMenuRender , LoginRender , GameScreenRender , SavesRender } from './routes';
import { AppContainer } from './components'
import * as constants from './stores/constants'

@inject("store")
@withRouter
@observer
class App extends React.Component{

	login = ({username,password}) => {
		this.props.store.attempLogin(username,password)
	}

	logout = () => {
		this.props.store.logout();
	}

	renderRoutes = () => {
		const { store } = this.props
		if( store.userStatus === constants.IN ){
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

	render(){
		return(
			<AppContainer>
				{ this.renderRoutes() }
			</AppContainer>
		)
	}
}

export default App;

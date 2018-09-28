import React from 'react';
import { withRouter } from 'react-router'
import { observer , inject } from 'mobx-react'
import { Redirect , Route , Switch } from 'react-router-dom';
import { MainMenuRender , LoginRender , GameScreenRender , SavesRender } from './routes';
import { AppContainer } from './components'
import * as constants from './stores/constants'
import * as paths from './routes/paths'

console.log(process.env)

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
		const { MENU_PATH , GAME_PATH , LOGIN_PATH , SAVES_PATH } = paths;
		const { store } = this.props
		if( store.userStatus === constants.IN ){
			return (
				<Switch>
					<Route exact path={MENU_PATH} render={MainMenuRender({ logout:this.logout})}/>
					<Route exact path={GAME_PATH} render={GameScreenRender()}/>
					<Route exact path={SAVES_PATH} render={SavesRender()}/>
					<Route render={()=><Redirect to={MENU_PATH}/>} />
				</Switch>
			)
		}else{
			return(
				<Switch>
					<Route exact path={LOGIN_PATH} render={LoginRender({ onLogin:this.login })}/>
					<Route render={()=><Redirect to={LOGIN_PATH}/>} />
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

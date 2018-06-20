import React from 'react'
import { GameScreen } from '../'
//import { MenuOption } from '../../components'

class MainMenu extends React.Component{
	constructor(props){
		super(props);
		this.state={}
	}

	render(){
		return(
			<GameScreen />
		);
	}
}

export default MainMenu;

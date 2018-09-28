import React from 'react'
import styled from 'styled-components'
import { MenuOption } from '../../components'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 30%;
`

class MainMenu extends React.Component{
	constructor(props){
		super(props);
		this.state = {}
	}

	handleClick = (e,{ info }) => {
		console.log(this.props)
		const { router , logout } = this.props
		switch (info) {
			case "new":
				router.history.push("saves")
				break;
			case "load":
				router.history.push("saves")
				break;
			default:
				logout();
		}
	}

	render(){
		const { handleClick } = this
		return(
			<Container>
				<MenuOption onClick={handleClick} info={"new"}>New Game</MenuOption>
				<MenuOption onClick={handleClick} info={"load"}>Load Game</MenuOption>
				<MenuOption.Negative	onClick={handleClick}	info={"quit"}>Quit</MenuOption.Negative>
			</Container>
		);
	}
}

export default MainMenu;

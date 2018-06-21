import React from 'react'
import { SaveList } from '../../collections'
import { SaveSlot } from '../../components'
//import { GameScreen } from '../'

const defaultSaves = [
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

class MainMenu extends React.Component{
	constructor(props){
		super(props);
		this.state={}
	}

	renderSaves = () => {
		const { saves=defaultSaves } = this.props;
		return saves.map((save) => (
			<SaveSlot save={save}/>
		))
	}

	render(){
		return(
			<SaveList>
				{this.renderSaves()}
			</SaveList>
		);
	}
}

export default MainMenu;

import React from 'react'
import { SaveList } from '../../collections'
import { SaveSlot } from '../../components'
import { GameScreen } from '../'

const defaultSaves = [
	{
		state: {
			main: "Juan",
			location: "Asaroth",
			progress: "99",
			players: [
				{
					name: "Juan",
					status: {
						LVL: 42
					}
				}
			]
		}
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
		this.state={
			loadGame: false,
		}
	}

	renderSaves = () => {
		const { saves=defaultSaves } = this.props;
		const { loadSave } = this;
		return saves.map((save,key) => (
			<SaveSlot save={save} key={key} onClick={loadSave}/>
		))
	}

	loadSave = (e, save) => {
		this.setState({
			loadGame: true,
		})
	}

	render(){
		if( this.state.loadGame ){
			return (<GameScreen />)
		}else{
			return(
				<SaveList>
					{this.renderSaves()}
				</SaveList>
			);
		}
	}
}

export default MainMenu;

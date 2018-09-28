import React from 'react'
import { SaveList } from '../../collections'
import { SaveSlot } from '../../components'
import { GAME_PATH } from '../../routes/paths'

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

class Saves extends React.Component {

  renderSaves = () => {
    const { saves=defaultSaves } = this.props;
    const { loadSave } = this;
    return saves.map((save,key) => (
      <SaveSlot save={save} key={key} onClick={loadSave}/>
    ))
  }

  loadSave = (e, save) => {
    this.props.router.history.push(GAME_PATH)
  }

  render(){
    return(
      <SaveList>
        {this.renderSaves()}
      </SaveList>
    );
  }
}

export default Saves;

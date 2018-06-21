import React from 'react'
import { saveGridStyle , saveGridItem , selectedSaveStyle , saveStyle } from '../../resources/Styles'

class SaveSlot extends React.Component{
	constructor(props){
		super(props);
		this.state={
			saveStyle: saveStyle
		}
	}

	handleMouseEnter = () => {
		this.setState({
			saveStyle: selectedSaveStyle
		})
	}

	handleMouseLeave = () => {
		this.setState({
			saveStyle: saveStyle
		})
	}

	render(){
		const { state } = this.props.save;
		let info = {}
		if( state === "empty" ){
			info={
				name: "None",
				lvl: 0,
				location: "Nowhere",
				progress: 0
			};
		}else{
			const { main , players , progress , location } = state;
			const pc = players.filter((player) => {
				return player.name === main
			})[0]
			info = {
				name: main,
				lvl: pc.status.LVL,
				location: location,
				progress: progress
			}
		}
		const { name , lvl , location , progress } = info;
		const { handleMouseEnter:enter , handleMouseLeave:leave } = this;
		return (
			<div style={this.state.saveStyle} onMouseEnter={enter} onMouseLeave={leave}>
				<div style={saveGridStyle}>
					<div style={saveGridItem("name")}>{`${name}`}</div>
					<div style={saveGridItem("lvl","flex-end")} >{`lvl ${lvl}`}</div>
					<div style={saveGridItem("loc")} >{`${location}`}</div>
					<div style={saveGridItem("prg","flex-end")} >{`${progress}%`}</div>
				</div>
			</div>
		)
	}
}

export default SaveSlot;

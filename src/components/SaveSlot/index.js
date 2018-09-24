import React from 'react'
import { Save , SaveGrid , SelectedSave , Name , Level , Progress , Location } from './styles'

class SaveSlot extends React.Component{
	constructor(props){
		super(props);
		this.state={
			SaveComponent: Save,
		}
	}

	handleMouseEnter = () => {
		this.setState({
			SaveComponent: SelectedSave
		})
	}

	handleMouseLeave = () => {
		this.setState({
			SaveComponent: Save
		})
	}

	handleClick = (e) => {
		const { onClick } = this.props;
		if( onClick ){
			onClick(e,this.props.save)
		}
	}

	render(){
		const { state: saveState } = this.props.save;
		let info = {}
		if( saveState === "empty" ){
			info={
				name: "None",
				lvl: 0,
				location: "Nowhere",
				progress: 0
			};
		}else{
			const { main , players , progress , location } = saveState;
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
		const { handleMouseEnter:enter , handleMouseLeave:leave , handleClick:click } = this;
		const { SaveComponent } = this.state;
		return (
			<SaveComponent onMouseEnter={enter} onMouseLeave={leave} onClick={click}>
				<SaveGrid>
					<Name>{`${name}`}</Name>
					<Level>{`lvl ${lvl}`}</Level>
					<Location>{`${location}`}</Location>
					<Progress>{`${progress}%`}</Progress>
				</SaveGrid>
			</SaveComponent>
		)
	}
}

export default SaveSlot;

import React from 'react'
import { MenuBar , ActionLog } from '../../collections'
import { MenuOption , WorldWindow } from '../../components'
import RGL , { WidthProvider }from 'react-grid-layout';
import { testList , testAction } from './testActions.js'

const Grid = WidthProvider(RGL);

class GameScreen extends React.Component{
	constructor(props){
		super(props);
		this.state={
			actions: testList
		}
	}

	addAction = () =>{
		let { actions } = this.state;
		actions.push( testAction );
		this.setState({ actions: actions })
	}

	render(){
		const { actions } = this.state;
		const layout = [
			{i: 'menu', x: 0, y: 0, w: 3, h: 15, static: true},
      {i: 'world', x: 3, y: 0, w: 9, h: 10, static: true},
      {i: 'log', x: 3, y: 10, w: 9, h: 5, static: true}
		]
		return(
			<Grid layout={layout} cols={12} rowHeight={30}>
				<div key="menu">
					<MenuBar>
						<MenuOption>Default Menu Option</MenuOption>
						<MenuOption label={"Click Me!"} onClick={this.addAction}/>
						<MenuOption colorHover>Color Animation Menu Option</MenuOption>
						<MenuOption
							color="white"
							textColor="DarkRed"
							hoverColor="LightCoral"
							hoverTextColor="DarkRed"
							colorHover
						>
							Colored Menu Option
						</MenuOption>
						<MenuOption disabled>Diabled Menu Option</MenuOption>
					</MenuBar>
				</div>
				<div key="world">
					<WorldWindow />
				</div>
				<div key="log">
					<ActionLog actions={actions}/>
				</div>
			</Grid>
		);
	}
}

export default GameScreen;

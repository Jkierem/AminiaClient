import React from 'react'
import { MenuBar , ActionLog } from '../../collections'
import { WorldWindow } from '../../components'
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
			{i: 'menu', x: 0, y: 0, w: 2, h: 15, static: true},
      {i: 'world', x: 4, y: 0, w: 10, h: 10, static: true},
      {i: 'log', x: 4, y: 10, w: 10, h: 5, static: true}
		]
		return(
			<Grid layout={layout} cols={12} rowHeight={30}>
				<div key="menu">
					<MenuBar />
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

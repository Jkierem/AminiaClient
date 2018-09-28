import React from 'react'
import { MenuBar , ActionLog } from '../../collections'
import { MenuOption , WorldWindow } from '../../components'
import { testList , testAction } from './testActions.js'
import { Screen , MenuContainer , WorldContainer , LogContainer } from './styles'

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
		return(
			<Screen>
				<MenuContainer>
					<MenuBar>
						<MenuOption>Default Menu Option</MenuOption>
						<MenuOption label={"Click Me!"} onClick={this.addAction}/>
						<MenuOption colorHover>Color Animation Menu Option</MenuOption>
						<MenuOption.Negative>Negative Menu Option</MenuOption.Negative>
						<MenuOption disabled>Disabled Menu Option</MenuOption>
					</MenuBar>
				</MenuContainer>
				<WorldContainer>
					<WorldWindow />
				</WorldContainer>
				<LogContainer>
					<ActionLog actions={actions}/>
				</LogContainer>
			</Screen>
		);
	}
}

export default GameScreen;

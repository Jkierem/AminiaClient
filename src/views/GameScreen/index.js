import React from 'react'
import { observer , inject } from 'mobx-react'
import { MenuBar , ActionLog } from '../../collections'
import { MenuOption , WorldWindow } from '../../components'
import { testList , testAction } from './testActions.js'
import { Screen , MenuContainer , WorldContainer , LogContainer } from './styles'

@inject("actionStore")
@observer
class GameScreen extends React.Component{

	addAction = () =>{
		let { actionStore:store } = this.props;
		store.addAction( testAction );
	}

	render(){
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
					<ActionLog actions={this.props.actionStore.log}/>
				</LogContainer>
			</Screen>
		);
	}
}

export default GameScreen;

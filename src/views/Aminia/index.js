import React from 'react';
import { MenuBar , WorldWindow , ActionLog } from '../../components';
import WareHouse from 'juanstate';

class Aminia extends React.Component{
	constructor(props){
		super(props);
		this.state={}
	}

	render(){
		return(
			<React.Fragment>
				<MenuBar />
				<WorldWindow />
				<ActionLog />
			</React.Fragment>

		);
	}
}

export default Aminia;

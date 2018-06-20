import React from 'react'
import { ActionLine } from '../../components'
import { Scrollbars } from "react-custom-scrollbars"

class ActionLog extends React.Component{
	constructor(props){
		super(props);
		const { actions } = props;
		this.state = {
			actions: actions
		}
	}

	renderTrack = () => ( <div style={{"display":"none"}}/> )

	getScrollStyle = () => {
		return {
			"height": "100px",
			"width":"500px",
			"border":"solid",
			"borderRadius":"25px"
		}
	}

	componentDidMount = () => {
		this.scrollToBottom();
	}

	componentWillReceiveProps = (nextProps) =>{
		this.setState({
			actions: nextProps.actions
		}, this.scrollToBottom)
	};

	scrollToBottom = () => {
		this.refs.scroller.scrollToBottom();
	}

	renderText = () => {
		const { actions } = this.state;
		return actions.map((action,index) => {
			return <ActionLine
							type={action.type}
							info={action.info}
							key={index}
						 />
		})
	}

	render(){
		return(
			<Scrollbars
				ref="scroller"
				renderTrackVertical={this.renderTrack}
				style={this.getScrollStyle()}>
				<div style={{ "display":"flex", "flexDirection":"column"}}>
					{this.renderText()}
				</div>
			</Scrollbars>
		);
	}
}

export default ActionLog;

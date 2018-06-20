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
			"minHeight": "100px",
			"minWidth":"500px",
			"position":"relative",
			"height":"100%",
			"width":"100%",
			"border":"solid",
			"borderRadius":"25px",
			"boxSizing":"border-box",
			"backgroundColor":"white"
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
			<div style={{"position":"relative", "height":"100%"}}>
				<Scrollbars
					ref="scroller"
					renderTrackVertical={this.renderTrack}
					style={this.getScrollStyle()}>
					<div style={{ "display":"flex", "flexDirection":"column"}}>
						{this.renderText()}
					</div>
				</Scrollbars>
			</div>
		);
	}
}

export default ActionLog;

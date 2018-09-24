import React from 'react'
import { ActionLine } from '../../components'
import { scrollStyle , ActionLogContainer , TextContainer } from './styles'
import { Scrollbars } from "react-custom-scrollbars"

class ActionLog extends React.Component{
	constructor(props){
		super(props);
		const { actions } = props;
		this.state = {
			actions: actions
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
				key={index}
				type={action.type}
				info={action.info}
			/>
		})
	}

	render(){
		return(
			<ActionLogContainer>
				<Scrollbars
					ref="scroller"
					renderTrackVertical={() => (<div style={{display:"none"}}/>)}
					style={scrollStyle}>
					<TextContainer>
						{this.renderText()}
					</TextContainer>
				</Scrollbars>
			</ActionLogContainer>
		);
	}
}

export default ActionLog;

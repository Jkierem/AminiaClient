import React from 'react'
import { Text } from '../'
import { TextContainer } from '../../collections'

function AttackAction(props){
	let { who , what , to } = props;
	return(
		<Text>
			<Text color={who.color}>{who.name}</Text>
			{what.abilityText}
			<Text color={to.color}>{to.name}</Text>
			{what.valueText}
		</Text>
	)
}

function CheckMovement(props){
	const { locations } = props;
	let locs = locations.map((loc,index) => {
		let { danger , name } = loc;
		let dangerColor = danger <= 10 ? "green" : danger <= 20 ? "orange" : "red" ; ;
		return(
			<Text key={index}>{`- ${name} , danger: `}
				<Text color={dangerColor}>{`${danger}`}</Text>
				<br/>
			</Text>
		)
	})
	return(
		<Text>
			{"Available places:"}
			<br/>
			{locs}
		</Text>
	)
}

function DialogAction(props){
	const { who , what } = props;
	return(
		<Text>
			<Text color={who.color}>{`${who.name}: `}</Text>
			{what}
		</Text>
	)
}

function EventLog(props){
	const { what } = props;
	return(
		<Text color={what.color}>
			{what.text}
		</Text>
	)
}

function MovementAction(props){
	const { to , hasParty=false , color="blue"} = props;
	let who = hasParty ? "You and your party" : "You" ;
	return(
		<Text>
			{`${who} moved to `}
			<Text color={color}>{to}</Text>
		</Text>
	)
}

class ActionLine extends React.Component{

	render(){
		const { type , info } = this.props;
		let text = "";
		if( type === "attack" ){
			text = <AttackAction {...info}/>;
		}
		if( type === "check-movement" ){
			text = <CheckMovement {...info}/>;
		}
		if( type === "dialog" ){
			text = <DialogAction {...info}/>;
		}
		if( type === "event" ){
			text = <EventLog {...info}/>;
		}
		if( type === "movement" ){
			text = <MovementAction {...info}/>;
		}
		return(
			<TextContainer>
				{text}
			</TextContainer>
		)
	}
}

export default ActionLine;

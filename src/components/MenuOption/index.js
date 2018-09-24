import React from 'react'
import { Arrow } from '../'
import { enabled , disabled } from './styles'

class MenuOption extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			Component: props.disabled ? disabled : enabled,
			color: props.color,
			textColor: props.textColor,
		}
	}

	handleClick = () =>{
		if( this.props.onClick ){
			this.props.onClick()
		}
	}

	handleMouseEnter = () => {
		if( !this.props.disabled ){
			if( this.props.colorHover ){
				const { hoverColor="LightGreen" , hoverTextColor="DarkGreen" } = this.props
				this.setState({
					color: hoverColor,
					textColor: hoverTextColor
				})
			}else{
				this.setState({ hovered: true })
			}
		}
	}

	handleMouseLeave = () => {
		if( !this.props.disabled ){
			if( this.props.colorHover ){
				const { color , textColor } = this.props
				this.setState({
					color,
					textColor
				})
			}else{
				this.setState({ hovered: false })
			}
		}
	}

	render(){
		const { hovered=this.props.active , Component , color , textColor } = this.state
		const { label:content=this.props.children } = this.props
		const {
			handleClick: click ,
			handleMouseEnter: enter ,
			handleMouseLeave: leave ,
		} = this
		return(
			<Component
				color={color}
				textColor={textColor}
				onClick={click}
				onMouseEnter={enter}
				onMouseLeave={leave}
			>
				{ hovered && <Arrow direction={"right"} color={textColor}/>}
				{ content }
				{ hovered && <Arrow direction={"left"} color={textColor}/>}
			</Component>
		);
	}
}

export default MenuOption;

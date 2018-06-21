import React from 'react'
import { Arrow } from '../'
import { menuOptionStyle , disabledMenuOptionStyle } from '../../resources/Styles'

class MenuOption extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			style: this.getStyle()
		}
	}

	handleClick = () =>{
		if( this.props.onClick ){
			this.props.onClick()
		}
	}

	getStyle = () => {
		if( this.props.disabled ){
			return disabledMenuOptionStyle;
		}else{
			const { color , textColor } = this.props
			return menuOptionStyle(color,textColor)
		}
	}

	handleMouseEnter = () => {
		if( !this.props.disabled ){
			if( this.props.colorHover ){
				const { hoverColor="LightGreen" , hoverTextColor="DarkGreen" } = this.props
				this.setState({
					style: menuOptionStyle(hoverColor, hoverTextColor)
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
				this.setState({ style : menuOptionStyle(color,textColor) })
			}else{
				this.setState({ hovered: false })
			}
		}
	}

	render(){
		const { style , hovered=this.props.active } = this.state
		const { label=this.props.children } = this.props
		const content = label;
		const { textColor } = this.props
		const {
			handleClick: click ,
			handleMouseEnter: enter ,
			handleMouseLeave: leave
		} = this
		return(
			<div
				style={style}
				onClick={click}
				onMouseEnter={enter}
				onMouseLeave={leave}
			>
				{ hovered && <Arrow direction={"right"} color={textColor}/>}
				{ content }
				{ hovered && <Arrow direction={"left"} color={textColor}/>}
			</div>
		);
	}
}

export default MenuOption;

import React from 'react'
import * as arrows from './styles.js'

class Arrow extends React.Component{
	checkProps = () => {
		let { size="small" , color="black" , direction="left" } = this.props;
		if( size !== "small" && size !== "medium" && size !== "large"){
			size = "small"
		}
		if( direction !== "up" && direction !== "down"
		&& direction !== "left" && direction !== "right" ){
			direction = "left"
		}
		return { size , color , direction };
	}

	getActualSize = (size) => {
		switch (size) {
			case "small":
				return "5px";
			case "medium":
				return "10px";
			case "large":
				return "15px";
			default:
				return "5px";
		}
	}

	render(){
		const info = this.checkProps();
		const { direction , size } = info
		const actualSize = this.getActualSize(size)
		const Component = arrows[direction]
		return <Component {...info} size={actualSize}/>
	}
}

export default Arrow;

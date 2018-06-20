import React from 'react'

class WorldWindow extends React.Component{
	constructor(props){
		super(props);
		this.state={}
	}

	render(){
		return(
			<div style={{
				"display":"flex",
				"alignItems": "center",
				"justifyContent": "center",
				"position":"relative",
				"height":"100%",
				"width":"100%",
				"backgroundColor":"white",
				"border":"solid",
				"borderRadius":"25px",
				"boxSizing":"border-box"
			}}>
				I am ze wooooooorld!
			</div>
		);
	}
}

export default WorldWindow;

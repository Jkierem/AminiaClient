import React from 'react'
import styled from 'styled-components'

const Comp = styled.span`
	color: ${({color="black"}) => color};
	word-wrap: ${({wrap="break-word"}) => wrap};
`

const Text = (props) => {
	const { text=props.children } = props;
	return <Comp {...props}>{text}</Comp>
}

export default Text;

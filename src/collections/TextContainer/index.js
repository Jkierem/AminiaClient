import React from 'react'
import styled from 'styled-components'

const Comp = styled.article`
	padding: 10px;
`

const TextContainer = ({children}) => <Comp>{children}</Comp>

export default TextContainer;

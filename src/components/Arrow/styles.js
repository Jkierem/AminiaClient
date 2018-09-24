import styled from 'styled-components'

const dims = `
  width: 0;
  height: 0;
`

const transparentBorder = ({size}) => `${size} solid transparent;`
const coloredBorder = ({ size , color }) => `${size} solid ${color}`

export const right = styled.span`
  ${dims}
  border-left: ${coloredBorder};
  border-top: ${transparentBorder};
  border-bottom: ${transparentBorder};
`

export const left = styled.span`
  ${dims}
  border-right: ${coloredBorder};
  border-top: ${transparentBorder};
  border-bottom: ${transparentBorder};
`

export const up = styled.span`
  ${dims}
  border-left: ${transparentBorder};
  border-right: ${transparentBorder};
  border-bottom: ${coloredBorder};
`

export const down = styled.span`
  ${dims}
  border-left: ${transparentBorder};
  border-right: ${transparentBorder};
  border-top: ${coloredBorder};
`

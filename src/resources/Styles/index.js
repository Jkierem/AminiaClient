export const noSelect = "user-select: none"
export const pointer = "cursor: pointer"

export const flexStyle = (dir="row",just="center",align="center") => (
  `
    display: flex;
    flex-direction: ${dir};
    justify-content: ${just};
    align-items: ${align};
  `
)

export const boxStyle = (radius="25px",color="white",textColor="black") => (
  `
    border: solid medium ${textColor};
    border-radius: ${radius};
    box-sizing: border-box;
    background-color: ${color};
    color: ${textColor};
  `
)

export const gridStyle = () => `
  display: grid;
  box-sizing: border-box;
  padding: 10px;
  grid-gap: 5px;
`

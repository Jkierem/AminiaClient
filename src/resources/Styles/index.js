//Non-selectable
export const noSelect = {
  "userSelect":"none"
}

export const pointer = {
  "cursor":"pointer"
}

//Rounded box
export const boxStyle = (radius="25px",color="white",textColor="black") => ({
  "border":`solid medium ${textColor}`,
  "boxSizing":"border-box",
  "backgroundColor": `${color}`,
  "borderRadius":`${radius}`,
  "color":`${textColor}`
})

//Base flex container
export const flexStyle = (direction="row",just="center",align="center") => ({
  "display":"flex",
  "flexDirection":`${direction}`,
  "align-items": `${align}`,
  "justify-content": `${just}`
})

//Base grid
export const gridStyle ={
  "display":"grid",
  "boxSizing": "border-box",
  "padding":"10px",
  "gridColumnGap":"5px",
  "gridRowGap":"5px"
}

//Base grid item
export const gridItemStyle = (dir,align,just) => ({
  ...flexStyle(dir,just,align),
  "boxSizing":"border-box",
  "padding" : "10px"
})

//Unselected save
export const saveStyle = {
  ...noSelect,
  ...boxStyle("15px"),
  "border":"solid 5px black",
  "margin":"10px",
  "cursor":"pointer",
  "minWidth":"250px"
}

//Hovered save
export const selectedSaveStyle = {
  ...saveStyle,
  "border":"solid 5px green"
}

//Save grid (save grid item container)
export const saveGridStyle = {
  ...gridStyle,
  "padding":"5px",
  "gridTemplateAreas": `
    "name lvl"
    "loc  prg"
  `
}

//Single grid item. Area can be either name, lvl, loc, prg
export const saveGridItem = (area,just="flex-start") => ({
  ...gridItemStyle(undefined,undefined,just),
  "gridArea":`${area}`
})

//SaveList Style
export const saveListStyle = {
  ...flexStyle("column")
}

//MenuBar
export const menubarStyle = {
  ...flexStyle("column","flex-start","center"),
  ...boxStyle(),
  "padding":"10px",
  "position":"relative",
  "height":"100%",
  "width":"100%",
}

export const menuOptionStyle = (color,textColor) => ({
    ...pointer,
    ...noSelect,
    ...flexStyle("row","space-around","center"),
    ...boxStyle("10px",color,textColor),
    "padding":"10px",
    "margin":"10px",
    "position":"relative",
    "width":"100%"
})

export const disabledMenuOptionStyle = {
  ...noSelect,
  ...flexStyle("column"),
  ...boxStyle("10px","LightGray","DarkGray"),
  "padding":"10px",
  "margin":"10px",
  "position":"relative",
  "width":"100%"
}

import React from 'react'
import { MainMenu , Login , GameScreen , Saves } from '../views'

const createRenderMethod = (Component) => (props) => (router) => <Component {...props} router={router}/>

export const GameScreenRender = createRenderMethod(GameScreen)
export const LoginRender = createRenderMethod(Login)
export const MainMenuRender = createRenderMethod(MainMenu)
export const SavesRender = createRenderMethod(Saves)

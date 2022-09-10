import { FC } from "react"
import "./Card.scss"
import { ICardProps } from "./types"

const Card : FC<ICardProps>= ({children, className}) => {
  return (
    <div className={`${className} card`}>{children}</div>
  )
}

export default Card
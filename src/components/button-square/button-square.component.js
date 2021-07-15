import React from "react"

import { Button } from "./button-square.styles"

const ButtonSquare = ({ title }) => {
  return (
    <Button className="button">
      <span>{title}</span>
    </Button>
  )
}

export default ButtonSquare

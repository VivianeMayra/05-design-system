import { ComponentProps, ElementType } from "react"
import React from "react"
import { styled } from "../styles"

export const Box = styled("div", {
  border: "1px solid $gray600",
})

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType
}
Box.displayName = "Box"

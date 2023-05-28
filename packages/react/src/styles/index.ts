import {
  colors,
  fontSizes,
  fonts,
  lineHeights,
  radii,
  space,
} from "@ignite-ui/tokens/src"
import { createStitches, defaultThemeMap } from "@stitches/react"
import React from "react"

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: "space",
    width: "space",
  },
  theme: {
    colors,
    fontSizes,
    fonts,
    lineHeights,
    radii,
    space,
  },
})

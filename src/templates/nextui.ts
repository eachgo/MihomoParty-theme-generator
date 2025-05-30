// nextui-theme-generator-main/src/templates/nextui.ts

import {
  initialDarkTheme,
  initialLayout,
  initialLightTheme,
} from "../shared/constants";
import { Config } from "../shared/types";
import { colors } from "@heroui/theme"; // Make sure to import colors if needed for zinc values

export const nextui: Config = {
  light: {
    ...initialLightTheme,
    baseColor: { // <--- Modify baseColor here
      ...initialLightTheme.baseColor, // Spread existing base colors
      "default-100": colors.zinc[100], // <--- Add default-100 with its specific default value for light theme
    },
    // REMOVE THIS BLOCK IF YOU ADDED IT:
    // otherColor: {
    //   ...initialLightTheme.otherColor,
    //   default100: initialLightTheme.baseColor.content1,
    // },
  },
  dark: {
    ...initialDarkTheme,
    baseColor: { // <--- Modify baseColor here
      ...initialDarkTheme.baseColor, // Spread existing base colors
      "default-100": colors.zinc[800], // <--- Add default-100 with its specific default value for dark theme
    },
    // REMOVE THIS BLOCK IF YOU ADDED IT:
    // otherColor: {
    //   ...initialDarkTheme.otherColor,
    //   default100: initialDarkTheme.baseColor.content1,
    // },
  },
  layout: initialLayout,
};
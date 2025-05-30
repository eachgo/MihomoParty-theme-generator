// nextui-theme-generator-main/src/utils/generateCss.ts

import { readableColor } from "color2k";
import {
  defaultDarkColorWeight,
  defaultLightColorWeight,
} from "../shared/constants";
import { Config, ThemeType, ColorShades } from "../shared/types";
import { generateShades, hexToHsl } from "./colors";

export function generateCssVariables(config: Config, currentTheme: ThemeType): string {
  let cssVars = ``;

  const themeColors = config[currentTheme].brandColor;
  const baseColors = config[currentTheme].baseColor;
  const otherColors = config[currentTheme].otherColor;
  const layout = config.layout;

  cssVars += `\n.${currentTheme}, [data-theme="${currentTheme}"] {\n`;

  // --- Brand Colors (e.g., primary, secondary, default brand color) ---
  for (const key in themeColors) {
    const colorHex = themeColors[key as keyof typeof themeColors];
    const colorWeight = key === 'default' ? (currentTheme === 'dark' ? defaultDarkColorWeight : defaultLightColorWeight) : 17.5;
    const shades: ColorShades = generateShades(colorHex, colorWeight);

    for (const shadeKey in shades) {
// 按照要求，先将 shadeKey 转换为 unknown 类型，再转换为 keyof ColorShades 类型
cssVars += `  --heroui-${key}-${shadeKey}: ${hexToHsl(shades[shadeKey as unknown as keyof ColorShades])} !important;\n`; // ADDED !important
    }
    // Also include the DEFAULT variable and foreground
    cssVars += `  --heroui-${key}: ${hexToHsl(shades[500])} !important;\n`; // ADDED !important
    cssVars += `  --heroui-${key}-foreground: ${hexToHsl(readableColor(shades[500]))} !important;\n`; // ADDED !important
  }

  // --- Base Colors (e.g., background, foreground, contentX, default-100) ---
  for (const key in baseColors) {
    const colorHex = baseColors[key as keyof typeof baseColors];
    const hslValue = hexToHsl(colorHex);
    // This will correctly output --heroui-default-100 if it's in baseColors
    cssVars += `  --heroui-${key}: ${hslValue} !important;\n`; // ADDED !important
    // Also include foreground for base colors if needed
    cssVars += `  --heroui-${key}-foreground: ${hexToHsl(readableColor(colorHex))} !important;\n`; // ADDED !important
  }

  // --- Other Colors (e.g., focus, overlay, divider) ---
  for (const key in otherColors) {
    const colorHex = otherColors[key as keyof typeof otherColors];
    const hslValue = hexToHsl(colorHex);
    cssVars += `  --heroui-${key}: ${hslValue} !important;\n`; // ADDED !important
  }

  // --- Layout Parameters ---
  cssVars += `  --heroui-font-size-tiny: ${layout.fontSize.tiny}rem !important;\n`; // ADDED !important
  cssVars += `  --heroui-font-size-small: ${layout.fontSize.small}rem !important;\n`; // ADDED !important
  cssVars += `  --heroui-font-size-medium: ${layout.fontSize.medium}rem !important;\n`; // ADDED !important
  cssVars += `  --heroui-font-size-large: ${layout.fontSize.large}rem !important;\n`; // ADDED !important

  cssVars += `  --heroui-line-height-tiny: ${layout.lineHeight.tiny}rem !important;\n`; // ADDED !important
  cssVars += `  --heroui-line-height-small: ${layout.lineHeight.small}rem !important;\n`; // ADDED !important
  cssVars += `  --heroui-line-height-medium: ${layout.lineHeight.medium}rem !important;\n`; // ADDED !important
  cssVars += `  --heroui-line-height-large: ${layout.lineHeight.large}rem !important;\n`; // ADDED !important

  cssVars += `  --heroui-radius-small: ${layout.radius.small}rem !important;\n`; // ADDED !important
  cssVars += `  --heroui-radius-medium: ${layout.radius.medium}rem !important;\n`; // ADDED !important
  cssVars += `  --heroui-radius-large: ${layout.radius.large}rem !important;\n`; // ADDED !important

  cssVars += `  --heroui-border-width-small: ${layout.borderWidth.small}px !important;\n`; // ADDED !important
  cssVars += `  --heroui-border-width-medium: ${layout.borderWidth.medium}px !important;\n`; // ADDED !important
  cssVars += `  --heroui-border-width-large: ${layout.borderWidth.large}px !important;\n`; // ADDED !important

  // --- Other Params (directly applied) ---
  cssVars += `  --heroui-disabled-opacity: ${layout.otherParams.disabledOpacity} !important;\n`; // ADDED !important
  cssVars += `  --heroui-divider-weight: ${layout.otherParams.dividerWeight}px !important;\n`; // ADDED !important
  cssVars += `  --heroui-hover-opacity: ${layout.otherParams.hoverOpacity} !important;\n`; // ADDED !important

  cssVars += `}\n`; // Close the theme block

  return cssVars;
}
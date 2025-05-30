import { readableColor } from "color2k";
import {hexToHsl, generateShades } from "./colors";

import {
  colorsId,
  baseColorsId,
  showcaseId,
  otherColorsId,
  defaultDarkColorWeight, // Import these constants
  defaultLightColorWeight, // Import these constants
} from "shared/constants";
import {
  ColorPickerType,
  Config,
  ConfigLayout,
  ThemeType,
  ColorShades, // Import ColorShades
} from "shared/types";


export function setCssColor(
  colorType: ColorPickerType,
  value: string,
  theme: ThemeType
) {
  const brandColorsEl = document.getElementById(colorsId);
  const commonColorsEl = document.getElementById(baseColorsId);
  const showcaseEl = document.getElementById(showcaseId);

  // Logic for colors that generate a full palette (brand colors like primary, default brand color)
  if (["default", "primary", "secondary", "success", "warning", "danger"].includes(colorType)) {
    const colorWeight = colorType === 'default' ? (theme === 'dark' ? defaultDarkColorWeight : defaultLightColorWeight) : 17.5;
    const shades: ColorShades = generateShades(value, colorWeight);

    if (!brandColorsEl || !commonColorsEl || !showcaseEl) return;

    Object.keys(shades).forEach((shadeKey: string) => {
// 按照要求，先将 shadeKey 转换为 unknown 类型，再转换为 keyof ColorShades 类型
const shadeValue = shades[shadeKey as unknown as keyof ColorShades];
      const hslValue = hexToHsl(shadeValue);
      const cssVarName = `--heroui-${colorType}-${shadeKey}`; // Generates --heroui-default-50, -100 etc.
      
      applyToAllElements(
        cssVarName,
        hslValue,
        brandColorsEl, commonColorsEl, showcaseEl
      );
    });

    const defaultShadeValue = shades[500];
    applyToAllElements(
      `--heroui-${colorType}`,
      hexToHsl(defaultShadeValue),
      brandColorsEl, commonColorsEl, showcaseEl
    );
    applyToAllElements(
      `--heroui-${colorType}-foreground`,
      hexToHsl(readableColor(defaultShadeValue)),
      brandColorsEl, commonColorsEl, showcaseEl
    );
  }
  // Logic for colors that are single HSL values (base colors, other colors, and now "default-100")
  else { // This now correctly handles "default-100" and other single HSL values
    const hslValue = hexToHsl(value);
    const cssVarName = `--heroui-${colorType}`; // Generates --heroui-default-100, --heroui-foreground etc.

    const baseColorEl = document.getElementById(baseColorsId);
    const showcaseEl = document.getElementById(showcaseId);

    applyToAllElements(
      cssVarName,
      hslValue,
      baseColorEl, showcaseEl
    );

    // If it's a base color that needs its own readable foreground, calculate and apply that too
    if (["foreground", "background", "content1", "content2", "content3", "content4", "default-100"].includes(colorType)) { // <--- ADD "default-100" here
        applyToAllElements(
          `--heroui-${colorType}-foreground`,
          hexToHsl(readableColor(value)),
          baseColorEl, showcaseEl
        );
    }
  }
}
function applyToAllElements(varName: string, value: string, ...elements: (HTMLElement | null)[]) {
  elements.forEach(el => {
      if (el) {
          el.style.setProperty(varName, value);
      }
  });
}

export function setCssBackground(value: string) {
  const showcaseEl = document.getElementById(showcaseId);
  const baseColor = document.getElementById(baseColorsId);
  const hslValue = hexToHsl(value);

  baseColor?.style.setProperty("--heroui-background", hslValue);
  showcaseEl?.style.setProperty("--heroui-background", hslValue);
}

export function setCssFontSize(
  type: keyof ConfigLayout["fontSize"],
  value: string
) {
  const el = document.getElementById(showcaseId);

  el?.style.setProperty(`--heroui-font-size-${type}`, `${value}rem`);
}

export function setCssLineHeight(
  type: keyof ConfigLayout["lineHeight"],
  value: string
) {
  const el = document.getElementById(showcaseId);

  el?.style.setProperty(`--heroui-line-height-${type}`, `${value}rem`);
}

export function setCssRadius(
  type: keyof ConfigLayout["radius"],
  value: string
) {
  const el = document.getElementById(showcaseId);

  el?.style.setProperty(`--heroui-radius-${type}`, `${value}rem`);
}

export function setCssBorderWidth(
  type: keyof ConfigLayout["borderWidth"],
  value: string
) {
  const el = document.getElementById(showcaseId);

  el?.style.setProperty(`--heroui-border-width-${type}`, `${value}px`);
}

export function setCssContentColor(level: 1 | 2 | 3 | 4, value: string) {
  const showcaseEl = document.getElementById(showcaseId);
  const baseColorEl = document.getElementById(baseColorsId);
  const hslValue = hexToHsl(value);

  showcaseEl?.style.setProperty(`--heroui-content${level}`, hslValue);
  showcaseEl?.style.setProperty(
    `--heroui-content${level}-foreground`,
    hexToHsl(readableColor(value))
  );
  baseColorEl?.style.setProperty(`--heroui-content${level}`, hslValue);
  baseColorEl?.style.setProperty(
    `--heroui-content${level}-foreground`,
    hexToHsl(readableColor(value))
  );
}

export function setCssOtherColor(
  type: "divider" | "focus" | "overlay"|"default100",
  value: string
) {
  const showcaseEl = document.getElementById(showcaseId);
  const otherColors = document.getElementById(otherColorsId);
  const hslValue = hexToHsl(value);

  otherColors?.style.setProperty(`--heroui-${type}`, hslValue);
  showcaseEl?.style.setProperty(`--heroui-${type}`, hslValue);
}

export function setOtherCssParams(
  type: keyof ConfigLayout["otherParams"],
  value: string
) {
  const el = document.getElementById(showcaseId);

  if (!el) return;

  switch (type) {
    case "disabledOpacity":
      el.style.setProperty("--heroui-disabled-opacity", value);
      break;
    case "dividerWeight":
      el.style.setProperty("--heroui-divider-weight", `${value}px`);
      break;
    case "hoverOpacity":
      el.style.setProperty("--heroui-hover-opacity", value);
      break;
  }
}

export function setAllCssVars(config: Config, theme: ThemeType) {
  // Call setCssColor for 'default' and all brand colors
  setCssColor("default", config[theme].brandColor.default, theme);
  setCssColor("primary", config[theme].brandColor.primary, theme);
  setCssColor("secondary", config[theme].brandColor.secondary, theme);
  setCssColor("success", config[theme].brandColor.success, theme);
  setCssColor("warning", config[theme].brandColor.warning, theme);
  setCssColor("danger", config[theme].brandColor.danger, theme);
  
  // Base colors (these are single values, not shades, so generateShades isn't used here)
  setCssBackground(config[theme].baseColor.background);
  setCssColor("foreground", config[theme].baseColor.foreground, theme); // This also needs to be a single value, not shades

  setCssContentColor(1, config[theme].baseColor.content1);
  setCssContentColor(2, config[theme].baseColor.content2);
  setCssContentColor(3, config[theme].baseColor.content3);
  setCssContentColor(4, config[theme].baseColor.content4);
  setCssColor("default-100", config[theme].baseColor["default-100"], theme);

  // Other colors (these are single values, not shades)
  setCssOtherColor("focus", config[theme].otherColor.focus);
  setCssOtherColor("overlay", config[theme].otherColor.overlay);
  setCssOtherColor("divider", config[theme].otherColor.divider);


  // Layout parameters (these are fine as is)
  setCssFontSize("tiny", config.layout.fontSize.tiny);
  setCssFontSize("small", config.layout.fontSize.small);
  setCssFontSize("medium", config.layout.fontSize.medium);
  setCssFontSize("large", config.layout.fontSize.large);
  setCssLineHeight("tiny", config.layout.lineHeight.tiny);
  setCssLineHeight("small", config.layout.lineHeight.small);
  setCssLineHeight("medium", config.layout.lineHeight.medium);
  setCssLineHeight("large", config.layout.lineHeight.large);
  setCssRadius("small", config.layout.radius.small);
  setCssRadius("medium", config.layout.radius.medium);
  setCssRadius("large", config.layout.radius.large);
  setCssBorderWidth("small", config.layout.borderWidth.small);
  setCssBorderWidth("medium", config.layout.borderWidth.medium);
  setCssBorderWidth("large", config.layout.borderWidth.large);
  setOtherCssParams(
    "disabledOpacity",
    config.layout.otherParams.disabledOpacity
  );
  setOtherCssParams("dividerWeight", config.layout.otherParams.dividerWeight);
  setOtherCssParams("hoverOpacity", config.layout.otherParams.hoverOpacity);
}

// nextui-theme-generator-main/src/components/configuration/index.tsx

import { useContext, useEffect, useState } from "react";
import { Card, CardBody, Switch } from "@heroui/react";
import { ArrowsClockwise } from "@phosphor-icons/react";

import { SelectTemplate } from "components/select-template";
import usePrevious from "hooks/use-previous";
import { ThemeContext } from "providers/theme";
import { ThemeBuilderContext } from "providers/theme-builder";
import { Template } from "shared/types";
// import { generatePluginConfig } from "utils/config"; // Still needed if the original plugin config output is ever used
import { setAllCssVars } from "utils/css-vars"; // Assuming this is still used for live preview
import { storage } from "utils/local-storage";

import { BrandColors } from "./brand-colors";
import { BaseColors } from "./base-colors";
import { OtherColors } from "./other-colors";
import { FontSizes } from "./font-sizes";
import { LineHeights } from "./line-heights";
import { Radiuses } from "./radiuses";
import { BorderWidths } from "./border-widths";
import { Other } from "./other";
import { Actions } from "./actions"; // Now pass config prop to Actions
import { templates } from "templates";

export default function Configuration() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(
    templates.find((template) => template.name === storage.getTemplateType()) ??
      null
  );
  const [syncThemes, setSyncThemes] = useState(storage.getSyncThemes() ?? true);
  const { config, resetConfig, setConfiguration } =
    useContext(ThemeBuilderContext);
  const { theme, setTheme } = useContext(ThemeContext);
  const prevTheme = usePrevious(theme);
  const isLight = theme === "light";
  const syncIcon = syncThemes ? <ArrowsClockwise /> : null;

  /**
   * Update the CSS variables and the configuration when the theme changes.
   */
  useEffect(() => {
    // setAllCssVars is called here to update the live preview
    if (prevTheme !== theme) {
      // Re-apply all CSS vars to the root when theme changes (light/dark switch)
      // This function modifies `document.documentElement`'s style
      // This is for the live preview, not the copy button
      setAllCssVars(config, theme);
    }

    // Set the configuration in the local storage when the config or theme changes
    // Only store the configuration if it's not just a theme switch (which is handled by setAllCssVars)
    // This is more robust check if config object itself deep changed.
    storage.setConfiguration(config); 
  }, [config, theme, prevTheme]);

  /**
   * Handle the syncing of the themes.
   */
  function handleThemeSyncing(isSyncing: boolean) {
    setSyncThemes(isSyncing);
    storage.setSyncThemes(isSyncing);
  }

  /**
   * Handle the toggling of the theme.
   */
  function handleToggleTheme() {
    setTheme(isLight ? "dark" : "light");
  }

  /**
   * Reset the theme to the default one.
   */
  function handleResetTheme() {
    let newConfig;
    if (selectedTemplate) {
      newConfig = selectedTemplate.value;
      setConfiguration(newConfig, theme, syncThemes);
    } else {
      newConfig = resetConfig(theme, syncThemes);
    }
    // Apply reset CSS vars for live preview
    setAllCssVars(newConfig, theme); 
    storage.setConfiguration(newConfig);
  }

  return (
    <Card className="max-w-xs w-full p-2 h-min relative mx-auto md:sticky md:top-28 z-30 md:h-[calc(100vh-12rem)]">
      <CardBody className="flex flex-col">
        <div className="flex flex-col gap-6">
          <Actions
            theme={theme}
            config={config} // Pass the config object to Actions
            onResetTheme={handleResetTheme}
            onToggleTheme={handleToggleTheme}
          />

          <Switch
            color="secondary"
            isSelected={syncThemes}
            size="sm"
            startContent={<ArrowsClockwise />}
            onValueChange={handleThemeSyncing}
          >
            Sync dark and light themes
          </Switch>

          <SelectTemplate
            name={selectedTemplate?.name ?? null}
            onChange={(template) => {
              setConfiguration(template.value, theme, syncThemes);
              // Apply new theme CSS vars for live preview
              setAllCssVars(template.value, theme);
              setSelectedTemplate(template);
              storage.setTemplateType(template.name);
            }}
          />
        </div>

        <div className="flex flex-col gap-8 mt-6">
          <BrandColors
            config={config}
            syncIcon={syncIcon}
            syncThemes={syncThemes}
            theme={theme}
          />
          <BaseColors config={config} theme={theme} />
          <OtherColors
            config={config}
            syncIcon={syncIcon}
            syncThemes={syncThemes}
            theme={theme}
          />
          <FontSizes config={config} />
          <LineHeights config={config} />
          <Radiuses config={config} />
          <BorderWidths config={config} />
          <Other config={config} />
        </div>
      </CardBody>
    </Card>
  );
}
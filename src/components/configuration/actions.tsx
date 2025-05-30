import { useState } from "react";
import { Button, Tooltip } from "@heroui/react";
import {
  ArrowCounterClockwise,
  Check,
  Copy,
  Moon,
  Sun,
} from "@phosphor-icons/react";

import { ThemeType } from "shared/types";
import { generateCssVariables } from "utils/generateCss";

interface ActionsProps {
  theme: ThemeType;
  config: any;
  onResetTheme: () => void;
  onToggleTheme: () => void;
}

export function Actions({
  theme,
  config,
  onResetTheme,
  onToggleTheme,
}: ActionsProps) {
  const [copied, setCopied] = useState(false);
  const isLight = theme === "light";

  /**
   * Handle the copying of the configuration.
   */
  function handleCopyConfig() {
    const cssOutput = generateCssVariables(config, theme); 
    navigator.clipboard.writeText(cssOutput);

    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="flex gap-2">
      <Tooltip content={isLight ? "Dark" : "Light"}>
        <Button
          isIconOnly
          color="secondary"
          variant="flat"
          onPress={onToggleTheme}
        >
          {isLight ? <Moon size={20} /> : <Sun size={20} />}
        </Button>
      </Tooltip>
      <Tooltip content="Reset theme">
        <Button
          isIconOnly
          color="secondary"
          variant="flat"
          onPress={onResetTheme}
        >
          <ArrowCounterClockwise size={20} />
        </Button>
      </Tooltip>
      <Tooltip content="Copy CSS variables">
        <Button
          isIconOnly
          color="secondary"
          variant="flat"
          onPress={handleCopyConfig}
        >
          {copied ? <Check size={20} /> : <Copy size={20} />}
        </Button>
      </Tooltip>
    </div>
  );

}

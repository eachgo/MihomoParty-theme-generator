
import { showcaseId } from "shared/constants";
import mihomoAppHtmlContent from "./mihomoAppContent"; // 引入 Mihomo UI HTML 内容
import mihomoBaseCssContent from "./mihomoBaseCssContent"; // 引入 Mihomo UI CSS 内容

export function Showcase() {
  return (
    <div
      id={showcaseId}
      className="w-full"
      style={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        overflowY: 'auto',
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: mihomoBaseCssContent }} />
      <div
        dangerouslySetInnerHTML={{ __html: mihomoAppHtmlContent }}
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexGrow: 1,
          overflow: 'hidden',
        }}
      />
    </div>
  );
}
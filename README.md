# Mihomo Party 主题生成器

本项目是一个专为 Mihomo Party 设计的主题生成器。

---

## 功能特性

*   **实时预览**：在代表性的 Mihomo UI 页面上即时查看主题变化。
*   **可自定义颜色**：可以输入十六位色值或者在页面上选择颜色。
*   **CSS 变量输出**：将生成的主题以即用型 CSS 变量形式复制。


---

## 如何使用

1.  **打开应用**：访问主题生成器网页应用。
2.  **调整设置**：使用左侧边栏上的控件修改颜色、字体和布局设置。
3.  **实时反馈**：在右侧的 Mihomo UI 预览区域观察变化。
4.  **切换主题**：在亮/暗模式之间切换，查看主题的适应性。
5.  **复制 CSS**：点击“复制 CSS 变量”按钮，获取生成的 CSS 代码。

6.  **创建和应用主题**：
    *   在您的 Mihomo 软件根目录下找到 `data/themes` 文件夹。
    *   在该文件夹内创建一个新的 `.css` 文件，例如 `my-custom-theme.css`。
    *   将从生成器复制的所有 CSS 内容粘贴到这个新创建的 `my-custom-theme.css` 文件中。
    *   **重启 Mihomo 软件**。
    *   重启后，您就可以在 Mihomo UI 的主题选项中看到并选择您新创建的主题了。

---



## 设置与开发

在本地运行本项目：

1.  **克隆仓库**：
    ```bash
    git clone https://github.com/eachgo/MihomoParty-theme-generator.git
    cd MihomoParty-theme-generator
    ```
2.  **安装依赖**：
    ```bash
    npm install
    # 或
    yarn install
    ```
3.  **启动开发服务器**：
    ```bash
    npm run dev
    # 或
    yarn dev
    ```
    应用将通过 `http://localhost:5173` （如果 5173 端口被占用，则为其他端口）访问。

4.  **生产环境构建**：
    ```bash
    npm run build
    # 或
    yarn build
    ```

---

## 贡献

欢迎贡献！如果您有改进建议或新功能，请提交 Issue 或 Pull Request。

---

## 许可证

本项目采用 MIT 许可证。

---

**[English Version](README_en.md)** 

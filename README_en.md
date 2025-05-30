# Mihomo Party Theme Generator

This project is a dedicated theme generator designed for Mihomo Party.

---

## Features

*   **Real-time Preview:** See theme changes instantly applied to a representative Mihomo UI page.
*   **Customizable Colors:** Input hexadecimal color values or select colors directly on the page.
*   **CSS Variable Output:** Copy the generated theme as ready-to-use CSS variables.

---

## How to Use

1.  **Open the Application:** Access the theme generator web application.
2.  **Adjust Settings:** Use the controls on the left sidebar to modify colors, fonts and layout settings.
3.  **Real-time Feedback:** Observe the changes on the Mihomo UI preview to the right.
4.  **Toggle Theme:** Switch between light and dark modes to see how your theme adapts.
5.  **Copy CSS:** Click the "Copy CSS variables" button to get the generated CSS code.

6.  **Create and Apply Your Theme:**
    *   Navigate to the `data/themes` folder within your Mihomo software's root directory.
    *   Create a new `.css` file in this folder, for example, `my-custom-theme.css`.
    *   Paste all the copied CSS content from the generator into this newly created `my-custom-theme.css` file.
    *   **Restart your Mihomo software.**
    *   After restarting, you should be able to see and select your new custom theme in the Mihomo UI's theme options.

---

## Setup and Development

To run this project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/mihomo-ui-theme-generator.git
    cd mihomo-ui-theme-generator
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Start the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The application will be accessible at `http://localhost:5173` (or another port if 5173 is in use).

4.  **Build for production:**
    ```bash
    npm run build
    # or
    yarn build
    ```

---

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

---

## License

This project is licensed under the MIT License.

---

**[Chinese Version](README.md)**
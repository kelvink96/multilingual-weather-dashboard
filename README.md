# Multi-lingual Weather Dashboard

[Online Demo](https://multilingual-weather-dashboard-coral.vercel.app/)

![image](https://github.com/kelvink96/multilingual-weather-dashboard/assets/26582923/848ad586-e601-4c53-9bfa-8fc9b1c2b423)

This project is a multi-lingual weather dashboard built using React (with Vite), Mantine UI library, OpenWeatherMap API, and Axios for data fetching. It provides users with real-time weather updates for different locations around the world, supporting multiple languages for enhanced accessibility.

## Features

-   **Real-Time Weather Updates**: Get up-to-date weather information for various locations.
-   **Multi-Lingual Support**: Choose from multiple languages to view weather information.
-   **Responsive Design**: Enjoy a seamless experience across devices of different screen sizes.
-   **Customizable UI**: Utilizes Mantine UI components for a customizable and visually appealing interface.
-   **Fast Performance**: Built with Vite for quick development and optimized performance.

## Technologies Used

-   **React**: Frontend library for building user interfaces.
-   **Vite**: Next-generation frontend tooling for React projects.
-   **Mantine**: React component library for building modern web applications.
-   **OpenWeatherMap API**: Provides weather data for any location on Earth.
-   **Axios**: Promise-based HTTP client for making requests to APIs.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/kelvink96/multilingual-weather-dashboard
```

2. Navigate to the project directory:

```bash
cd multi-lingual-weather-dashboard
```

3. Install dependencies:

```bash
pnpm install
```

4. Create a `.env` file in the root directory and add your OpenWeatherMap API key:

```plaintext
VITE_API_KEY=<API KEY>
```

5. Start the development server:

```bash
pnpm dev
```

6. Open your browser and navigate to `http://localhost:5173` to view the dashboard.

## Configuration

You can customize the dashboard by modifying the following settings:

-   **Default Location**: Set the default location for weather updates.
-   **Default Language**: Choose the default language for displaying weather information.
-   **Theme**: Customize the UI theme using Mantine's theming options.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/kelvink96/multilingual-weather-dashboard/blob/master/LICENSE) file for details.

## File structure

```files
📂 multilingual-weather-dashboard/
┣ 📂 .github/                   # GitHub's folder configs **
┣ 📂 .husky/                    # Husky's folder
┃ ┣ 📃 commit-msg               # Commitlint git hook
┃ ┗ 📃 pre-commit               # Lint-staged git hook
┣ 📂 public/                    # Public folder
┃ ┣ 📃 vite.svg                 # Icon tab browser
┣ 📂 src/
┃ ┣ 📂 api/                     # Abstract api endpoints folder **
┃ ┣ 📂 assets/                  # Assets folder **
┃ ┣ 📂 components/              # App Components **
┃ ┣ 📂 context/                 # React state conexts **
┃ ┣ 📂 i18n/                    # Internationalization folder **
┃ ┣ 📂 lang/                    # Language/Locales folder **
┃ ┣ 📂 layouts/                 # Page layouts folder **
┃ ┣ 📂 lib/                     # Custom SDKs folder **
┃ ┣ 📂 models/                  # Data types/interfaces folder **
┃ ┣ 📂 pages/                   # Pages **
┃ ┣ 📂 routes/                  # Routes config folder **
┃ ┣ 📂 theme/                   # Theme config folder **
┃ ┣ 📂 utils/                   # Helper functions/methods folder **
┣ 📂 test-utils/                # Testing configs folder
┣ 📃 .editorconfig              # Editor config
┣ 📃 .eslintrc                  # ESLint config
┣ 📃 .gitignore                 # Git ignore
┣ 📃 .prettierignore            # Prettier ignore
┣ 📃 .prettierrc                # Prettier ignore
┣ 📃 commintlint.config.cjs     # Commitlint config
┣ 📃 postcss.config.cjs         # Mantine postcss config
┣ 📃 CHANGELOG.md               # Changelogs
┣ 📃 CONTRIBUTING.md            # Contributing
┣ 📃 LICENSE                    # License of the project
┣ 📃 vite.config.js             # Vite config
┣ 📃 README.md                  # Main README
┣ 📃 renovate.json              # Renovate Bot config **
┣ 📃 tsconfig.json              # TypeScript config
┣ 📃 vite.config.ts            # Vite config
┣ 📃 vitest.setup.ts           # Viteest config
```

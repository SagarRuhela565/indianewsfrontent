# News Frontend Project

This project is a Next.js application designed to display news articles and related content. It utilizes TypeScript for type safety and includes a modular component structure for easy maintenance and scalability.

## Project Structure

- **app/components/Header.tsx**: Defines the `Header` component, which fetches menu and logo data from an API and renders a header section with navigation links and a logo.
- **app/components/Header/CustomLogo.tsx**: Exports the `CustomLogo` component, responsible for rendering the logo based on the fetched data.
- **app/components/Header/NavMenu.tsx**: Exports the `NavMenu` component, which takes an array of menu items and renders them as navigation links.
- **app/lib/customApi.ts**: Contains the `CustomFetch` function, a utility for making API requests and handling responses.
- **app/news/page.tsx**: Defines the news page, fetching news data and rendering it on the page.
- **tsconfig.json**: Configuration file for TypeScript, specifying compiler options and files to include in the compilation.
- **package.json**: Configuration file for npm, listing dependencies and scripts for the project.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd newsfrontent
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
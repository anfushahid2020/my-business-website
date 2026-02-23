# Vite React Website

This is a Vite-powered React application that showcases a modern web development setup with a focus on performance and developer experience.

## Features

- Fast development with Vite
- Component-based architecture using React
- Tailwind CSS for utility-first styling
- Responsive design
- Custom theme support

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd vite-react-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to see the application in action.

## Project Structure

```
vite-react-website
├── src
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── global.css
│   ├── components
│   │   ├── Header
│   │   │   ├── Header.tsx
│   │   │   └── Header.module.css
│   │   ├── Footer
│   │   │   ├── Footer.tsx
│   │   │   └── Footer.module.css
│   │   ├── Button.tsx
│   │   └── Card.tsx
│   ├── pages
│   │   ├── Home.tsx
│   │   └── About.tsx
│   ├── styles
│   │   ├── theme.ts
│   │   └── variables.css
│   ├── hooks
│   │   └── useTheme.ts
│   └── utils
│       └── color-utils.ts
├── public
│   └── index.html
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Color Scheme Update

This project has been updated to use a new black and gold color scheme. The following changes have been made:

- All golden colors (e.g., `#FFD700`, `#FFC700`) have been replaced with `#D4AF37` or `#FFD700`.
- All white colors (e.g., `#FFFFFF`, `white`) have been replaced with black (`#000000`, `#1a1a1a`, or `#0d0d0d`).
- Neutral grays and off-whites have been updated to shades of black.
- Accessibility has been ensured with proper contrast between text and background colors.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request. 

## License

This project is licensed under the MIT License. See the LICENSE file for details.
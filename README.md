# Babo Appliances Website

A React-based website for Babo Appliances - a student-run business that provides refurbished fridges and microwaves to Babson College students.

## Features

- Multi-page React application with routing
- Mobile-responsive design
- Product showcase with buy/rent options
- Contact form for reservations
- FAQ section
- About page with company information

## Tech Stack

- React 18
- React Router (HashRouter for GitHub Pages compatibility)
- Vite
- CSS3 with custom properties
- Google Fonts (Poppins & Inter)

## Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open http://localhost:5173 in your browser

## Deployment to GitHub Pages

### Automatic Deployment (Recommended)

The project includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the main branch.

1. Go to your repository settings on GitHub
2. Navigate to Settings > Pages
3. Set Source to "Deploy from a branch"
4. Select "gh-pages" branch and "/ (root)" folder
5. Save the settings

The site will be automatically deployed whenever you push changes to the main branch.

### Manual Deployment

If you prefer to deploy manually:

1. Build the project:
   ```bash
   npm run build
   ```
2. Install gh-pages package:
   ```bash
   npm install --save-dev gh-pages
   ```
3. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

## Project Structure

```
babo-appliances/
├── public/
│   └── images/         # Product images and logo
├── src/
│   ├── components/     # Reusable components (Header, Footer)
│   ├── pages/         # Page components
│   ├── styles/        # Global styles
│   ├── App.jsx        # Main app component with routing
│   └── main.jsx       # Entry point
├── .github/workflows/ # GitHub Actions for deployment
├── index.html         # HTML template
├── vite.config.js     # Vite configuration
└── package.json       # Project dependencies
```

## Configuration Notes

- The project uses HashRouter instead of BrowserRouter for GitHub Pages compatibility
- Base path is configured in vite.config.js as '/babo-appliances/'
- All image paths use relative URLs (./images/) to work with the base path

## Contact

For questions about the website, contact: mrosado1@babson.edu

For appliance reservations, email: babofridges@gmail.com
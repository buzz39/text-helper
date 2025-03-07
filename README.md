# YayText - Unicode Text Styler

YayText is a web application that allows you to transform ordinary text into stylized Unicode text. It applies various styles and diacritical marks to make your text stand out in places where font options are limited, like social media platforms, messaging apps, and more.

![YayText Screenshot](screenshots/screenshot.png)

## Features

- Transform text into multiple Unicode styles (bold, italic, script, etc.)
- Apply diacritical marks to add flair to your text
- Real-time text transformation preview
- Easy copy to clipboard functionality
- Responsive design for mobile and desktop

## Installation

### Prerequisites

- Node.js (v14.x or higher)
- A code editor (VS Code, Sublime Text, etc.)

### Setup

1. Clone this repository to your local machine:
   ```
   git clone https://github.com/yourusername/yaytext.git
   cd yaytext
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

## API Reference

YayText uses a backend API to process text transformations. If you're deploying this application, you'll need to set up the API endpoints:

### Available Endpoints

#### GET `/api/styles`

Returns available text styles and diacritical marks.

Response example:
```json
{
  "styles": ["bold", "italic", "script", "double_struck"],
  "marks": {
    "combining_grave_accent": "Grave Accent",
    "combining_acute_accent": "Acute Accent",
    "combining_circumflex": "Circumflex"
  }
}
```

#### POST `/api/style`

Transforms text based on the selected style and marks.

Request body:
```json
{
  "text": "The quick brown fox jumps over the lazy dog.",
  "style": "bold",
  "marks": ["combining_grave_accent"]
}
```

Response example:
```json
{
  "styled": "𝐓̀𝐡̀𝐞̀ 𝐪̀𝐮̀𝐢̀𝐜̀𝐤̀ 𝐛̀𝐫̀𝐨̀𝐰̀𝐧̀ 𝐟̀𝐨̀𝐱̀ 𝐣̀𝐮̀𝐦̀𝐩̀𝐬̀ 𝐨̀𝐯̀𝐞̀𝐫̀ 𝐭̀𝐡̀𝐞̀ 𝐥̀𝐚̀𝐳̀𝐲̀ 𝐝̀𝐨̀𝐠̀."
}
```

## Deployment

### Vercel

1. Create a Vercel account if you don't have one
2. Install the Vercel CLI: `npm install -g vercel`
3. Run `vercel` from the project directory
4. Follow the prompts to deploy

### Other Hosting Options

The application consists of static files (HTML, CSS, JavaScript) with API endpoints. It can be deployed to any hosting service that supports:

- Static file hosting
- API endpoints (or serverless functions)

Popular options include Netlify, GitHub Pages (with a separate API service), or any cloud provider like AWS, GCP, or Azure.

## How Text Transformation Works

YayText uses Unicode character mapping to transform regular Latin alphabet characters into their styled equivalents across different Unicode blocks. For example:

- Regular 'A' (U+0041) becomes:
  - Bold 'A' (U+1D400)
  - Italic 'A' (U+1D434)
  - Script 'A' (U+1D49C)

The diacritical marks are applied using combining characters that are placed after each character in the text.

## Browser Compatibility

YayText works in all modern browsers:
- Chrome 49+
- Firefox 44+
- Safari 10.1+
- Edge 17+

Some older browsers may not display all Unicode characters correctly.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch: `git checkout -b new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin new-feature`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Unicode Consortium for the amazing range of characters
- All contributors and testers who helped improve this project

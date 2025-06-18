# Text Styling Helper

A modern Next.js application for transforming plain text into various stylized Unicode formats. Built with Next.js 15, React 19, shadcn/ui components, and Tailwind CSS.

## Features

✨ **Multiple Text Styles**: Transform your text with various Unicode styles including:
- **Bold**: Transform text to bold Unicode characters
- **Italic**: Convert to italic Unicode styling
- **Bold Italic**: Combine bold and italic formatting
- **Script**: Elegant script/cursive styling
- **Double Struck**: Mathematical double-struck characters
- **Sans Serif**: Clean sans-serif Unicode styling
- **Monospace**: Fixed-width monospace formatting
- **Fraktur**: Gothic/blackletter style text
- **Circled**: Text enclosed in circles
- **Squared**: Text in square brackets
- **Parenthesized**: Text in parentheses
- **Fullwidth**: Full-width character formatting
- **Small Caps**: Small capital letters
- **Superscript**: Text in superscript format
- **Subscript**: Text in subscript format
- **Strikethrough**: Text with strikethrough effect
- **Underline**: Underlined text styling
- **Upside Down**: Flipped upside-down text
- **Bubble**: Bubble-style text formatting
- **Square**: Squared text styling

🎨 **Modern UI**: Beautiful, responsive interface with:
- Glassmorphism design effects
- Gradient backgrounds
- Smooth animations and transitions
- Side-by-side input/output layout
- Compact, organized style selection

⚡ **Real-time Preview**: See your styled text instantly as you type

📋 **One-Click Copy**: Copy any styled text to clipboard with toast notifications

🧹 **Quick Clear**: Clear input and output with a single click

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Frontend**: React 19
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Notifications**: Sonner (toast notifications)
- **TypeScript**: Full type safety

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## Usage

1. **Enter your text** in the input area on the left
2. **Select a style** from the compact button grid
3. **View the result** in the output area on the right
4. **Copy to clipboard** using the copy button
5. **Clear all** using the clear button to start fresh

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with Toaster
│   ├── page.tsx            # Main application page
│   └── globals.css         # Global styles
├── components/
│   └── ui/                 # shadcn/ui components
├── lib/
│   ├── text-styles.ts      # Text transformation utilities
│   └── utils.ts            # Utility functions
└── ...
```

## Text Transformation Logic

The application uses Unicode character mapping to transform regular text into styled variants. Each style maintains readability while providing unique visual appeal through different Unicode ranges and character sets.

## Contributing

Feel free to contribute to this project by:
- Adding new text styles
- Improving the UI/UX
- Optimizing performance
- Adding new features

## Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-templatefilter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

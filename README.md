# Portfolio 3

A modern, responsive portfolio website built with Next.js 15, featuring a blog, services, projects showcase, and an AI-powered chatbot.

## Features

- **Responsive Design**: Optimized for all devices with Tailwind CSS
- **Dark Mode**: Theme switching with next-themes
- **Blog System**: Dynamic blog posts with search and filtering
- **AI Chatbot**: Powered by Groq API for interactive conversations
- **3D Elements**: Three.js integration for interactive 3D components
- **Animations**: Smooth animations with Framer Motion

## Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js with React Three Fiber
- **AI**: Groq SDK
- **TypeScript**: Full type safety
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 24+
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <your-repo-url>
   cd portfolio3
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your Groq API key:

   ```env
   GROQ_API_KEY=your_groq_api_key_here
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

This project requires the following environment variable:

- `GROQ_API_KEY`: Your Groq API key for the chatbot functionality

## Build and Run

```bash
# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Deploy on Vercel

### Automatic Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add the `GROQ_API_KEY` environment variable in Vercel's dashboard:
   - Go to your project settings
   - Navigate to "Environment Variables"
   - Add `GROQ_API_KEY` with your API key value
4. Deploy!

### Manual Deployment

You can also deploy manually using the Vercel CLI:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variable
vercel env add GROQ_API_KEY
```

## Project Structure

```text
portfolio3/
├── public/                 # Static assets
├── src/
│   ├── app/               # Next.js app router
│   │   ├── api/          # API routes
│   │   ├── blogs/        # Blog pages
│   │   ├── components/   # Reusable components
│   │   ├── data/         # Static data
│   │   └── ...
│   └── utils/            # Utility functions
├── .env                   # Environment variables
├── next.config.ts         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS config
└── package.json           # Dependencies and scripts
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

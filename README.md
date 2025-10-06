# Faana Advocacy Website

A modern, multilingual legal advocacy website built with Next.js 15, featuring comprehensive legal services, team profiles, and client resources.

## 🌟 Features

- **Multilingual Support**: English, Amharic (am), and Oromo (or) language support using next-intl
- **Modern UI/UX**: Built with Tailwind CSS 4 and Radix UI components
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Legal Practice Areas**: Corporate Law, Employment Law, Family Law, Intellectual Property, Litigation, Real Estate
- **Team Management**: Dynamic team member profiles with detailed information
- **Blog System**: Legal insights and news articles
- **Contact Forms**: Integrated contact and inquiry forms
- **Dark/Light Mode**: Theme switching with next-themes
- **SEO Optimized**: Built-in SEO features for better search visibility

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI primitives
- **Animations**: Framer Motion
- **Internationalization**: next-intl
- **Theme**: next-themes
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Linting**: Biome
- **Package Manager**: pnpm

## 📁 Project Structure

```
src/
├── app/
│   └── [locale]/          # Internationalized routes
│       ├── about/         # About page
│       ├── blogs/         # Blog listing and individual posts
│       ├── careers/       # Career opportunities
│       ├── contact/       # Contact page
│       ├── practice-areas/ # Legal practice areas
│       ├── team/          # Team member profiles
│       └── ...            # Other pages
├── components/
│   ├── ui/               # Reusable UI components
│   └── ...               # Feature-specific components
├── i18n/                 # Internationalization config
├── lib/                  # Utility functions
└── hooks/                # Custom React hooks
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd faana-web
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build the application for production
- `pnpm start` - Start production server
- `pnpm lint` - Run Biome linter
- `pnpm format` - Format code with Biome

## 🌐 Internationalization

The website supports three languages:
- English (en) - Default
- Amharic (am) - አማርኛ
- Oromo (or) - Afaan Oromoo

Language files are located in the `messages/` directory.

## 🎨 Customization

### Adding New Practice Areas

1. Create a new directory in `src/app/[locale]/practice-areas/`
2. Add the corresponding page component
3. Update navigation and routing as needed

### Adding Team Members

1. Add team member data following the schema in `src/components/team-schema.tsx`
2. Create individual profile pages in `src/app/[locale]/team/[slug]/`

### Styling

The project uses Tailwind CSS 4 with a custom design system. Component variants are managed using `class-variance-authority`.

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Configure environment variables if needed
3. Deploy automatically on push to main branch

### Other Platforms

The application can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📄 License

This project is private and proprietary to Faana Advocacy.

## 🤝 Contributing

For internal development:
1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📞 Support

For technical support or questions, please contact the development team.

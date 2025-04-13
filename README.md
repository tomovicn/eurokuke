# EuroKuke - Static Website

A modern static website built with Next.js, Tailwind CSS, and React. This project includes a landing page, contact form, and blog system.

## Features

- **Responsive Design**: Looks great on all devices from mobile to desktop
- **SEO-Optimized**: Built with best practices for search engine visibility
- **Fast Performance**: Optimized for quick load times and a smooth user experience
- **Blog System**: Complete blogging functionality with categories and individual post pages
- **Contact Form**: Interactive contact form with form validation
- **Modern UI**: Clean, professional design using Tailwind CSS

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Interactivity**: React components
- **Deployment**: Built for deployment on [Vercel](https://vercel.com/)

## Getting Started

### Prerequisites

- Node.js 16.8.0 or newer
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/eurokuke.git
   cd eurokuke
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
eurokuke/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── blog/            # Blog pages
│   │   ├── contact/         # Contact page
│   │   ├── privacy/         # Privacy policy
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   ├── components/          # Reusable components
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   └── lib/                 # Utility functions
│       └── blog.ts          # Blog data and functions
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind CSS configuration
└── next.config.ts           # Next.js configuration
```

## Customization

### Styling

This project uses Tailwind CSS for styling. You can customize the design by modifying the `tailwind.config.ts` file.

### Content

- **Blog Posts**: Add or modify blog posts in the `src/lib/blog.ts` file.
- **Landing Page**: Edit the landing page content in `src/app/page.tsx`.
- **Contact Information**: Update your contact details in `src/app/contact/page.tsx`.

## Deployment

This project is optimized for deployment on Vercel, the platform created by the makers of Next.js.

1. Push your code to a GitHub repository.
2. Import your project into Vercel.
3. Vercel will detect that you're using Next.js and set up the optimal build settings for you.
4. Your site will be deployed and you'll get a URL to access it.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Platform](https://vercel.com)

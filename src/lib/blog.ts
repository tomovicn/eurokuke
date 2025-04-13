export type Author = {
  name: string;
  picture?: string;
};

export type Post = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  author: Author;
  readingTime: number;
};

// Sample blog data
const posts: Post[] = [
  {
    slug: 'best-website-practices-2023',
    title: 'Best Website Practices for 2023',
    date: 'Jan 12, 2023',
    category: 'Web Design',
    excerpt: 'Discover the top website design practices that will help your site stand out in 2023.',
    content: `
      # Best Website Practices for 2023

      As we move further into 2023, website design continues to evolve at a rapid pace. Staying up-to-date with the latest trends and best practices is essential for businesses looking to maintain a competitive edge online.

      ## Minimalist Design
      
      Minimalism continues to dominate web design in 2023. Clean layouts, ample white space, and simplified navigation create a user-friendly experience that allows visitors to find what they're looking for quickly.

      ## Dark Mode
      
      Offering a dark mode option has become increasingly popular. Not only does it reduce eye strain for users browsing at night, but it also saves battery life on mobile devices with OLED screens.

      ## Microinteractions
      
      Small, subtle animations that respond to user actions (like hovering over a button) can significantly enhance the user experience by providing visual feedback and making your site feel more interactive.

      ## Accessibility
      
      Making your website accessible to all users, including those with disabilities, isn't just good practice—it's essential. Ensure your site works with screen readers, has proper color contrast, and is fully navigable via keyboard.

      ## Mobile-First Approach
      
      With mobile traffic accounting for more than half of all web traffic, designing for mobile first is no longer optional. Ensure your website looks and functions flawlessly on smartphones and tablets.

      By implementing these best practices, you'll create a website that not only looks great but also provides an excellent user experience that keeps visitors coming back.
    `,
    author: {
      name: 'Jane Smith',
    },
    readingTime: 5,
  },
  {
    slug: 'seo-tips-for-small-businesses',
    title: 'SEO Tips for Small Businesses',
    date: 'Feb 28, 2023',
    category: 'SEO',
    excerpt: 'Learn how small businesses can improve their search engine rankings without breaking the bank.',
    content: `
      # SEO Tips for Small Businesses

      Search Engine Optimization (SEO) is crucial for small businesses looking to increase their visibility online. Here are some effective strategies that won't break the bank.

      ## Focus on Local SEO
      
      If you have a physical location or serve a specific geographic area, local SEO is your best friend. Claim your Google Business Profile, ensure your NAP (Name, Address, Phone) information is consistent across all platforms, and encourage customers to leave reviews.

      ## Create Quality Content
      
      Content remains king in the SEO world. Create informative, useful content that answers the questions your potential customers are asking. Blog posts, how-to guides, and FAQs can all help boost your SEO while providing value to your audience.

      ## Optimize for Voice Search
      
      With the increasing popularity of smart speakers and voice assistants, optimizing for voice search is becoming essential. Focus on natural language keywords and phrases that people might speak rather than type.

      ## Technical SEO Basics
      
      Even small businesses need to get the technical basics right. Ensure your website loads quickly, is mobile-friendly, has a secure HTTPS connection, and includes proper meta tags and descriptions.

      ## Build Quality Backlinks
      
      Backlinks from reputable websites signal to search engines that your content is valuable. Partner with local businesses, participate in community events, or contribute guest posts to industry blogs to build quality backlinks.

      By implementing these SEO strategies consistently, small businesses can improve their search engine rankings and attract more potential customers to their websites.
    `,
    author: {
      name: 'Michael Johnson',
    },
    readingTime: 6,
  },
  {
    slug: 'importance-of-mobile-optimization',
    title: 'Why Mobile Optimization Matters More Than Ever',
    date: 'Mar 15, 2023',
    category: 'Mobile',
    excerpt:
      'With mobile traffic continuing to rise, learn why optimizing your website for mobile devices is critical.',
    content: `
      # Why Mobile Optimization Matters More Than Ever

      In today's digital landscape, mobile optimization isn't just a nice-to-have feature—it's an absolute necessity. Here's why it matters more than ever and how you can ensure your website is fully optimized for mobile users.

      ## Mobile Traffic Dominates
      
      Mobile devices now account for more than half of all web traffic worldwide. If your website isn't optimized for mobile, you're potentially missing out on a significant portion of your audience.

      ## Google's Mobile-First Indexing
      
      Google now uses the mobile version of your website for indexing and ranking. This means that if your mobile site isn't up to par, your search rankings could suffer regardless of how well your desktop site performs.

      ## User Experience Expectations
      
      Today's users expect a seamless experience across all devices. If they encounter a website that's difficult to navigate on their smartphone, they're likely to leave and find a competitor whose site is mobile-friendly.

      ## Faster Loading Times
      
      Mobile users are often on the go and have less patience for slow-loading websites. Optimizing for mobile means ensuring fast loading times, which can significantly reduce bounce rates.

      ## Higher Conversion Rates
      
      Mobile-optimized websites typically see higher conversion rates. When users can easily navigate your site and complete actions (like making a purchase or filling out a form) on their mobile devices, they're more likely to do so.

      ## How to Optimize for Mobile
      
      1. Use responsive design
      2. Simplify navigation for touch screens
      3. Optimize images and media
      4. Use larger, readable fonts
      5. Ensure buttons are large enough to tap easily
      6. Test your site on multiple devices
      
      By prioritizing mobile optimization, you'll not only improve user experience but also boost your search rankings and increase the likelihood of converting visitors into customers.
    `,
    author: {
      name: 'Sarah Williams',
    },
    readingTime: 7,
  },
];

export function getAllPosts(): Post[] {
  return posts;
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getPostsByCategory(category: string): Post[] {
  return posts.filter((post) => post.category.toLowerCase() === category.toLowerCase());
}

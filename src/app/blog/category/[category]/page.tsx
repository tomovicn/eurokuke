import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { getAllPosts } from '@/lib/blog';
import { getPostsByCategory } from '@/lib/blog';

const categories = {
  legal: {
    title: 'Legal Information',
    description: 'Articles about certification requirements and regulations for euro towbars.',
    posts: [
      {
        id: 1,
        title: 'Understanding Euro Towbar Certification Requirements',
        href: '/blog/euro-towbar-certification',
        description:
          'Learn about the certification requirements for euro towbars in Serbia and why they are important for your safety.',
        date: 'Mar 16, 2024',
        datetime: '2024-03-16',
      },
    ],
  },
  guide: {
    title: 'Guides',
    description: 'Comprehensive guides for choosing and maintaining your euro towbar.',
    posts: [
      {
        id: 2,
        title: 'How to Choose the Right Towbar for Your Vehicle',
        href: '/blog/choosing-right-towbar',
        description:
          'A comprehensive guide to selecting the perfect towbar for your vehicle, considering weight, type, and compatibility.',
        date: 'Mar 10, 2024',
        datetime: '2024-03-10',
      },
    ],
  },
  safety: {
    title: 'Safety',
    description: 'Important safety information and best practices for euro towbar usage.',
    posts: [
      {
        id: 3,
        title: 'The Importance of Professional Towbar Installation',
        href: '/blog/professional-installation',
        description:
          "Discover why professional installation is crucial for your towbar's performance and your vehicle's safety.",
        date: 'Mar 5, 2024',
        datetime: '2024-03-05',
      },
    ],
  },
};

// Generate static parameters for all categories
export function generateStaticParams() {
  const posts = getAllPosts();
  const categories = new Set(posts.map((post) => post.category.toLowerCase()));

  return Array.from(categories).map((category) => ({
    category,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const category = params.category;
  const posts = getPostsByCategory(category);

  if (posts.length === 0) {
    return {
      title: 'Category Not Found | EuroKuke Blog',
    };
  }

  return {
    title: `${posts[0].category} Articles | EuroKuke Blog`,
    description: `Browse our collection of articles about ${posts[0].category.toLowerCase()}.`,
  };
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = categories[params.category as keyof typeof categories];

  if (!category) {
    return (
      <div className='bg-white min-h-screen flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold text-gray-900'>Category Not Found</h1>
          <p className='mt-4 text-xl text-gray-500'>The requested category could not be found.</p>
          <Link
            href='/blog'
            className='mt-6 inline-block px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700'
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32'>
          <h2 className='text-3xl font-bold text-gray-900'>{category.title}</h2>
          <p className='mt-4 text-xl text-gray-500'>{category.description}</p>

          <div className='mt-12 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0'>
            {category.posts.map((post) => (
              <div key={post.id} className='group relative'>
                <div className='relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64'>
                  <Image
                    src={`/images/blog/post.png`}
                    alt={post.title}
                    className='h-full w-full object-cover object-center'
                    width={400}
                    height={300}
                  />
                </div>
                <h3 className='mt-6 text-lg font-semibold text-gray-900'>
                  <Link href={post.href}>
                    <span className='absolute inset-0' />
                    {post.title}
                  </Link>
                </h3>
                <p className='text-sm text-gray-500'>{post.date}</p>
                <p className='mt-2 text-sm text-gray-500'>{post.description}</p>
              </div>
            ))}
          </div>

          <div className='mt-12'>
            <Link
              href='/blog'
              className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700'
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

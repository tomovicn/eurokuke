import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostsByCategory, getAllPosts } from '@/lib/blog';
import { Metadata } from 'next';

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
  const posts = getPostsByCategory(params.category);

  if (posts.length === 0) {
    notFound();
  }

  return (
    <div className='bg-white'>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8'>
        <div className='text-center'>
          <h1 className='text-3xl font-extrabold text-gray-900 sm:text-4xl'>{posts[0].category}</h1>
          <p className='mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4'>
            Browse our articles about {posts[0].category.toLowerCase()}
          </p>
        </div>

        <div className='mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none'>
          {posts.map((post) => (
            <div key={post.slug} className='flex flex-col rounded-lg shadow-lg overflow-hidden'>
              <div className='flex-shrink-0'>
                <div className='h-48 w-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500' />
              </div>
              <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
                <div className='flex-1'>
                  <p className='text-sm font-medium text-indigo-600'>
                    <Link href={`/blog/category/${post.category}`} className='hover:underline'>
                      {post.category}
                    </Link>
                  </p>
                  <Link href={`/blog/${post.slug}`} className='block mt-2'>
                    <p className='text-xl font-semibold text-gray-900'>{post.title}</p>
                    <p className='mt-3 text-base text-gray-500'>{post.excerpt}</p>
                  </Link>
                </div>
                <div className='mt-6 flex items-center'>
                  <div className='flex-shrink-0'>
                    <span className='sr-only'>{post.author.name}</span>
                    <div className='h-10 w-10 rounded-full bg-gray-200' />
                  </div>
                  <div className='ml-3'>
                    <p className='text-sm font-medium text-gray-900'>{post.author.name}</p>
                    <div className='flex space-x-1 text-sm text-gray-500'>
                      <time dateTime={post.date}>{post.date}</time>
                      <span aria-hidden='true'>&middot;</span>
                      <span>{post.readingTime} min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-16 text-center'>
          <Link href='/blog' className='text-indigo-600 hover:text-indigo-500'>
            ← View all blog posts
          </Link>
        </div>
      </div>
    </div>
  );
}

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { Metadata } from 'next';

// Define the generateStaticParams function for static generation of all blog posts
export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Define the generateMetadata function for SEO
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: `${post.title} | EuroKuke Blog`,
    description: post.excerpt,
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className='bg-white'>
      <div className='max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <p className='text-base font-semibold text-indigo-600 tracking-wide uppercase'>
            <Link href={`/blog/category/${post.category}`} className='hover:underline'>
              {post.category}
            </Link>
          </p>
          <h1 className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
            {post.title}
          </h1>
          <div className='mt-6 flex items-center justify-center'>
            <div className='flex-shrink-0'>
              <span className='sr-only'>{post.author.name}</span>
              <div className='h-10 w-10 rounded-full bg-gray-200' />
            </div>
            <div className='ml-3 text-left'>
              <p className='text-sm font-medium text-gray-900'>{post.author.name}</p>
              <div className='flex space-x-1 text-sm text-gray-500'>
                <time dateTime={post.date}>{post.date}</time>
                <span aria-hidden='true'>&middot;</span>
                <span>{post.readingTime} min read</span>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-12 prose prose-indigo prose-lg text-gray-500 mx-auto'>
          {post.content.split('\n').map((line, index) => {
            if (line.startsWith('# ')) {
              return (
                <h1 key={index} className='text-3xl font-bold mt-8 mb-4'>
                  {line.substring(2)}
                </h1>
              );
            }
            if (line.startsWith('## ')) {
              return (
                <h2 key={index} className='text-2xl font-bold mt-6 mb-3'>
                  {line.substring(3)}
                </h2>
              );
            }
            if (line.startsWith('### ')) {
              return (
                <h3 key={index} className='text-xl font-bold mt-5 mb-2'>
                  {line.substring(4)}
                </h3>
              );
            }
            if (line.trim().length === 0) {
              return <div key={index} className='my-4'></div>;
            }
            return (
              <p key={index} className='my-4'>
                {line.trim()}
              </p>
            );
          })}
        </div>

        <div className='mt-16 border-t border-gray-200 pt-8'>
          <Link href='/blog' className='text-indigo-600 hover:text-indigo-500'>
            ← Back to blog
          </Link>
        </div>
      </div>
    </div>
  );
}

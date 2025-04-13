import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '@/lib/blog';

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className='bg-white'>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8'>
        <div className='text-center'>
          <h1 className='text-3xl font-extrabold text-gray-900 sm:text-4xl'>Our Blog</h1>
          <p className='max-w-2xl mt-3 mx-auto text-xl text-gray-500 sm:mt-4'>
            Latest news, tips, and insights from our team
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
      </div>
    </div>
  );
}

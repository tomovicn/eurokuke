import Link from 'next/link';
import Image from 'next/image';

const blogPosts = [
  {
    id: 1,
    title: 'Understanding Euro Towbar Certification Requirements',
    href: '/blog/euro-towbar-certification',
    description:
      'Learn about the certification requirements for euro towbars in Serbia and why they are important for your safety.',
    date: 'Mar 16, 2024',
    datetime: '2024-03-16',
    category: { title: 'Legal', href: '/blog/category/legal' },
    author: {
      name: 'Marko Petrović',
      role: 'Certified Installer',
      href: '#',
    },
  },
  {
    id: 2,
    title: 'How to Choose the Right Towbar for Your Vehicle',
    href: '/blog/choosing-right-towbar',
    description:
      'A comprehensive guide to selecting the perfect towbar for your vehicle, considering weight, type, and compatibility.',
    date: 'Mar 10, 2024',
    datetime: '2024-03-10',
    category: { title: 'Guide', href: '/blog/category/guide' },
    author: {
      name: 'Ana Jovanović',
      role: 'Technical Expert',
      href: '#',
    },
  },
  {
    id: 3,
    title: 'The Importance of Professional Towbar Installation',
    href: '/blog/professional-installation',
    description:
      "Discover why professional installation is crucial for your towbar's performance and your vehicle's safety.",
    date: 'Mar 5, 2024',
    datetime: '2024-03-05',
    category: { title: 'Safety', href: '/blog/category/safety' },
    author: {
      name: 'Ivan Nikolić',
      role: 'Safety Inspector',
      href: '#',
    },
  },
];

export default function Blog() {
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32'>
          <h2 className='text-3xl font-bold text-gray-900'>Latest Articles</h2>

          <div className='mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0'>
            {blogPosts.map((post) => (
              <div key={post.id} className='group relative'>
                <div className='relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64'>
                  <Image
                    src={`/images/blog/${post.id}.jpg`}
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
                <p className='text-base font-semibold text-gray-900'>{post.author.name}</p>
                <p className='text-sm text-gray-500'>{post.date}</p>
                <p className='mt-2 text-sm text-gray-500'>{post.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog Post - Euro Towbar Installation',
  description: 'Read our latest articles about euro towbar installation and maintenance.',
};

const blogPosts = {
  'euro-towbar-certification': {
    title: 'Understanding Euro Towbar Certification Requirements',
    date: 'March 16, 2024',
    author: {
      name: 'Marko Petrović',
      role: 'Certified Installer',
    },
    content: `
      <h2>Why Certification Matters</h2>
      <p>Euro towbar certification is not just a legal requirement in Serbia - it's a crucial safety measure. Certified towbars ensure that your vehicle can safely tow loads without compromising its structural integrity or the safety of other road users.</p>

      <h2>Certification Process</h2>
      <p>The certification process involves several steps:</p>
      <ul>
        <li>Installation by certified technicians</li>
        <li>Thorough inspection of the installation</li>
        <li>Testing of the towbar's load capacity</li>
        <li>Documentation of the installation process</li>
        <li>Issuance of official certification</li>
      </ul>

      <h2>Legal Requirements</h2>
      <p>In Serbia, all towbar installations must be certified according to EU standards. This certification is required for:</p>
      <ul>
        <li>Vehicle registration</li>
        <li>Periodic technical inspections</li>
        <li>Insurance coverage</li>
      </ul>

      <h2>Choosing a Certified Installer</h2>
      <p>When selecting an installer, ensure they have:</p>
      <ul>
        <li>Proper certification and training</li>
        <li>Experience with your vehicle make and model</li>
        <li>Access to quality, certified towbar components</li>
        <li>A track record of successful installations</li>
      </ul>
    `,
  },
  'choosing-right-towbar': {
    title: 'How to Choose the Right Towbar for Your Vehicle',
    date: 'March 10, 2024',
    author: {
      name: 'Ana Jovanović',
      role: 'Technical Expert',
    },
    content: `
      <h2>Understanding Towbar Types</h2>
      <p>There are several types of towbars available, each suited for different needs:</p>
      <ul>
        <li>Fixed towbars - permanent installation</li>
        <li>Detachable towbars - can be removed when not in use</li>
        <li>Retractable towbars - fold away when not needed</li>
        <li>Specialized towbars - for specific vehicle types</li>
      </ul>

      <h2>Weight Considerations</h2>
      <p>When choosing a towbar, consider:</p>
      <ul>
        <li>Your vehicle's maximum towing capacity</li>
        <li>The weight of what you'll be towing</li>
        <li>The tongue weight (vertical load on the towbar)</li>
        <li>Gross vehicle weight rating (GVWR)</li>
      </ul>

      <h2>Compatibility Check</h2>
      <p>Ensure the towbar is compatible with your vehicle by checking:</p>
      <ul>
        <li>Vehicle make, model, and year</li>
        <li>Existing vehicle modifications</li>
        <li>Bumper type and design</li>
        <li>Electrical system requirements</li>
      </ul>
    `,
  },
  'professional-installation': {
    title: 'The Importance of Professional Towbar Installation',
    date: 'March 5, 2024',
    author: {
      name: 'Ivan Nikolić',
      role: 'Safety Inspector',
    },
    content: `
      <h2>Why Professional Installation Matters</h2>
      <p>Professional installation ensures:</p>
      <ul>
        <li>Proper alignment and fitment</li>
        <li>Correct electrical connections</li>
        <li>Structural integrity of your vehicle</li>
        <li>Compliance with safety standards</li>
        <li>Valid warranty coverage</li>
      </ul>

      <h2>Installation Process</h2>
      <p>A professional installation includes:</p>
      <ul>
        <li>Vehicle inspection and preparation</li>
        <li>Proper mounting and securing</li>
        <li>Electrical system integration</li>
        <li>Testing and quality checks</li>
        <li>Documentation and certification</li>
      </ul>

      <h2>Safety Considerations</h2>
      <p>Professional installers ensure:</p>
      <ul>
        <li>Proper load distribution</li>
        <li>Secure attachment points</li>
        <li>Correct wiring and connections</li>
        <li>Compliance with safety regulations</li>
      </ul>
    `,
  },
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className='bg-white min-h-screen flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold text-gray-900'>Post Not Found</h1>
          <p className='mt-4 text-xl text-gray-500'>The requested blog post could not be found.</p>
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
          <article>
            <header className='mb-8'>
              <h1 className='text-4xl font-bold text-gray-900'>{post.title}</h1>
              <div className='mt-4 flex items-center'>
                <div className='flex-shrink-0'>
                  <span className='sr-only'>{post.author.name}</span>
                  <div className='h-10 w-10 rounded-full bg-gray-200' />
                </div>
                <div className='ml-3'>
                  <p className='text-sm font-medium text-gray-900'>{post.author.name}</p>
                  <p className='text-sm text-gray-500'>{post.author.role}</p>
                </div>
                <div className='ml-auto'>
                  <p className='text-sm text-gray-500'>{post.date}</p>
                </div>
              </div>
            </header>

            <div className='prose prose-lg prose-red mx-auto'>
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            <div className='mt-12'>
              <Link
                href='/blog'
                className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700'
              >
                Back to Blog
              </Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

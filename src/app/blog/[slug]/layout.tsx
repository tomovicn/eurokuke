import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog Post - Euro Towbar Installation',
  description: 'Read our latest articles about euro towbar installation and maintenance.',
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

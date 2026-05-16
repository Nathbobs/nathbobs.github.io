import { allPosts } from 'content-collections';
import { BlogSlugRedirect } from './redirect-client';

export function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogSlugPage() {
  return <BlogSlugRedirect />;
}

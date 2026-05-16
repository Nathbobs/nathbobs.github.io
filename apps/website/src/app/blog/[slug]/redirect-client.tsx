'use client';
import { useEffect } from 'react';
import { useParams } from 'next/navigation';

export function BlogSlugRedirect() {
  const { slug } = useParams();
  useEffect(() => { window.location.replace(`/en/blog/${slug}`); }, [slug]);
  return null;
}

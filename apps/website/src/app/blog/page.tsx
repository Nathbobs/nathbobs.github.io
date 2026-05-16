'use client';
import { useEffect } from 'react';
export default function BlogRedirect() {
  useEffect(() => { window.location.replace('/en/blog'); }, []);
  return null;
}

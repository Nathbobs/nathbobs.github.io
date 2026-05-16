'use client';
import { useEffect } from 'react';
export default function ResumeRedirect() {
  useEffect(() => { window.location.replace('/en/resume'); }, []);
  return null;
}

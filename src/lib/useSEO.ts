import { useEffect } from 'react';

/**
 * Sets the document <title> and meta description per page.
 * No dependency — just a small effect that updates the head.
 */
export function useSEO(title: string, description: string) {
  useEffect(() => {
    document.title = title;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
  }, [title, description]);
}

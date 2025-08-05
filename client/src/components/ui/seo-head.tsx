import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export function SEOHead({ title, description, keywords, image, url }: SEOHeadProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Update meta keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'keywords';
        meta.content = keywords;
        document.head.appendChild(meta);
      }
    }

    // Update Open Graph tags
    const updateOrCreateMeta = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };

    updateOrCreateMeta('og:title', title);
    updateOrCreateMeta('og:description', description);
    updateOrCreateMeta('og:type', 'website');
    
    if (image) {
      updateOrCreateMeta('og:image', image);
    }
    
    if (url) {
      updateOrCreateMeta('og:url', url);
    }

    // Update Twitter meta tags
    updateOrCreateMeta('twitter:card', 'summary_large_image');
    updateOrCreateMeta('twitter:title', title);
    updateOrCreateMeta('twitter:description', description);
    
    if (image) {
      updateOrCreateMeta('twitter:image', image);
    }
  }, [title, description, keywords, image, url]);

  return null;
}

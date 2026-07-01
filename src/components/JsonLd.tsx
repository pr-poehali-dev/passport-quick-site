import { useEffect } from 'react';

interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
  id?: string;
}

const JsonLd = ({ data, id = 'page-jsonld' }: JsonLdProps) => {
  useEffect(() => {
    let script = document.getElementById(id) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);

    return () => {
      const el = document.getElementById(id);
      if (el) el.remove();
    };
  }, [data, id]);

  return null;
};

export default JsonLd;

import Head from 'next/head';

interface MetaProps {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
}

export const Meta = ({ title, description, keywords, canonicalUrl }: MetaProps) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <link rel="canonical" href={canonicalUrl} />
    {/* Open Graph tags */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={canonicalUrl} />
    <meta property="og:type" content="website" />
  </Head>
);

"use client";
import Script from "next/script";

const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  'name': 'Obaiah Mopuri | Full-Stack Developer',
  'description': 'Experienced full-stack developer specializing in React, Next.js, Node.js, and MongoDB. View my projects, skills, and experience in web development.',
  'url': 'https://portfolio-site-chinnas-projects-8fa3da0b.vercel.app/',
  'mainEntity': {
    '@type': 'Person',
    'name': 'Obaiah Mopuri',
    'url': 'https://portfolio-site-chinnas-projects-8fa3da0b.vercel.app/',
    'image': '',
    'jobTitle': 'Full-Stack Developer',
    'worksFor': {
      '@type': 'Organization',
      'name': 'Self-employed',
    },
    'sameAs': '',
  },
  'publisher': {
    '@type': 'Organization',
    'name': 'Obaiah Mopuri',
  },
  'breadcrumb': {
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://portfolio-site-chinnas-projects-8fa3da0b.vercel.app',
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'About',
        'item': 'https://portfolio-site-chinnas-projects-8fa3da0b.vercel.app/#about',
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': 'Projects',
        'item': 'https://portfolio-site-chinnas-projects-8fa3da0b.vercel.app/#projects',
      },
      {
        '@type': 'ListItem',
        'position': 4,
        'name': 'Skills',
        'item': 'https://portfolio-site-chinnas-projects-8fa3da0b.vercel.app/#skills',
      },
      {
        '@type': 'ListItem',
        'position': 5,
        'name': 'Experience',
        'item': 'https://portfolio-site-chinnas-projects-8fa3da0b.vercel.app/#experience',
      },
      {
        '@type': 'ListItem',
        'position': 6,
        'name': 'Contact',
        'item': 'https://portfolio-site-chinnas-projects-8fa3da0b.vercel.app/#contact',
      },
    ],
  },
};

const HomeSchema = () => {
  return (
    <Script id="homeSchema" type="application/ld+json">
      {JSON.stringify(schemaData)}
    </Script>
  );
};

export default HomeSchema;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,

  // No `i18n` key: that option belongs to the Pages Router and is ignored by
  // the App Router, which this project uses. The single Serbian locale is
  // declared by `<html lang='sr'>` in the root layout.
  //
  // No `images.domains` either. Every image is local, and the entry that used
  // to be here allowed remote loads from images.unsplash.com, which is exactly
  // the source of decorative stock photography this site does not use.

  async redirects() {
    return [
      // Two of the four original posts covered ground already covered better
      // elsewhere: `certifikacija-euro-kuke` was a second, thinner article about
      // the atest, and `profesionalna-montaza-euro-kuke` restated the service
      // page. Two URLs answering one query split the ranking between them, so
      // each is folded into the page that now owns the topic. 301, so whatever
      // authority they had transfers rather than being dropped.
      {
        source: '/blog/certifikacija-euro-kuke',
        destination: '/blog/atest-euro-kuke',
        permanent: true,
      },
      {
        source: '/blog/profesionalna-montaza-euro-kuke',
        destination: '/installation',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

import { withContentCollections } from '@content-collections/next';

const config = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default withContentCollections(config);

import dotevn from 'dotenv';

dotevn.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Slicks Slices`,
    siteUrl: `https://gatsby.pizza`,
    description: `The best pizza place in town!`,
    twitter: '@slicksSlices',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      // this is the name of the plugin you are adding
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '6u0vmexe',
        dataset: 'production',
        watchMode: true, // when in development making a change in sanity, as you hit save it will be updated in Gatsby in real time
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};

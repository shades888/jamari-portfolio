//This is were the connection with the sanity client and react application is made

import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

//calling as a function and provide an Object as a parameter
//npx sanity manage to start manager
export const client = sanityClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2023-03-01',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN,

});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
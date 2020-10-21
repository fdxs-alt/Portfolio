require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

module.exports = {
    plugins: [
        `gatsby-plugin-styled-components`,
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    'gatsby-remark-relative-images',
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 750,
                            linkImagesToOrginal: false,
                        },
                    },
                ],
            },
        },
    ],
};

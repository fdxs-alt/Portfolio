require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

module.exports = {
    plugins: [
        `gatsby-plugin-styled-components`,
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    'gatsby-remark-relative-images',
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 1000,
                            linkImagesToOriginal: false,
                        },
                    },
                    {
                        resolve: `gatsby-remark-highlight-code`,
                    },
                ],
            },
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `GatsbyJS`,
                short_name: `GatsbyJS`,
                start_url: `/`,
                background_color: `#f7f0eb`,
                theme_color: `#a2466c`,
                display: `standalone`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                google: {
                    families: ['Raleway'],
                },
            },
        },
        `gatsby-plugin-offline`,
    ],
};

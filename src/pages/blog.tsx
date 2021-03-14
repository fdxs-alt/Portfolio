import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import {
    BlogPostWrapper,
    PostWrapper,
    Title,
    Data,
    Description,
} from '../style/Blog.styles';
interface IData {
    node: {
        frontmatter: {
            title: string;
            date: string;
            description: string;
        };
        fields: {
            slug: string;
        };
    };
}

const blog = () => {
    const data = useStaticQuery(query);

    return (
        <Layout>
            <BlogPostWrapper>
                {data.allMarkdownRemark.edges.map((post: IData) => (
                    <PostWrapper
                        whileHover={{ scale: 1.03 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Title to={`/blog/${post.node.fields.slug}`}>
                            {post.node.frontmatter.title}
                        </Title>
                        <Data>{post.node.frontmatter.date}</Data>
                        <Description>
                            {post.node.frontmatter.description}
                        </Description>
                    </PostWrapper>
                ))}
            </BlogPostWrapper>
        </Layout>
    );
};

export default blog;

const query = graphql`
    query {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        title
                        date
                        description
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`;

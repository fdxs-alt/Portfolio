import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { motion } from 'framer-motion';
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
const BlogPostWrapper = styled.div`
    width: 60%;
    margin: auto;
    min-height: 90vh;
`;
const Title = styled(Link)`
    color: ${props => props.theme.colors.darkFont};
    width: 100%;
    padding: 1rem;
    font-size: 2.2rem;
    text-decoration: none;
    font-weight: 800;

    &:hover {
        color: ${props => props.theme.colors.darkGrey};
    }
`;
const Data = styled.div`
    padding: 0.5rem 1rem;
    font-size: 1.1rem;
    font-weight: 500;
`;
const Description = styled.p`
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    text-align: justify;
`;
const PostWrapper = styled(motion.div)`
    padding: 1rem;
`;
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

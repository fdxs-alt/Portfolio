import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import { BlogPostWrapper } from '../style/Blog.styles';
import { BlogContent, Title } from '../style/Post.style';

const BlogPost = (props: any) => {
    return (
        <Layout>
            <BlogPostWrapper>
                <Title
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {props.data.markdownRemark.frontmatter.title}
                </Title>
                <BlogContent
                    dangerouslySetInnerHTML={{
                        __html: props.data.markdownRemark.html,
                    }}
                />
            </BlogPostWrapper>
        </Layout>
    );
};

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                date
                description
            }
            html
        }
    }
`;
export default BlogPost;

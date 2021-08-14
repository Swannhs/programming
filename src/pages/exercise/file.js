import React, { Component } from 'react'
import Layout from '../../components/Layout'
import { graphql, Link } from 'gatsby'

class File extends Component {
    render() {
        const { data } = this.props
        const siteTitle = 'Funycode'
        const posts = data.allPost.nodes

        return (
            <Layout location={this.props.location} title={siteTitle}>
                <div style={{
                    maxWidth: '1000px',
                }}>
                    <h1 style={{fontSize: '50px', textAlign: 'center'}}>Basic Declaration & Expression Exercise</h1>
                    <hr/>
                    {
                        posts.map((node) => {
                            return(
                                <div key={node.slug} style={{
                                    marginTop: '30px',
                                    marginLeft: '50px'
                                }}>
                                    <p
                                        style={{
                                            fontSize: '25px',
                                        }}
                                    >
                                        <Link style={{
                                            boxShadow: `none`,
                                            textDecoration: 'none',
                                            color: 'darkblue',
                                        }} to={node.slug}>
                                            {node.title}
                                        </Link>
                                    </p>
                                </div>

                            )
                        })
                    }
                </div>

            </Layout>
        )
    }
}

export default File

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allPost(
            sort: {fields: banner___absolutePath, order: DESC}
            filter: {tags: {elemMatch: {name: {eq: "basic"}}}}
        ) {
            nodes {
                slug
                title
                tags {
                    name
                    slug
                }
            }
        }
    }
`



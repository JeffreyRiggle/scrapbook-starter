import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

export default function BookImage({filename, description}) {
  return (
    <StaticQuery query={graphql`
      query {
        pics: allFile(filter: { sourceInstanceName: { eq: "imgs" } }) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.pics.edges.find(n => {
        return n.node.relativePath === filename;
      });
      if (!image) {
        return null;
      }

      return (
        <div className="bookimage">
          <a href={image.node.childImageSharp.fluid.src} target="_blank"><Img alt={description} fluid={image.node.childImageSharp.fluid} /></a>
          <div>{description}</div>
        </div>
      )
    }}>
    </StaticQuery>
  )
}
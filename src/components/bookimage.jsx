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
                fixed(width: 210) {
                  ...GatsbyImageSharpFixed
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
          <a href={image.node.childImageSharp.fluid.src} target="_blank" rel="noreferrer"><Img alt={description} fixed={image.node.childImageSharp.fixed} /></a>
          <div>{description}</div>
        </div>
      )
    }}>
    </StaticQuery>
  )
}
import React from 'react'
import { graphql } from 'gatsby'
import '../main.css'
import Book from '../components/book'

export default function Home({data}) {
  const images = data.allImg.edges.map(edge => edge.node)
  return (
    <div>
      <header><h2>Your Title Here</h2></header>
      <Book images={images} />
    </div>
  )
}

export const query = graphql`
query jsonFile {
  allImg {
    edges {
      node {
        image
        tags
        description
        date
      }
    }
  }
}
`;

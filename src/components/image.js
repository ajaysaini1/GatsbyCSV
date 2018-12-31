import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Image = (props) => {
  return <StaticQuery
    query={graphql`
      query 
      {
        allImageSharp(limit: 10000) {
          edges{
            node {
              fluid {
                base64
                tracedSVG
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
                originalImg
                originalName
                presentationWidth
                presentationHeight
              }
            }
          }
        }
      }
    `}
    
    render={data =>  {
      const img = data.allImageSharp.edges.find((item) => item.node.fluid.originalName === props.src);
      return <Img fluid={img.node.fluid} /> 
      }
    }
  />

}
export default Image
import React, { Component } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import './index.css'

class Category extends Component {
  render() { 
    const { allSampleGatsbyItemsCsv } = this.props.data;
    return(
      <Layout>
        <SEO title="Category detail" />
        <ul>
          {allSampleGatsbyItemsCsv.edges.map((list, key) => {
            return list.node.slug != null ? <li className="card" key={key}>
              <div className="cardDetails">
                <div className="row">
                  <div className="col-7">
                      <div className="carImage">
                        <Image src={list.node.image} />
                      </div>
                      <div>
                        <p className="cardTilte">{list.node.PostName}</p>
                        <p className="cardDescription">{list.description}</p>
                      </div>
                  </div>
                  <div className="col-3">
                    <div className="txtCenter">
                      <Link className="cardCategory" to={'/item/'+list.node.slug}>
                        View Detail
                      </Link>
                    </div>
                  </div>
                  { list.node.new == 1 ? 
                      <div className="col-1">
                        <div className="rorate-txt">
                          <span>New</span>
                        </div>
                      </div>
                    : null
                  }
                </div>
              </div>
           </li> : null
      })}
      
    </ul>
    <Link to="/">Go back to the homepage</Link>
    </Layout>
    )
  }
}

export default Category

export const pageQuery = graphql`
query CategorySlug($Category: String!) {
  allSampleGatsbyItemsCsv(filter: {Category : {eq: $Category}}) {
    edges {
      node {
        id
        PostName
        Date
        slug
        Category
        Header1
        body1
        new
        image
      }
    }
  }
  ProjectImgs: allImageSharp(limit:1000) {
    edges{
      node{
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
}`
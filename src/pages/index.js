import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import './index.css'

class IndexPage extends Component {

  render() {
    let { allSampleGatsbyItems2Csv} = this.props.data;   
   return (
    <Layout>
       <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
       <ul>
         {allSampleGatsbyItems2Csv.edges.map((list, key) => {
            return list.node.slug != null ? <li className="card" key={key}>
              <div className="cardDetails">
                <div className="row">
                  <div className="col-7">
                    <div className="carImage">
                      <Image src={list.node.image} />
                    </div>

                    <div>
                      <p className="cardTilte">{list.node.CatName}</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="txtCenter">
                      <Link className="cardCategory" to={'/category/'+list.node.slug}>
                        View Post
                      </Link> 
                    </div>        
                  </div>
                </div>
              </div>
            </li> : null
      })}
      
    </ul>
  </Layout>
)}}

export default IndexPage

export const pageQuery = graphql`
{
  allSampleGatsbyItems2Csv(limit:10000) {
    edges {
      node {
        id
        CatName
        slug
        Description
        image
        }
      }
    }
}`
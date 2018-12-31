import React, { Component } from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import {
  FacebookShareButton,
  FacebookIcon,
  GooglePlusShareButton,
  GooglePlusIcon,
  TwitterShareButton,
  TwitterIcon
} from 'react-share';

import Layout from '../components/layout'
import SEO from '../components/seo'
import './index.css'

class Category extends Component {
  render() { 
    const { sampleGatsbyItemsCsv, ImageFile } = this.props.data;
    let facebook = "https://www.facebook.com/BuniyadRealEstate/";
    let googlePlus = "https://plus.google.com/+HeidiAnneMorrisPhotography";
    let twitter = "https://twitter.com/";
    return(
      <Layout>
        <SEO title="Category detail" />
        <div className="row">
          <div className="col-5">
            <Img fluid={ImageFile.childImageSharp.fluid} />
          </div>
          <div className="col-5">
            <h1>{sampleGatsbyItemsCsv.Header1}</h1>
            <h2 style={{color: '#7a7a7a'}}>{sampleGatsbyItemsCsv.PostName}</h2>
            
            <p className="cardTilte">Category - {sampleGatsbyItemsCsv.Category}</p>
            <p className="cardDescription">Date - {sampleGatsbyItemsCsv.Date}</p>
            <p className="cardTilte">{sampleGatsbyItemsCsv.body1}</p>
          <div style={{marginTop: '10%', display: 'flex'}}>
            <FacebookShareButton
              url={facebook}
              quote="Facebook"
              style={{marginRight: '2%'}}
              >
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>

            <GooglePlusShareButton  
              url={googlePlus}
              quote="Facebook"
              style={{marginRight: '2%'}}>
                <GooglePlusIcon size={32} round={true} />
            </GooglePlusShareButton>

            <TwitterShareButton
              url={twitter}
              quote="Twitter"
              style={{marginRight: '2%'}}
              >
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            </div>
          </div>
        </div>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }
}

export default Category

export const pageQuery = graphql`
query ItemSlug($slug: String!, $image: String!) {
  sampleGatsbyItemsCsv(slug: {eq: $slug}) {
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
  ImageFile: file(relativePath: { eq: $image }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}`
const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path');
const CategoryPage = path.resolve('./src/pages/category.js')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          allSampleGatsbyItemsCsv(limit: 1000) {
            edges {
              node {
                slug
                image
                Category
              }
            }
          },
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
          }`).then(result => {
            if (result.errors) {
              reject(result.errors)
            }
            const lists = result.data.allSampleGatsbyItemsCsv.edges;
            _.each(lists, (list, index) => {
              createPage({
                path: '/category/'+list.node.Category,
                component: CategoryPage,
                context: {
                  Category: list.node.Category
                }
              })
              createPage({
                path: '/item/'+list.node.slug,
                component: path.resolve('./src/pages/item.js'),
                context: {
                  slug: list.node.slug,
                  image: list.node.image
                }
              })
            })
                
            createPage({
                path: '/',
                component: path.resolve('./src/pages/index.js')
            });
        })
      )
    })
}
import _ from 'lodash'
import axios from 'axios'

const getReactTopicsQuery = `{
  search(query: "topic:react sort:updated-desc", type: REPOSITORY, first: 100){
    repositoryCount,
    repos: edges {
      repo: node {
        ... on Repository {
          name,
          nameWithOwner,
          url,
          stargazerCount,
          repositoryTopics(first: 10) {
            topics: nodes {
              topic {
                name,
                stargazerCount,
              }
            }
          }
        }
      }
    }
  }
}`

export const getReactTopics = async () => {
  try {
    const response = await axios({
      url: process.env.REACT_APP_API_URL,
      method: 'post',
      headers:{
        'Authorization': `bearer ${process.env.REACT_APP_API_TOKEN}`
      },
      data: {
        query: getReactTopicsQuery
      }
    })
    const topics = _.find(response.data, 'search');
    return topics
  } catch(error) {
    console.log('error=> ', error)
  }
}

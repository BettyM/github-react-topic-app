import axios from 'axios'
import { getReactTopics } from '../../services'

jest.mock('axios')

const mockResponseData = jest.fn((success, payload) => {
  return {
    data: {
      result: {
        success,
        payload
      }
    }
  }
})

afterEach(() => {
  axios.get.mockClear()
})

describe('getReactTopics', () => {
  it('fetches successfully data from Github Graphql API', async () => {
    const successHandler = jest.fn()
    const errorHandler = jest.fn()
    const data = mockResponseData(true, {
      search: {
        repositoryCount: 1111,
        repos: []
      },
    })

    // const response = await getReactTopics()
    // expect(response).toEqual(data)
    axios.post.mockImplementationOnce(() => Promise.resolve(data))
    await expect(getReactTopics()).resolves.toEqual(data)
  })
 
  it('gets Bad credentials error from  Github Graphql API', async () => {
    process.env.REACT_APP_API_TOKEN = '1111111111111'
    await expect(getReactTopics()).resolves.toEqual(undefined)
  })
  
})

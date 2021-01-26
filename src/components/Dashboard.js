import React, { useEffect, useState } from 'react'
import { Chip, Grid } from '@material-ui/core'
import DataTable from 'react-data-table-component'
import { getReactTopics } from '../services'

const columns = [
  {
    name: 'NAME',
    selector: 'repo.nameWithOwner',
    sortable: true
  },
  {
    name: 'URL',
    selector: 'repo.url',
    sortable: true
  },
  {
    name: 'STARGAZERS',
    selector: 'repo.stargazerCount',
    sortable: true
  },
]

const Dashboard = () => {
  const [topics, setTopics] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getReactTopics()
      setLoading(false)
      if(data && data.search && data.search.repos) {
        setTopics(data.search.repos)
      }
    }
    setLoading(true)
    fetchData()
  }, [])

  const ExpandableComponent = ( record ) => {
    const repo = record.data && record.data.repo
    const topics = repo.repositoryTopics && repo.repositoryTopics.topics
    if(topics.length > 0) {
      return (
        <div className="topics-container">
          <div className="title">Topics - Stargazers</div>
          <div>
          {topics.map(item => {
            const name = item.topic && item.topic.name
            const count = item.topic.stargazerCount && item.topic.stargazerCount
            const label = name + ' - ' + count
            return (
              <Chip
                className="badge"
                label={label}
                key={item.topic.name}
              />
            )
          })}
          </div>
        </div>
      )
    } else {
      return <div>Not Related topics found</div>
    }
  }

  return(
    <Grid container justify="center">
      <Grid item container xs={12}>
        <DataTable
          columns={columns}
          data={topics}
          dense
          highlightOnHover
          expandableRows
          expandOnRowClicked
          expandableRowsComponent={<ExpandableComponent />}
          fixedHeader
          fixedHeaderScrollHeight="500px"
          pagination
          progressPending={loading}
          responsive={true}
        /> 
      </Grid>
    </Grid>
  )
}

export default Dashboard

import React, { useEffect, useState } from 'react'
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@material-ui/core'
import { getReactTopics } from '../services'

const Dashboard = (data) => {
  const [topics, setTopics] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getReactTopics()
      if(data && data.search && data.search.edges) {
        setTopics(data.search.edges)
      }
    }

    fetchData()
  }, [])

  console.log('topics', topics)
  return(
    <Grid container justify="center">
      <Grid item container xs={12}>
        Hola
      </Grid>
    </Grid>
  )
}

export default Dashboard

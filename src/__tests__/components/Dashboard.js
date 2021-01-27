import * as React from 'react'
import { render, RenderResult } from '@testing-library/react'
import Dashboard from '../../components/Dashboard'

describe('<Dashboard />', () => {

  it('renders <Dashboard /> component', async () => {
    const { container } = render(<Dashboard />)
    expect(container.firstChild).toHaveClass('MuiGrid-container')
  })
  
  it('display Loading test at first', async () => {
    const { container } = render(<Dashboard />)
    expect(container.textContent).toBe("Loading...");
  })

  xit('test', async () => {
    render(<Dashboard />)
    await waitForElementToBeRemoved(() => screen.getByText(/Loading.../i))
    expect(axios.post.toHaveBeenCalledTimes(1))
  })
})


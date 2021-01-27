import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from '../../../components/layout/Footer'

describe('<Footer />', () => {
  it('renders footer text', () => {
    render(<Footer />)
    expect(screen.getByText('Topic Explorer 2021')).toBeInTheDocument()
  })
})

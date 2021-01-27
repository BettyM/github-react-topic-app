import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '../../../components/layout/Header'

describe('<Header />', () => {
  it('renders header title', () => {
    render(<Header />)
    expect(screen.getByText('Github React Topic Explorer')).toBeInTheDocument()
  })
})

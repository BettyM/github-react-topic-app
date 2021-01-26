import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '../../../components/layout/Header'

it('renders welcome message', () => {
  render(<Header />)
  expect(screen.getByText('Github React Topic Explorer')).toBeInTheDocument()
})

import { render, screen } from '@testing-library/react'
import Error from './Error'

describe('Given my URL path is wrong', () => {
  beforeEach(() => {
    render(<Error />)
  })

  test('When the error component is being displayed, Then the 404 title should be present', () => {
    const titleElement = screen.getByText(/404/i)
    expect(titleElement).toBeInTheDocument()
  })

  test('When the error component is being displayed, Then the error message should be present', () => {
    const messageElement = screen.getByText(
      /Oups! La page que vous demandez n'existe pas./i,
    )
    expect(messageElement).toBeInTheDocument()
  })

  test('When the error component is being displayed, Then the home page link should be present and correct', () => {
    const linkElement = screen.getByText(/Retourner sur la page d'accueil/i)
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveAttribute('href', '/')
  })

  test('The error page matches the snapshot', () => {
    const { asFragment } = render(<Error />)
    expect(asFragment()).toMatchSnapshot()
  })
})

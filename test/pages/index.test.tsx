import { render } from '../testUtils'
import Home from '../../src/pages/index'

describe('Home page', () => {
  it.skip('matches snapshot', () => {
    const { asFragment } = render(<Home />, {})
    expect(asFragment).toMatchSnapshot()
  })
})

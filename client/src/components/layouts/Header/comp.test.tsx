import { screen } from '@testing-library/react'
import { Header } from '.'
import { render } from '@test/utils/test-utils'

test('Header should render text (Your Favorite Songs)', () => {
    render(<Header />)

    const text = screen.getByText('Your Favorite Songs')
    expect(text).toBeVisible()
})

// describe('s', () => {
//     it('should', () => {
//         render(<Header />)

//         const text = screen.getByText('Your Favorite Songs')
//         expect(text).toBeVisible()
//     })
// })
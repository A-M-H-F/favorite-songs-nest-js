import { screen } from '@testing-library/react'
import { AppLayout } from '.'
import { render } from '@test/utils/test-utils'

test('Footer should render text (All Rights Reserved.)', () => {
    render(<AppLayout />)

    const text = screen.getByText('All Rights Reserved.')
    expect(text).toBeVisible()
})
import { render } from '@testing-library/react'
import React from 'react'
import { Theme } from '@radix-ui/themes'

export const renderWithApp = (Page: React.ElementType) => {
  return render(
    <Theme>
      <Page />
    </Theme>
  )
}

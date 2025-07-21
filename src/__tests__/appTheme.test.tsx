// src/__tests__/appTheme.test.tsx
import { describe, it, expect } from 'vitest'
import React from 'react'
import { render } from '@testing-library/react'
import App from '~/pages/_app'

describe('App Layout Wrapper', () => {
  it('wraps the app in Radix Theme (via class "radix-theme")', () => {
    const DummyPage = () => <div>Test Page</div>

    const { container } = render(
      <App Component={DummyPage} pageProps={{}} />
    )

    const hasRadixTheme = container.querySelector('[class*="radix-"]')
    expect(hasRadixTheme).toBeTruthy()
  })
})

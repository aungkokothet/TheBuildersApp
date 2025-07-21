import React from "react"
import { describe, it, expect } from 'vitest'
import { renderWithApp } from '../../test/utils/renderPageWithApp'

const pageModules = import.meta.glob('../pages/**/*.tsx', {
  eager: true,
  import: 'default',
})

describe('UI Pages Theme & Shadcn Enforcement', () => {
  const pages = Object.entries(pageModules)

  console.log('📦 Loaded Pages:', pages.map(([f]) => f))

  if (pages.length === 0) {
    it('should load at least one page file', () => {
      throw new Error('No page components found. Check your glob path.')
    })
  }

  pages.forEach(([filePath, PageComponent]) => {
    if (
      filePath.includes('_app') ||
      filePath.includes('_document') ||
      filePath.includes('/api/')
    ) return

    if (!PageComponent) {
      it(`should have a default export in ${filePath}`, () => {
        throw new Error(`No default export found in ${filePath}`)
      })
      return
    }

    describe(`Page: ${filePath}`, () => {
      it('renders inside Radix Theme', () => {
        const { container } = renderWithApp(PageComponent as any)
        const radixRoot = container.querySelector('[class*="radix-"]')
        expect(radixRoot).toBeTruthy()
      })

      it('contains at least one Shadcn component (button/input/textarea/label)', () => {
        const { container } = renderWithApp(PageComponent as any)
        const found =
          container.querySelector('button') ||
          container.querySelector('input') ||
          container.querySelector('textarea') ||
          container.querySelector('label')

        expect(found).toBeTruthy()
      })
    })
  })
})

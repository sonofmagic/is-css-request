import { isCSSRequest, isDirectCSSRequest, isDirectRequest, isModuleCSSRequest } from '@/index'

describe('[Default]', () => {
  it('isCSSRequest common usage', () => {
    expect(isCSSRequest('http://foo.bar/css-file.css')).toBe(true)
    expect(isCSSRequest('some/path/to/a/css-file.css')).toBe(true)
    expect(isCSSRequest('ice/a/preprocessor.scss')).toBe(true)
    expect(isCSSRequest('ice/a/preprocessor.x')).toBe(false)
  })

  it('isModuleCSSRequest common usage', () => {
    expect(isModuleCSSRequest('http://foo.bar/css-file.css')).toBe(false)
    expect(isModuleCSSRequest('some/path/to/a/css-file.css')).toBe(false)
    expect(isModuleCSSRequest('ice/a/preprocessor.scss')).toBe(false)
    expect(isModuleCSSRequest('ice/a/preprocessor.x')).toBe(false)
    expect(isModuleCSSRequest('ice/a/preprocessor.module.scss')).toBe(true)
    expect(isModuleCSSRequest('ice/a/x.module.css')).toBe(true)
  })

  it('isDirectCSSRequest common usage', () => {
    expect(isDirectCSSRequest('http://foo.bar/css-file.css')).toBe(false)
    expect(isDirectCSSRequest('some/path/to/a/css-file.css')).toBe(false)
    expect(isDirectCSSRequest('ice/a/preprocessor.scss')).toBe(false)
    expect(isDirectCSSRequest('ice/a/preprocessor.x')).toBe(false)
    expect(isDirectCSSRequest('ice/a/preprocessor.module.scss')).toBe(false)
    expect(isDirectCSSRequest('ice/a/x.module.css')).toBe(false)
    expect(isDirectCSSRequest('ice/a/x.module.css?direct')).toBe(true)
  })

  it('isDirectRequest common usage', () => {
    expect(isDirectRequest('http://foo.bar/css-file.css')).toBe(false)
    expect(isDirectRequest('some/path/to/a/css-file.css')).toBe(false)
    expect(isDirectRequest('ice/a/preprocessor.scss')).toBe(false)
    expect(isDirectRequest('ice/a/preprocessor.x')).toBe(false)
    expect(isDirectRequest('ice/a/preprocessor.module.scss')).toBe(false)
    expect(isDirectRequest('ice/a/x.module.css')).toBe(false)
    expect(isDirectRequest('ice/a/x.module.css?direct')).toBe(true)
  })
})

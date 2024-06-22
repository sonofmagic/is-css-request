import { PostCssDialectLang, PreprocessLang, PureCssLang } from '@/index'

describe('enum', () => {
  it('default', () => {
    PureCssLang.css
    PreprocessLang.less
    PreprocessLang.sass
    PreprocessLang.scss
    PostCssDialectLang.sss
    expect(PostCssDialectLang).toBeDefined()
    expect(PreprocessLang).toBeDefined()
    expect(PureCssLang).toBeDefined()
  })
})

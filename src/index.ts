import { CSS_LANGS_RE } from './constants'

const cssModuleRE = new RegExp(`\\.module${CSS_LANGS_RE.source}`)
const directRequestRE = /[?&]direct\b/

export enum PreprocessLang {
  less = 'less',
  sass = 'sass',
  scss = 'scss',
  styl = 'styl',
  stylus = 'stylus',
}
export enum PureCssLang {
  css = 'css',
}
export enum PostCssDialectLang {
  sss = 'sugarss',
}

export type CssLang =
  | keyof typeof PureCssLang
  | keyof typeof PreprocessLang
  | keyof typeof PostCssDialectLang

export function isCSSRequest(request: string): boolean {
  return CSS_LANGS_RE.test(request)
}

export function isModuleCSSRequest(request: string): boolean {
  return cssModuleRE.test(request)
}

export function isDirectCSSRequest(request: string): boolean {
  return CSS_LANGS_RE.test(request) && directRequestRE.test(request)
}

export function isDirectRequest(request: string): boolean {
  return directRequestRE.test(request)
}

export {
  CSS_LANGS_RE,
  cssModuleRE,
  directRequestRE,
}

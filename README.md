# is-css-request

Utils for Checking if a path or url points to a CSS request.

## Installation

```bash
npm install --save is-css-request
```

## Usage

### API

```js
// esm
import { isCSSRequest, isModuleCSSRequest } from 'is-css-request'
// or cjs
// const { isCSSRequest, isModuleCSSRequest } = require('is-css-request')

isCSSRequest('http://foo.bar/css-file.css') // => true
isCSSRequest('some/path/to/a/css-file.css') // => true
isCSSRequest('ice/a/preprocessor.scss') // => true
isCSSRequest('ice/a/x.fac') // => false

isModuleCSSRequest('some/path/to/a/css-file.css') // => false
isModuleCSSRequest('some/path/to/a/css-file.module.css') // => true
```

### Enum

```ts
import { PostCssDialectLang, PreprocessLang, PureCssLang } from 'is-css-request'

PureCssLang.css
PreprocessLang.less
PreprocessLang.sass
PreprocessLang.scss
PostCssDialectLang.sss
```

## License

[MIT](./LICENSE)

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

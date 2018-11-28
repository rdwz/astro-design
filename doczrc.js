import { css } from 'docz-plugin-css'

export default {
  hashRouter: true,
  base: '/astro', // TODO: Remove this if we move to a root domain like `astro.magnetis.com.br`.
  plugins: [
    css({
      preprocessor: 'postcss'
    })
  ],
  indexHtml: 'public/docz.html'
}

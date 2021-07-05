const purgecss = [
  '@fullhuman/postcss-purgecss',
  {
    content: ['./pages/**/*.tsx', './components/**/*.tsx'],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
]

module.exports = {
  plugins: [
    'postcss-import',
    'tailwindcss',
    'autoprefixer',
    // Prevent delete ionic-css
    // ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
}

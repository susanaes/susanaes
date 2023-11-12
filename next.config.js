const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    latex: true,
    themeConfig: './theme.config.jsx'
})
   
module.exports = withNextra({
    output: 'export',
    trailingSlash: true,
    distDir: 'docs',
    images: { unoptimized: true }
})

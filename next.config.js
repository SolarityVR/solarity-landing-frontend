module.exports = {
    distDir: 'build',
    exportPathMap: async function(
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
    ) {
        return {
          "/": { page: "/" }
        };
    },
    images: {
        loader: 'imgix',
        path: 'https://example.com/myaccount/',
    },
}
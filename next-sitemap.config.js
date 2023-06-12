/**@type {import('next-sitemap').IConfig} */
const config ={
    siteUrl : 'https://blog5-ysqp.vercel.app/',
    exclude: ['/server-sitemap.xml'],
    robotsTxtOptions: {
        additionalSitemaps: ['https://blog5-ysqp.vercel.app/server-sitemap.xml']
    },
    // outDir: './out',
}
module.exports = config
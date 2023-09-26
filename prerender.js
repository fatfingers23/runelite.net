import fs from 'fs'
import path from 'path'
import mkdirp from 'mkdirp'
import Prerenderer from '@prerenderer/prerenderer'
import JSDOMRenderer from '@prerenderer/renderer-jsdom'
import parseBlog from './src/parse-blog.js'

const posts = fs.readdirSync(path.join('src', '_posts'))
const BUILD_DIR = 'dist'
const routes = [
  '/',
  '/features',
  '/blog',
  '/tag',
  '/tile',
  '/plugin-hub',
  '/verify'
]
  .map(path => ({ path }))
  .concat(
    posts.map(fileName => {
      // Parse blog metadata
      const { id, date } = parseBlog(fileName)
      return {
        path: '/blog/show/' + id,
        lastMod: date.toISOString().slice(0, 10)
      }
    })
  )

const prerenderer = new Prerenderer({
  // Required - The path to the app to prerender. Should have an index.html and any other needed assets.
  staticDir: path.join('./', 'dist'),
  // The plugin that actually renders the page.
  renderer: new JSDOMRenderer(),
  postProcess(renderedRoute) {
    // Replace all http with https urls and localhost to your site url
    renderedRoute.html = renderedRoute.html
      .replace(/http:/i, 'https:')
      .replace(
        /(https:\/\/)?(localhost|127\.0\.0\.1):\d*/i,
        process.env.CI_ENVIRONMENT_URL || ''
      )
  }
})

// Initialize is separate from the constructor for flexibility of integration with build systems.
prerenderer
  .initialize()
  .then(() => {
    // List of routes to render.
    return prerenderer.renderRoutes(routes.map(({ path }) => path))
  })
  .then(renderedRoutes => {
    // renderedRoutes is an array of objects in the format:
    // {
    //   route: String (The route rendered)
    //   html: String (The resulting HTML)
    // }
    renderedRoutes.forEach(renderedRoute => {
      try {
        const outputDir = path.join(BUILD_DIR, renderedRoute.route)
        const outputFile = `${outputDir}/index.html`
        console.log(outputFile)
        mkdirp.sync(outputDir)
        fs.writeFileSync(outputFile, renderedRoute.html.trim())
      } catch (e) {
        console.debug(e)
      }
    })

    // Shut down the file server and renderer.
    return prerenderer.destroy()
  })
  .catch(err => {
    // Shut down the server and renderer.
    console.debug(err)
    return prerenderer.destroy()
    // Handle errors.
  })

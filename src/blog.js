import parseBlog from './parse-blog'
import markdownLoader from './markdown-loader'

const importBlogs = import.meta.glob('./_posts/*.md', { as: 'raw' })
const blogFileNames = Object.keys(importBlogs).sort().reverse()

const blog = blogFileNames.reduce((memo, fileName) => {
  // Parse blog metadata
  const parsed = parseBlog(fileName)

  const resolver = async () => {
    const mapper = md => {
      const parseMarkdown = markdownLoader(md)
      return {
        id: parsed.id,
        date: parsed.date,
        ...parseMarkdown
      }
    }

    return importBlogs[fileName]().then(mapper)
  }

  return memo.set(parsed.id.toLowerCase(), resolver)
}, new Map())

export const getBlog = id => {
  const post = blog.get(id.toLowerCase())

  if (post) {
    return post()
  }

  return Promise.resolve({})
}

export const latest = async () => {
  const values = blog.values()

  for (let value of values) {
    const post = await value()

    if (post.hasOwnProperty('skip') && post.skip) {
      continue
    }

    return post
  }

  return {}
}

export default blog

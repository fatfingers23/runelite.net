import md from 'markdown-it'
import { html5Media } from 'markdown-it-html5-media'
import fm from 'front-matter'
import loaderUtils from 'loader-utils'

export default function (source) {
  let options
  try {
    options = loaderUtils.parseQuery(this.query)
  } catch (e) {
    options = {}
  }
  const frontMatterContext = fm(source)
  const obj = frontMatterContext.attributes
  const parser = md({
    html: true
  }).use(html5Media, {
    videoAttrs:
      'autoPlay=true muted=true loop=true playsInline=true preload="auto"'
  })

  const defaultRender =
    parser.renderer.rules.link_open ||
    ((tokens, idx, options, env, self) =>
      self.renderToken(tokens, idx, options))

  parser.renderer.rules.link_open = function (tokens, idx, options, env, self) {
    tokens[idx].attrPush(['native', ''])
    tokens[idx].attrPush(['rel', 'nofollow'])
    return defaultRender(tokens, idx, options, env, self)
  }

  obj.body = parser.render(frontMatterContext.body, options)
  const matcher = /<img[^>]+src="([^">]+)"/
  const match = obj.body.match(matcher)

  if (match && match.length >= 2) {
    obj.image = match[1]
  }
  return obj
}

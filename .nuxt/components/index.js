export const AuthorCard = () => import('../../components/AuthorCard.vue' /* webpackChunkName: "components/author-card" */).then(c => wrapFunctional(c.default || c))
export const AuthorIntro = () => import('../../components/AuthorIntro.vue' /* webpackChunkName: "components/author-intro" */).then(c => wrapFunctional(c.default || c))
export const BuyMeACoffee = () => import('../../components/BuyMeACoffee.vue' /* webpackChunkName: "components/buy-me-a-coffee" */).then(c => wrapFunctional(c.default || c))
export const Expertise = () => import('../../components/Expertise.vue' /* webpackChunkName: "components/expertise" */).then(c => wrapFunctional(c.default || c))
export const ProjectCard = () => import('../../components/ProjectCard.vue' /* webpackChunkName: "components/project-card" */).then(c => wrapFunctional(c.default || c))
export const TheFooter = () => import('../../components/TheFooter.vue' /* webpackChunkName: "components/the-footer" */).then(c => wrapFunctional(c.default || c))
export const TheHeader = () => import('../../components/TheHeader.vue' /* webpackChunkName: "components/the-header" */).then(c => wrapFunctional(c.default || c))
export const TimeLine = () => import('../../components/TimeLine.vue' /* webpackChunkName: "components/time-line" */).then(c => wrapFunctional(c.default || c))
export const BlogItem = () => import('../../components/blogItem.vue' /* webpackChunkName: "components/blog-item" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}

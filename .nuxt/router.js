import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _299be2f1 = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _38c72266 = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _3f551a7c = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _0c2aca7c = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _56ae63ac = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _1dcd0934 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _3e9643e2 = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _299be2f1,
    children: [{
      path: "/",
      component: _38c72266,
      name: "home"
    }, {
      path: "/login",
      component: _3f551a7c,
      name: "login"
    }, {
      path: "/register",
      component: _3f551a7c,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _0c2aca7c,
      name: "profile"
    }, {
      path: "/settings",
      component: _56ae63ac,
      name: "settings"
    }, {
      path: "/editor",
      component: _1dcd0934,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _3e9643e2,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

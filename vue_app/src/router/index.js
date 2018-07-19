import Vue from 'vue'
import Router from 'vue-router'

// The meta data for your routes
const meta = require('./meta.json')

// Function to create routes
// Is default lazy but can be changed
function route(path, view, meta2 = {}) {
  return {
    path: path,
    meta: Object.assign({}, meta[path], meta2),
    component: load(`pages/${view}-view`)
  }
}

function load(component) {
  return function (resolve) {
    import (`@/${component}.vue`).then(resolve)
  }
}

const generateRoutes = () => {
  let subdomain
  let hostname = typeof location !== 'undefined' ? location.hostname : process.env.hostname
  if (typeof hostname !== 'undefined') subdomain = hostname.split(".").shift()
  switch (subdomain) {
    case 'admin':
      return [{
          path: '/login',
          component: load('pages/admin/login-view'),
          name: 'login'
        },
        {
          path: '/',
          component: load('layouts/admin'),
          children: [
            route('', 'admin/dashboard'),
            route('users', 'admin/users', {
              requiresAuth: true
            }),
            route('users/:id', 'admin/user', {
              requiresAuth: true
            }),
            route('settings', 'admin/settings'),
            route('*', 'admin/404')
          ]
        }
      ]
      break
    default:
      return [{
          path: '/login',
          component: load('pages/web/login-view'),
          name: 'login'
        },
        {
          path: '/',
          component: load('layouts/web'),
          alias: '/projects',
          children: [
            route('inspire', 'inspire'),
            route('welcome', 'welcome'),

            route('', 'web/projects'),
            route('feed', 'web/feed'),
            route('job', 'web/job'),
            route('users', 'web/users'),
            route('job-types', 'web/job-types'),
            route('statistics', 'web/statistics'),
            route('settings', 'web/settings'),
            route('*', 'web/404')
          ]
        },
        {
          path: '*',
          redirect: '/'
        }
      ]
  }
}

Vue.use(Router)

export function createRouter(hostname) {
  const router = new Router({
    base: __dirname,
    mode: 'history',
    scrollBehavior: () => ({
      y: 0
    }),
    routes: generateRoutes(hostname),
    hostname: hostname
  })

  // Send a pageview to Google Analytics
  router.beforeEach((to, from, next) => {
    if (typeof ga !== 'undefined') {
      ga('set', 'page', to.path)
      ga('send', 'pageview')
    }
    next()
  })

  return router
}

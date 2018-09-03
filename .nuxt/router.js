import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _2e3d6b14 = () => import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */).then(m => m.default || m)
const _fe123e6a = () => import('../pages/admin/site/webkerapply.vue' /* webpackChunkName: "pages/admin/site/webkerapply" */).then(m => m.default || m)
const _3d484922 = () => import('../pages/admin/pub/comments.vue' /* webpackChunkName: "pages/admin/pub/comments" */).then(m => m.default || m)
const _68c20761 = () => import('../pages/admin/mem/mems.vue' /* webpackChunkName: "pages/admin/mem/mems" */).then(m => m.default || m)
const _4f5779a0 = () => import('../pages/admin/pub/submits.vue' /* webpackChunkName: "pages/admin/pub/submits" */).then(m => m.default || m)
const _733103c0 = () => import('../pages/weuse.vue' /* webpackChunkName: "pages/weuse" */).then(m => m.default || m)
const _4d44c570 = () => import('../pages/subjects.vue' /* webpackChunkName: "pages/subjects" */).then(m => m.default || m)
const _3ae89bde = () => import('../pages/search.vue' /* webpackChunkName: "pages/search" */).then(m => m.default || m)
const _f5e86834 = () => import('../pages/extension.vue' /* webpackChunkName: "pages/extension" */).then(m => m.default || m)
const _5cc66a51 = () => import('../pages/auth.vue' /* webpackChunkName: "pages/auth" */).then(m => m.default || m)
const _b7e01c88 = () => import('../pages/mem.vue' /* webpackChunkName: "pages/mem" */).then(m => m.default || m)
const _249ac2ac = () => import('../pages/mem/_id/index.vue' /* webpackChunkName: "pages/mem/_id/index" */).then(m => m.default || m)
const _44fdac01 = () => import('../pages/mem/_id/profile.vue' /* webpackChunkName: "pages/mem/_id/profile" */).then(m => m.default || m)
const _4e54a9b6 = () => import('../pages/mem/_id/pubs/comments.vue' /* webpackChunkName: "pages/mem/_id/pubs/comments" */).then(m => m.default || m)
const _088d4210 = () => import('../pages/mem/_id/marks/repos.vue' /* webpackChunkName: "pages/mem/_id/marks/repos" */).then(m => m.default || m)
const _66792c39 = () => import('../pages/score.vue' /* webpackChunkName: "pages/score" */).then(m => m.default || m)
const _2fa68470 = () => import('../pages/site.vue' /* webpackChunkName: "pages/site" */).then(m => m.default || m)
const _7222682e = () => import('../pages/site/link.vue' /* webpackChunkName: "pages/site/link" */).then(m => m.default || m)
const _d62ec5fe = () => import('../pages/site/contact.vue' /* webpackChunkName: "pages/site/contact" */).then(m => m.default || m)
const _2a821c2e = () => import('../pages/site/about.vue' /* webpackChunkName: "pages/site/about" */).then(m => m.default || m)
const _7baf243e = () => import('../pages/site/capa.vue' /* webpackChunkName: "pages/site/capa" */).then(m => m.default || m)
const _b117f916 = () => import('../pages/site/history.vue' /* webpackChunkName: "pages/site/history" */).then(m => m.default || m)
const _4bc37a8a = () => import('../pages/fercard.vue' /* webpackChunkName: "pages/fercard" */).then(m => m.default || m)
const _79e5678a = () => import('../pages/test.vue' /* webpackChunkName: "pages/test" */).then(m => m.default || m)
const _02dbe88f = () => import('../pages/notifications.vue' /* webpackChunkName: "pages/notifications" */).then(m => m.default || m)
const _32168375 = () => import('../pages/releases.vue' /* webpackChunkName: "pages/releases" */).then(m => m.default || m)
const _16aaf6d5 = () => import('../pages/rank.vue' /* webpackChunkName: "pages/rank" */).then(m => m.default || m)
const _e38d6ef8 = () => import('../pages/joinuse.vue' /* webpackChunkName: "pages/joinuse" */).then(m => m.default || m)
const _a584be26 = () => import('../pages/webker.vue' /* webpackChunkName: "pages/webker" */).then(m => m.default || m)
const _4793f0e6 = () => import('../pages/topics.vue' /* webpackChunkName: "pages/topics" */).then(m => m.default || m)
const _dedec494 = () => import('../pages/dayfront.vue' /* webpackChunkName: "pages/dayfront" */).then(m => m.default || m)
const _8f8ba832 = () => import('../pages/topic/new.vue' /* webpackChunkName: "pages/topic/new" */).then(m => m.default || m)
const _090f708f = () => import('../pages/develop/icons.vue' /* webpackChunkName: "pages/develop/icons" */).then(m => m.default || m)
const _7ba7102c = () => import('../pages/repo/new.vue' /* webpackChunkName: "pages/repo/new" */).then(m => m.default || m)
const _b6f751fe = () => import('../pages/topic/_id.vue' /* webpackChunkName: "pages/topic/_id" */).then(m => m.default || m)
const _76eb08ee = () => import('../pages/subject/_name.vue' /* webpackChunkName: "pages/subject/_name" */).then(m => m.default || m)
const _ab8fc594 = () => import('../pages/repo/_owner/_name/index.vue' /* webpackChunkName: "pages/repo/_owner/_name/index" */).then(m => m.default || m)
const _2b76cebb = () => import('../pages/repos/_rootyp/_typcd.vue' /* webpackChunkName: "pages/repos/_rootyp/_typcd" */).then(m => m.default || m)
const _6cdef154 = () => import('../pages/repo/_owner/_name/edit.vue' /* webpackChunkName: "pages/repo/_owner/_name/edit" */).then(m => m.default || m)
const _911c130e = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/admin",
			component: _2e3d6b14,
			name: "admin",
			children: [
				{
					path: "site/webkerapply",
					component: _fe123e6a,
					name: "admin-site-webkerapply"
				},
				{
					path: "pub/comments",
					component: _3d484922,
					name: "admin-pub-comments"
				},
				{
					path: "mem/mems",
					component: _68c20761,
					name: "admin-mem-mems"
				},
				{
					path: "pub/submits",
					component: _4f5779a0,
					name: "admin-pub-submits"
				}
			]
		},
		{
			path: "/weuse",
			component: _733103c0,
			name: "weuse"
		},
		{
			path: "/subjects",
			component: _4d44c570,
			name: "subjects"
		},
		{
			path: "/search",
			component: _3ae89bde,
			name: "search"
		},
		{
			path: "/extension",
			component: _f5e86834,
			name: "extension"
		},
		{
			path: "/auth",
			component: _5cc66a51,
			name: "auth"
		},
		{
			path: "/mem",
			component: _b7e01c88,
			name: "mem",
			children: [
				{
					path: ":id",
					component: _249ac2ac,
					name: "mem-id"
				},
				{
					path: ":id/profile",
					component: _44fdac01,
					name: "mem-id-profile"
				},
				{
					path: ":id/pubs/comments",
					component: _4e54a9b6,
					name: "mem-id-pubs-comments"
				},
				{
					path: ":id/marks/repos",
					component: _088d4210,
					name: "mem-id-marks-repos"
				}
			]
		},
		{
			path: "/score",
			component: _66792c39,
			name: "score"
		},
		{
			path: "/site",
			component: _2fa68470,
			name: "site",
			children: [
				{
					path: "link",
					component: _7222682e,
					name: "site-link"
				},
				{
					path: "contact",
					component: _d62ec5fe,
					name: "site-contact"
				},
				{
					path: "about",
					component: _2a821c2e,
					name: "site-about"
				},
				{
					path: "capa",
					component: _7baf243e,
					name: "site-capa"
				},
				{
					path: "history",
					component: _b117f916,
					name: "site-history"
				}
			]
		},
		{
			path: "/fercard",
			component: _4bc37a8a,
			name: "fercard"
		},
		{
			path: "/test",
			component: _79e5678a,
			name: "test"
		},
		{
			path: "/notifications",
			component: _02dbe88f,
			name: "notifications"
		},
		{
			path: "/releases",
			component: _32168375,
			name: "releases"
		},
		{
			path: "/rank",
			component: _16aaf6d5,
			name: "rank"
		},
		{
			path: "/joinuse",
			component: _e38d6ef8,
			name: "joinuse"
		},
		{
			path: "/webker",
			component: _a584be26,
			name: "webker"
		},
		{
			path: "/topics",
			component: _4793f0e6,
			name: "topics"
		},
		{
			path: "/dayfront",
			component: _dedec494,
			name: "dayfront"
		},
		{
			path: "/topic/new",
			component: _8f8ba832,
			name: "topic-new"
		},
		{
			path: "/develop/icons",
			component: _090f708f,
			name: "develop-icons"
		},
		{
			path: "/repo/new",
			component: _7ba7102c,
			name: "repo-new"
		},
		{
			path: "/topic/:id?",
			component: _b6f751fe,
			name: "topic-id"
		},
		{
			path: "/subject/:name?",
			component: _76eb08ee,
			name: "subject-name"
		},
		{
			path: "/repo/:owner?/:name?",
			component: _ab8fc594,
			name: "repo-owner-name"
		},
		{
			path: "/repos/:rootyp?/:typcd?",
			component: _2b76cebb,
			name: "repos-rootyp-typcd"
		},
		{
			path: "/repo/:owner?/:name?/edit",
			component: _6cdef154,
			name: "repo-owner-name-edit"
		},
		{
			path: "/",
			component: _911c130e,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}

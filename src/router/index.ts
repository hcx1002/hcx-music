import { createRouter, createWebHistory } from 'vue-router';
import { Pages } from './pages'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: Pages.home,
      component: () => import("@/views/HomeIndex.vue"),
      redirect: {name: Pages.discover},
      children: [{
        path: 'discover',
        name: 'discover',
        component: () => import("@/views/discover/Discover.vue"),
        meta: {
          menu: 'discover',
          keepAlive: true,
        }
      }, {
        path: 'music',
        name: 'music',
        component: () => import("@/views/music/Music.vue"),
        redirect: {name: 'picked'},
        meta: {
          menu: 'music',
        },
        children: [
          {
            path: 'picked',
            name: 'picked',
            component: () => import("@/views/music/picked/Picked.vue"),
            meta: {
              menu: 'music',
              keepAlive: true,
            }
          },
          {
            path: 'toplist',
            name: 'toplist',
            component: () => import("@/views/music/toplist/TopList.vue"),
            meta: {
              menu: 'music',
            }
          },
          {
            path: 'artist',
            name: 'artist',
            component: () => import('@/views/music/artist/Artist.vue'),
            meta: {
              menu: 'music',
              title: '歌手',
              keepAlive: true,
            }
          },
          {
            path: Pages.category,
            name: Pages.category,
            component: () => import('@/views/music/category/Category.vue'),
            meta: {
              menu: 'music',
              title: '分类歌单',
              keepAlive: true,
            }
          }
        ]
      }, {
        path: 'video',
        name: 'video',
        component: () => import("@/views/video/NewVideo.vue"),
        meta: {
          menu: 'video',
          keepAlive: true,
        },
        redirect: {name: 'recommend'},
        children: [{
          path: 'recommend',
          name: 'recommend',
          component: () => import("@/views/video/recommend/Recommend.vue"),
          meta: {
            menu: 'video',
            keepAlive: true,
          }
        }, {
          path: 'topList',
          name: 'topList',
          component: () => import("@/views/video/topList/TopList.vue"),
          meta: {
            menu: 'video',
            keepAlive: true,
          }
        }, {
          path: 'videoLibrary',
          name: 'videoLibrary',
          component: () => import("@/views/video/videoLibrary/VideoLibrary.vue"),
          meta: {
            menu: 'video',
            keepAlive: true,
          }
        }]
      },
        {
          path: 'playlist',
          name: 'playlist',
          component: () => import('@/views/playlist/PlayList.vue'),
        },
        {
          path: 'artistDetail',
          name: 'artistDetail',
          component: () => import('@/views/artist/ArtistDetail.vue'),
        },
        {
          path: 'album',
          name: 'album',
          component: () => import('@/views/album/Album.vue'),
        },
        {
          path: 'dj',
          name: 'dj',
          component: () => import("@/views/dj/Dj.vue"),
          meta: {
            menu: 'dj',
            keepAlive: true,
          }
        },
        {
          path: 'search',
          name: 'search',
          component: () => import("@/views/search/Search.vue"),
          meta: {
            menu: 'search',
          }
        },
        {
          path: Pages.mvDetail,
          name: Pages.mvDetail,
          component: () => import('@/views/mv/mvDetail.vue'),
        }]

    }
  ],
});

export default router;

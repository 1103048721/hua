import Vue from 'vue'
import VueRouter from 'vue-router'
import shouYe from './shouye.js'
import wangDian from './wangdian.js'
import zaiJie from './zaijie.js'
import woDe from './wode.js'
import shuKu from './shuku.js'

Vue.use(VueRouter)

const routes = [
	shouYe,
	wangDian,
	zaiJie,
	woDe,
	shuKu,
	{
		path:'/*',
		redirect:'/shouye'
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router

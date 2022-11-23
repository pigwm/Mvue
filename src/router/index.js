import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Now from "../views/home/Nowplay.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
	children:[
		{
			path: "Now",
			component: Now,
			meta:{
				istabbar:true,
				ishead:true
			}
		},
		{
			path: "com",
			component: () => import('../views/home/Comming.vue'),
			meta:{
				istabbar:true,
				ishead:true
			}
		},{
			path: "classic",
			component: () => import('../views/home/classic.vue'),
			meta:{
				istabbar:true,
				ishead:true
			}
		},{
			path: "cinema",
			component: () => import('../views/home/cinema.vue'),
			meta:{
				istabbar:true,
				ishead:true
			}
		},
		{
			path: "/home",
			redirect: "Now",
			
		}
	]
  },
  {
    path: '/vedio',
    name: 'vedio',   
    component: () => import('../views/Vedio.vue'),
	meta:{
		istabbar:true,
		ishead:true
	}
  },
  {
    path: '/vlog',
    name: 'vlog',   
    component: () => import('../views/vlog.vue'),
  	meta:{
  		istabbar:true,
  		ishead:true
  	}
  },
  {
    path: '/qqw',
    name: 'qqw',   
    component: () => import('../views/qqw.vue'),
  	meta:{
  		istabbar:true,
  		ishead:false
  	}
  },
  
  {
    path: '/regidter',
    name: 'regidter',   
    component: () => import('../views/Regidter.vue'),
  	meta:{
  		istabbar:true,
  		ishead:false
  	}
  },
  {
    path: '/login',
    name: 'login',   
    component: () => import('../views/Login.vue'),
  	meta:{
  		istabbar:true,
  		ishead:false
  	}
  },
  {
    path: '/my',
    name: 'my',   
    component: () => import('../views/My.vue'),
  	meta:{
  		istabbar:true,
  		ishead:false,
		isRequery:true
  	}
  },
  {
    path: '/city',
    name: 'city',   
    component: () => import('../views/City.vue'),
	meta:{
		istabbar:true,
		ishead:true
	}
  },
	{
	  path: '/search',
	  name: 'search',   
	  component: () => import('../views/Search.vue'),
	  meta:{
	  	istabbar:false,
		ishead:false
	  }
	},
	{
	  path: "/home/:id",
	  name: 'details',   
	  component: () => import('../views/Details.vue'),
		meta:{
			istabbar:false,
			ishead:true
		}
	},
  {
  	path: "*",
  	redirect: "/home"
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})






export default router

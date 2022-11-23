import Vue from 'vue'
import Vuex from 'vuex'
import http from '@/assets/utils.js'
import axios from 'axios';

import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
	// plugins:[createPersistedState({
	// 	storage:window.localStorage 
	// })],
  state: {
		city:"广州",
		cityId:20,
		SList:[],
		HotList:[],
		Com:[],
		Commimg:[],
		movieIds:[],
		m:[],
		cityList:[],
		cinemalist:[],
		detail:[],
		brand:[],
		arr:[],
		// arr:[{name:"推荐",url:'/asgard/asgardapi/sns/common/feed/channel/list.json?uuid=EDFCAD40489511EDA082D715CB467B8F24B7763BD2DF4C3F9D0D58ECBED94ECE&channelId=4&feedChannelId=0&timestamp=1665717917005&offset=15'},
		// {name:"热片解读",url:'/asgard/asgardapi/sns/common/feed/channel/list.json?uuid=EDFCAD40489511EDA082D715CB467B8F24B7763BD2DF4C3F9D0D58ECBED94ECE&channelId=4&feedChannelId=1331498&timestamp=1665718126354&offset=15'},
		// {name:"新片预告",url:'/asgard/asgardapi/sns/common/feed/channel/list.json?uuid=EDFCAD40489511EDA082D715CB467B8F24B7763BD2DF4C3F9D0D58ECBED94ECE&channelId=4&feedChannelId=1067226&timestamp=1665718142670&offset=15'},
		// {name:"速看电影",url:'asgard/asgardapi/sns/common/feed/channel/list.json?uuid=EDFCAD40489511EDA082D715CB467B8F24B7763BD2DF4C3F9D0D58ECBED94ECE&channelId=4&feedChannelId=1074953&timestamp=1665718156325&offset=15'},
		// {name:"剧集综艺",url:'/asgard/asgardapi/sns/common/feed/channel/list.json?uuid=EDFCAD40489511EDA082D715CB467B8F24B7763BD2DF4C3F9D0D58ECBED94ECE&channelId=4&feedChannelId=1307354&timestamp=1665718170928&offset=15'}],
		vlog:[],
		shortVedio:[],
		show:[],
		len:0
  },
  getters: {
  },
  mutations: {
	  setMoviesList(state,movies){
	  		state.SList = movies;
	  },
	  setHotList(state,c){
		  let {hot,len} = c;
		  state.len = len;
	  		state.HotList = hot;
	  },
	  setComList(state,com){
	  		state.Com = com;
	  },
	  setCommimgList(state,com){
		let [commimg,movieIds] = com;
	  	state.Commimg = commimg;
		state.movieIds = movieIds;
	  },
	  setM(state,a){
		 state.m = a; 
	  },
	  changecityName(state,c){
	  	let [city,cityId] = c;
	  	state.city = city;
	  	state.cityId = cityId;
	  },
	  setcityList(state,citylist){
		  state.cityList = citylist;
	  },
	  setcinemalist(state,cinemalist){
	  	  state.cinemalist = cinemalist;
	  },
	  setDetails(state,detail){
		 state.detail = detail;
	  },
	  setBrand(state,brand){
		 state.brand = brand;
	  },
	  setVedio(state,vlog){
		  // state.vlog = vlog[2];
		 
	  		state.vlog = [
				{name:"推荐",url:vlog[2]},
				{name:"热片解读",url:vlog[3]},
				{name:"新片预告",url:vlog[4]},
				{name:"速看电影",url:vlog[5]},
				{name:"剧集综艺",url:vlog[6]}
			];
	  },
	  setshortVedio(state,shortVedio){
	  		 state.shortVedio = shortVedio;
	  },
	  setShow(state,show){
		   state.show = show;
	  }
  },
  actions: {
	getHotList({commit}){
		 http({
			baseURL: "http://localhost:3000/apw/getHot"
		 }).then(res=>{
			 let len = res.data.length;
			 let hot = res.data.slice(0,10);
			 // console.log(hot)
			commit("setHotList",{hot,len})
		 })
		
	},
	getMoviesList({commit}){
		http({
			baseURL: "http://localhost:3000/apw/getLike"
		}).then(res=>{
			
			commit("setMoviesList",res.data)
		})
	},
	getComList({commit}){
		 http({
			baseURL: "http://localhost:3000/apw/getwish"
		 }).then(res=>{
			 // console.log(res)
			commit("setComList",res.data)
		 })
	},
	 getComimgList({commit}){
	 	 http({
	 		baseURL: `http://localhost:3000/apw/getcom`
	 	 }).then(res=>{	 
			let movieIds = res.data.slice(0,10);
			let timelist = new Set(res.data.slice(0,10).map(item=>item.rt));
			let temp = [];
			let lists = [];
			let list = [];
			 timelist.forEach(t=>{
			 	temp = res.data.slice(0,10).filter(item=>{
			 		return item.rt==t;
			 	})
			 	list.push({
			 		time:t,
			 		movies:temp
			 	})
			 })
			 lists = list;
			commit("setCommimgList",[lists,movieIds]);
	 	 })
	 	
	 }, 
	 getMoviesTotal({commit,state}){
		 let a = 0;
		 let b = 0
		 let m = [];
		 let i = 0;
		 while(b<state.movieIds.length){			 
			 a = a+10;
			 b = a+10;
			 if(a==90){
				 b = 92
			 }
			 // console.log(a,b)
			 let list = state.movieIds.slice(a,b);
			m.push(list);
			
		 }
		commit("setM",m);	
	 },
	 getCityList({commit}){
		http({
			// baseURL:`/api/dianying/cities.json`,
			baseURL:`http://localhost:3000/apw/cities`,
		}).then(res=>{
			// console.log(res.data[1].data.cts);
			let city = [];
			let list = [];
			let temp = res.data;
			for (let i = 65; i < 91; i++) {
				list.push(String.fromCharCode(i));
				
			}
			list.forEach(chat=>{
				temp = res.data.filter(item=>{
					return item.py[0].toUpperCase()==chat;
				})
				if (temp.length>0) {
					city.push({
						type:chat,
						city:temp
					})
				}
			})
			commit("setcityList",city);	
		})
	 },
	 getCinemasList({commit,state}){
		http({
					//  baseURL:`/ajax1/ajax/moreCinemas?movieId=0&day=2022-10-12&offset=0&limit=20&districtId=-1
					// &lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=
					// &updateShowDay=true&reqId=1665574174507
					// &cityId=${state.cityId}&optimus_risk_level=71&optimus_code=10`,
			baseURL:`http://localhost:3000/apw/cinemas?id=${state.cityId}`
		}).then(res=>{
					 // console.log(res.data[0].cinemas.cinemas)
					 commit("setcinemalist",res.data[0].cinemas.cinemas);	
		})
	 },
	 getBrand({commit,state}){
		 http({
				 baseURL:`http://localhost:3000/apw/getfilter`
				 // baseURL:`/ajax1/ajax/filterCinemas?ci=20&optimus_uuid=EDFCAD40489511EDA082D715CB467B8F24B7763BD2DF4C3F9D0D58ECBED94ECE&optimus_risk_level=71&optimus_code=10`
		 }).then(res=>{
				 // console.log(res.data[0].brand.subItems)
				 let b = [];
				 let temp = []
				 res.data[0].brand.subItems.forEach(item=>{
					 temp = {
						 text:item.name,
						 value:item.name
					 }
					b.push(temp); 
				 })
				 commit("setBrand",b);	
		 })
	 },
	 getVedio({commit,state}){
		 let temp = [];
		 // console.log(state.arr)
		 // state.arr.forEach(item=>{
		 // 	http({
		 // 		baseURL:item.url	
		 // 	}).then(res=>{
		 // 		// console.log(res);
		 // 		item.list=res.data.data.feeds;
		 // 		temp.push(item);
		 // 		commit("setVedio",temp);
		 // 	})
		 // })
		 http({
		 	baseURL:`http://localhost:3000/apw/vedio`	
		 }).then(res=>{
		 	// console.log(res);
		 	commit("setVedio",res.data);
		 })
		 
	 },
	 getshortVedio({commit}){
	 	http({
	 	// 	baseURL:`asgard/asgardapi/sns/common/feed/channel/list.json?
			// uuid=EDFCAD40489511EDA082D715CB467B8F24B7763BD2DF4C3F9D0D58ECBED94ECE
			// &channelId=4&feedChannelId=105&timestamp=1665732618736&offset=10`
			baseURL:'http://localhost:3000/apw/vedio'
	 	}).then(res=>{
	 		// console.log(res);
	 		commit("setshortVedio",res.data);
	 	})
	 },
	 getShow({commit}){
		 http({
		 	baseURL:`/maoyansh/myshow/ajax/performances/rob/main?
			uuid=23tu30mcqhqojhzjxl4p3bt2ipfaqdtuw0e1zkz2oe8swwuyvzs1bmv8bsgsvlnv
			&clientType=1&os=1&sellChannel=13&cityId=20&lng=0&lat=0`	
		 }).then(res=>{
		 	// console.log(res.data.data);
		 	commit("setShow",res.data.data);
		 })
	 }
	 
  },
  modules: {
  }
})

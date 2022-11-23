<template>
	<div class="qqw">
		<div class="search-bar">
			<span @click="go()">{{$store.state.city}}<van-icon name="arrow-down" size="16"/></span>
			<van-search v-model="value" placeholder="找明星,演出,场馆" />
		</div>
		<Slide :a="arr"></Slide>
		<div class="title-wrapper">
			<img src="https://obj.pipi.cn/festatic/common/media/1641437249993-today-look.png" alt="">
			<div>更多 ></div>
		</div>
		<ShowSlide></ShowSlide>
		<banner></banner>
		<div class="title">为你推荐</div>
		<div class="content-bg">
			<ul>
				<li v-for="(item,i) in list" :key="i">
					<div class="poseter-wrapper">
						<img :src="item.posterUrl" alt="">
					</div>
					<div class="content-wrapper">
						<p class="title">{{item.name}}</p>
						<p class="time">{{item.showTimeRange}}</p>
						<p class="price"><span>{{parseInt(item.priceRange)}}</span><span>起</span></p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Slide from '@/components/Slide.vue'
	import ShowSlide from '@/components/ShowSlide.vue'
	import banner from '@/components/banner.vue'
	import http from '@/assets/utils.js'
	export default {
	  data() {
	    return {
	      value: '',
		  arr:[{img:'https://img.meituan.net/kylisean/251b917b350e4501f74c806b7a84d33c6442.png@180w_180h_1c_1e',name:'话剧音乐'},
		  {img:'https://img.meituan.net/kylisean/df3b2047e7b119b30fa9e5aeeaa86c2c5389.png@180w_180h_1c_1e',name:'脱口秀'},
		  {img:'https://img.meituan.net/kylisean/6c948edf52e230eb8437af37f554d72e5852.png@180w_180h_1c_1e',name:'休闲展览'},
		  {img:'https://img.meituan.net/kylisean/6d1af5d881e43c937214188f73c776915585.png@180w_180h_1c_1e',name:'亲子艺术'},
		  {img:'https://img.meituan.net/kylisean/af59e1c098cca69c7b09fdecb872cda34380.png@180w_180h_1c_1e',name:'演唱会'},
		  {img:'https://img.meituan.net/kylisean/8680a46c5592da991874fbf5be80bd6e6105.png@180w_180h_1c_1e',name:'音乐会'},
		  {img:'https://img.meituan.net/kylisean/144dff87ac9a7192ba20f31a8f25ec9025610.png@180w_180h_1c_1e',name:'相声'},
		  {img:'https://img.meituan.net/kylisean/bfa0903aeeabd5f7c181704e83b7813f5812.png@180w_180h_1c_1e',name:'舞蹈芭蕾'}],
		  list:[]
		  
	    };
	  },
	  methods:{
		  go(){
		  	 this.$router.push("/city");
		  },
	  },
	  components: {
	  		Slide,
			ShowSlide,
			banner
	  },
	  mounted() {
	  	http({
	  		baseURL:`
	  		/maoyansh/myshow/ajax/performances/0;st=4;p=1;s=20;tft=0?pageSource=1&sellChannel=13&cityId=20&lng=0&lat=0
	  		`
	  	}).then(res=>{
	  		console.log(res.data.data);
			this.list = res.data.data;
	  	})
	  }
	};
</script>

<style lang="scss" scoped>
	.qqw{
		background-color: #F8F8F8;
	}
	.search-bar{
		width: 100%;
		display: flex;
		align-items: center;
		background-color: #fff;
		span{
			display: flex;
			justify-content: center;
			align-items: center;
			flex: 1;
			font-size: 0.3rem;
			font-weight: 700;
			color: #333;
			line-height: 1.375rem;
			text-overflow: ellipsis;
			overflow: hidden;
			white-space: nowrap;
			box-sizing: border-box;
		}
		.van-search{
			flex: 4;
		}
	}
	
	.title-wrapper{
		width: 100%;
		padding: 0.2rem 0.3rem;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		background-color: #fff;
		img{
			width: 1.8rem;
			height: 0.48rem;
		}
		div{
			width: 1rem;
			height: 0.48rem;
			background: rgba(0,0,0,.04);
			border-radius: 0.75rem;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 0.2rem;
			color: #333;
		}
	}
	.title{
		width: 100%;
		color: #333;
		font-size: 0.35rem;
		padding: 0.1rem 0.2rem;
		box-sizing: border-box;
		font-weight: 700;
		margin-top: 0.2rem;
	}
	.content-bg{
		width: 100%;
		ul{
			display: flex;
			justify-content: space-between;
			width: 100%;
			padding: 0 0.2rem;
			box-sizing: border-box;
			flex-wrap: wrap;
			li{
				width: 49%;
				margin-bottom: 0.1rem;
				background-color: #fff;
				.poseter-wrapper{
					width: 100%;
					display: flex;
					img{
						width: 100%;
						height: 100%;
						border-radius: 0.2rem 0.2rem 0 0;
					}
				}
				.content-wrapper{
					width: 100%;
					padding: 0 0.2rem;
					box-sizing: border-box;
					.title{
						padding: 0;
						max-height: 1.8rem;
						margin-top: 0.1rem;
						font-size: .27rem;
						font-weight: 700;
						color: #333;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						text-overflow: ellipsis;
						overflow: hidden;
						word-break: break-all;
					}
					.time{
						font-size: 0.2rem;
						color: #999;
						padding: 0.1rem 0;
						box-sizing: border-box;
					}
					.price{
						font-size: 0.25rem;
						color: #f03d37;
						font-family: DINAlternate-Bold,Roboto-Medium;
						span:first-child{
							font-size: 0.3rem;
							font-weight: 700;
							margin-right: 0.1rem;
						}
					}
				}
			}
		}
	}
</style>
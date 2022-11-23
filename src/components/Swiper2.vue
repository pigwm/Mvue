<template>
	<div class="box">
		<div class="title">近期最受期待</div>
		<div class="actorslide">
			<div class="swiper mySwiper">
			  <div class="swiper-wrapper">
			    <div class="swiper-slide" v-for="item in comslist">
					<div>
						<img :src="item.img" alt="">
						<span class="toggle-wish"></span>
						<span  class="wish-bg"></span>
						<p class="score">{{item.wish}}想看</p>
					</div>
					<span class="movie">{{item.nm}}</span>
					<span class="time">{{item.comingTitle.slice(0,item.comingTitle.indexOf(" "))}}</span>
				</div>			   
			  </div>
			</div>
		</div>
	</div>
</template>

<script>
	import Swiper from "@/assets/swiper-bundle.min.js"
	import Vue from "vue"


	export default{
		 mounted() {
			var swiper = new Swiper(".mySwiper", {
			  slidesPerView: 3.5,
			  spaceBetween: 8,
			  pagination: {
			    el: ".swiper-pagination",
			  },
			});
			this.$store.dispatch("getComList");
		},
		data(){
			return{
			}
		},
		computed:{
			 comslist(){
				 return this.$store.state.Com;
			 } 
		},
	}

</script>

<style lang="scss"  scoped>
	/* 这个分号一定要写，要不会报错 */
	 @import '@/assets/swiper-bundle.min.css';
	html,
	body {
	  position: relative;
	  height: 100%;
	}
	
	body {
	  background: #eee;
	  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
	  font-size: 14px;
	  color: #000;
	  margin: 0;
	  padding: 0;
	}
	.box{
		width: 100vw;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		padding: 12px 15px;
		background-color: #fff;
		margin-bottom: 10px;
		box-sizing: border-box;
		.actorslide{
			width: 100%;
			height: 165px;
		}
		.title{
			width: 100%;
			font-size: 14px;
			color: #333;
			margin: 0 0 12px;
		}
	}
	.swiper {
	  width: 100%;
	  height: 100%;
	}
	
	.swiper-slide {
	  text-align: center;
	  font-size: 18px;
	  background: #fff;
	
	  /* Center slide text vertically */
	  display: -webkit-box;
	  display: -ms-flexbox;
	  display: -webkit-flex;
	  display: flex;
	  flex-direction: column;
	  -webkit-box-pack: center;
	  -ms-flex-pack: center;
	  -webkit-justify-content: center;
	  justify-content: center;
	  -webkit-box-align: center;
	  -ms-flex-align: center;
	  -webkit-align-items: center;
	  align-items: center;
	}
	
	.swiper-slide {
		div{
			position: relative;
			width: 100%;
			height: 2.3rem;
			img {
			  display: block;
			  width: 100%;
			  height: 100%;
			  object-fit: cover;
			}
		}
		
	}
	.wish-bg{
		display: inline-block;
		width: 100%;
		height: 35px;
		position: absolute;
		bottom: 0;
		left: 0;
		background-image: linear-gradient(-180deg,rgba(77,77,77,0),#000);
	}
	// .toggle-wish{
	// 	display: block;
	// 	position: absolute;
	// 	background-image: url("https://obj.pipi.cn/festatic/touchnode/resources/images/dpmmweb/hot-tab/img/base64/notWish.png");
	// }
	.score{
		position: absolute;
		left: 4px;
		bottom: 2px;
		color: #faaf00;
		font-size: 11px;
		font-weight: 600;
		margin: 0;
		span{
			margin-right: 0.15rem;
		}
	}
	.movie{
		width: 95%;
		font-size: 13px;
		color: #222;
		margin: 0 0 3px;
		text-align: left;
		margin-top: 0.2rem;
		margin-left: 0.1rem;
		font-weight: bold;
		text-overflow: ellipsis;
		-webkit-line-clamp: 1;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
	}
	.time{
		text-overflow: ellipsis;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		text-align: left;
		margin-left: 0.1rem;
		width: 100%;
		font-size: .24rem;
		color: #999;
	}
</style>
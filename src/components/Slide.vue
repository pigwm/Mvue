<template>
	<div class="box">
		<div class="actorslide">
			<div class="swiper mySwiper">
			  <div class="swiper-wrapper">
			    <div class="swiper-slide" v-for="item in a">
					<div>
						<img :src="item.img" alt="">
					</div>
					<span slot="movie" class="movie">{{item.name}}</span>
				</div>			   
			  </div>
			</div>
		</div>
	</div>
</template>

<script>
	import Swiper from "@/assets/swiper-bundle.min.js"

	export default{
		props:["a"],
		 mounted() {
			var swiper1 = new Swiper(".mySwiper", {
			  slidesPerView: 5,
			  spaceBetween: 0,
			  pagination: {
			    el: ".swiper-pagination",
			  },
			});
		},
		data(){
			return{
				list:[]
			}
		},
		computed:{
			  
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
		height: 1.5rem;
		width: 100vw;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		background-color: #fff;
		margin-bottom: 10px;
		box-sizing: border-box;
		.actorslide{
			width: 100%;
			// height: 165px;
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
			img {
			 width: 1.2rem;
			 height: 1.2rem;
			}
		}
		
	}
	
	.movie{
		width: 100%;
		font-size: 0.26rem;
		color: #666;
		text-overflow: ellipsis;
		-webkit-line-clamp: 1;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
	}
</style>
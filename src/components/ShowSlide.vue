<template>
	<div class="contain">
		<div class="actorslide">
			<div class="swiper mySwiper2">
			  <div class="swiper-wrapper">
			    <div class="swiper-slide" v-for="item in $store.state.show">
					<div>
						<img :src="item.posterUrl" alt="">
						<span>{{item.cornerDisplayName}}</span>
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
		 mounted() {
			var swiper2 = new Swiper(".mySwiper2", {
			  slidesPerView: 4.2,
			  spaceBetween: 8,
			  pagination: {
			    el: ".swiper-pagination",
			  },
			});
			this.$store.dispatch("getShow");
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
	.contain{
		width: 100vw;
		height: 3.7rem;
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
			height: 100%;
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
			  border-radius: 0.1rem;
			}
			span{
				position: absolute;
				top: 0.1rem;
				right: 0;
				padding: 0.01rem 0.0375rem;
				background: rgba(0,0,0,.6);
				border-radius: 0.08rem;
				font-size: 0.2rem;
				color: #fff;
				transform: scale(0.9);
			}
		}
		
	}
	
	.movie{
		margin-top: 0.1rem;
		width: 100%;
		font-size: 0.26rem;
		color: #333;
		text-overflow: ellipsis;
		-webkit-line-clamp: 2;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		font-weight: 700;
	}
</style>
<template>
	<div class="nowplay">
		<Swiper></Swiper>
		<div class="Play">
			<van-list
			  v-model="loading"
			  :finished="finished"
			  finished-text="没有更多了"
			  @load="onLoad"
			  :immediate-check="false"
			>
				<van-cell v-for="item in list" :key="item.id" >
					<div class="fimg">
						<img :src="item.img" alt="">
					</div>
					<div class="info">
						<p class="title">
							<span>{{item.nm}}</span>
							<span class="img2D" v-if="item.hasOwnProperty('ver') && item.ver.includes('IMAX 2D')">
							</span>
							<span class="img3D" v-if="item.hasOwnProperty('ver')&&item.ver.includes('3D')">
							</span>
							<span class="img2D" v-if="item.hasOwnProperty('version') && item.version.includes('v2d imax')">
							</span>
							<span class="img3D" v-if="item.hasOwnProperty('version')&&item.version.includes('v3d imax')">
							</span>
						</p>
						<p class="sc">观众评<span>{{item.sc}}</span></p>
						<p class="actors">主演:{{item.star}}</p>
						<p>{{item.showInfo}}</p>
					</div>
					<div class="btn">
						<div @click="go(item.id)">
							购买
						</div>
					</div>
				</van-cell>
			</van-list>
		</div>
	</div>
</template>

<script>
	import Swiper from '@/components/Swiper.vue'
	import http from '@/assets/utils.js'
	import axios from 'axios';
	export default {
	  name: 'Nowplay',
	  data(){
		  return{
			hot:[],
			list: [],
			loading: false,
			finished: false,
		  }
	  },
	   methods: {
	      onLoad() {
			  console.log(this.list.length)
			  if (this.list.length == this.$store.state.len) {
			  	this.finished = true;
			  	return 
			  }
				http({
					baseURL:`
					http://localhost:3000/apw/getHot
					`
				}).then(res=>{
					 this.list = [...this.list,...res.data.slice(10,22)];
					 // console.log( this.list.length)
					 this.loading = false;
				})
	      },
		  go(id){
			  console.log(id)
			  this.$router.push({
			    path: `/home/${id}`
			  });
		  }
	    },
	  components: {
		Swiper
	  },
	  mounted() {
		this.$store.dispatch("getHotList");
		this.list = this.$store.state.HotList;
	  }
	}
</script>

<style lang="scss" scoped>
	.nowplay{
		.Play{
			width: 100%;
			.van-cell__value{
				display: flex;
				height: 1.8rem;
			}
			.fimg{
				flex: 1;
				img{
					height: 100%;
				}
			}
			.info{
				flex: 3;
				margin-left: 0.2rem;
				font-size: 0.26rem;
				line-height: 22px;
				.title{
					font-size: .34rem;
					color: #333;
					font-weight: 700;
					padding-right: 0.1rem;
					text-overflow: ellipsis;
					-webkit-line-clamp: 1;
					overflow: hidden;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					padding: 0.01rem 0;
					box-sizing: border-box;
					.img2D,.img3D{
						position: relative;
						top: 0.03rem;
						width: 43px;
						height: 14px;
						display: inline-block;
						background-size: 100% 100%;
						margin-left: 0.1rem;
						
					}
					.img2D{
						background-image: url('https://obj.pipi.cn/festatic/touchnode/resources/images/dpmmweb/hot-tab/img/base64/v2dimax.png');
					}
					.img3D{
						background-image: url('https://obj.pipi.cn/festatic/touchnode/resources/images/dpmmweb/hot-tab/img/base64/v3dimax.png');
					}
				}
				.sc{
					span{
						margin-left: 0.1rem;
						font-weight: 700;
						color: #faaf00;
						font-size: .3rem;
					}
				}
			}
			.btn{
				flex: 1;
				display: flex;
				justify-content: center;
				align-items: center;
				div{
					width: 1.08rem;
					height: 0.56rem;
					display: flex;
					justify-content: center;
					align-items: center;
					box-sizing: border-box;
					background-color: #f03d37;
					color: #fff;
					white-space: nowrap;
					font-size: .26rem;
					font-weight: 500;
					cursor: pointer;
					border-radius: 0.27rem;
				}
			}
		}
	}
</style>
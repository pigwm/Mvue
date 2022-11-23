<template>
	<div class="classic">
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
						
					</p>
					<p class="sc">{{item.enm}}</p>
					<p class="actors">主演:{{item.star}}</p>
					<p>{{item.pubDesc}}</p>
				</div>
				<div class="btn">
					<!-- <div @click="go(item.id)">
						购买
					</div> -->
				</div>
			</van-cell>
		</van-list>
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
			len:0
		  }
	  },
	   methods: {
	      onLoad() {
			  if (this.list.length == this.len) {
			  	this.finished = true;
			  	return 
			  }
				http({
					// baseURL:`/ajax1/ajax/moreClassicList?sortId=1&showType=3&limit=10&offset=20
					// &optimus_uuid=EDFCAD40489511EDA082D715CB467B8F24B7763BD2DF4C3F9D0D58ECBED94ECE
					// &optimus_risk_level=71&optimus_code=10`
					baseURL:'http://localhost:3000/apw/getclassic'
				}).then(res=>{
					 this.list = [...this.list,...res.data.slice(10,20)];
					 this.len = this.list.length;
					 this.loading = false;
					 // console.log(res)
				})		
	      },
		  go(id){
			  console.log(id)
		  }
	    },
	  components: {
		Swiper
	  },
	  mounted() {
		http({
			baseURL:'http://localhost:3000/apw/getclassic'
			// baseURL:"/ajax1/ajax/moreClassicList?sortId=1&showType=3&limit=10&offset=10&optimus_uuid=EDFCAD40489511EDA082D715CB467B8F24B7763BD2DF4C3F9D0D58ECBED94ECE&optimus_risk_level=71&optimus_code=10"
		}).then(res=>{
			// console.log(res.data.slice(0,10))
			 this.list = res.data.slice(0,10);
			 this.loading = false;
		})
		// this.list = this.$store.state.HotList;
	  }
	}
</script>

<style lang="scss" scoped>
	.classic{
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
					text-overflow: ellipsis;
					-webkit-line-clamp: 1;
					overflow: hidden;
					display: -webkit-box;
					-webkit-box-orient: vertical;
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
</style>
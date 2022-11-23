<template>
	<div class="Comming">
		<Swiper></Swiper>
		<div class="Comm">
			<van-list
			  v-model="loading"
			  :finished="finished"
			  finished-text="没有更多了"
			  @load="onLoad"
			  :immediate-check="false"
			>
				<van-cell v-for="(item,index) in list" :key="index"  :title="item.time" >
					<div class="item" v-for="list in item.movies" :key='list.id'>
						<div class="fimg">
							<img :src="list.img" alt="">
						</div>
						<div class="info">
							<p class="title">
								<span>{{list.nm}}</span>
							</p>
							<p class="sc"><span>{{list.wish}}</span><span>人想看</span></p>
							<p class="actors">主演:{{list.star}}</p>
							<p>{{list.rt}} 上映</p>
						</div>
						<div class="btn">
							<div @click="go(list.id)">
								想看
							</div>
						</div>
					</div>
				</van-cell>
			</van-list>
		</div>
	</div>
</template>

<script>
	import Swiper from '@/components/Swiper2.vue'
	import http from '@/assets/utils.js'
	export default {
	  name: 'Nowplay',
	  data(){
		  return{
			hot:[],
			list: [],
			loading: false,
			finished: false,
			movieIds:[],
			timelist:[],
			num:0,
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
				// baseURL: `/ajax1/ajax/moreComingList?token=&movieIds=${this.$store.state.m[this.num++]}
				// &optimus_uuid=EDFCAD40489511EDA082D715CB467B8F24B7763BD2DF4C3F9D0D58ECBED94ECE
				// &optimus_risk_level=71&optimus_code=10`
				baseURL:'http://localhost:3000/apw/getcom'
			}).then(res=>{	 
				let timelist = new Set(res.data.slice(10,20).map(item=>item.rt));
				let temp = [];
				let lists = [];
				let list = [];
				 
				 timelist.forEach(t=>{
				 	temp = res.data.slice(10,20).filter(item=>{
				 		return item.rt==t;
				 	})
				 	list.push({
				 		time:t,
				 		movies:temp
				 	})
				 })
				 lists = list;
				 this.list = [...this.list,...lists];
				 this.len = this.list.length;
				 console.log(timelist)
				  this.loading = false;
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
		this.$store.dispatch("getComimgList");
		this.$store.dispatch("getMoviesTotal");
		this.list = this.$store.state.Commimg;
		// console.log( this.$store.state.movieIds)
	  }
	}
</script>

<style lang="scss" scoped>
	.Comming{
		.van-cell{
			flex-direction: column;
		}
		.Comm{
			width: 100%;
			.van-cell__title{
				padding-bottom: 0.2rem;
				font-size: .32rem;
				color: #333;
			}
			.item{
				width: 100%;
				height: 1.8rem;
				display: flex;
				text-align: left;
				margin-bottom: 0.2rem;
			}
			.fimg{
				flex: 1;
				img{
					width: 100%;
					height: 100%;
				}
			}
			.info{
				flex: 3;
				margin-left: 0.2rem;
				font-size: 0.24rem;
				line-height: 22px;
				color: #666;
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
				}
				.actors{
					-webkit-line-clamp: 1;
					overflow: hidden;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					text-overflow: ellipsis;
				}
				.sc{
					span:first-child{
						font-weight: 700;
						color: #faaf00;
						font-size: .3rem;
					}
					span:last-child{
						font-size: .26rem;
						color: #666;
						margin-left: 0.05rem;
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
					background-color: #FAAF00;
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
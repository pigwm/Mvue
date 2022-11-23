<template>
	<div class="contain">
		<Header></Header>
		<div class="search">
			<form action="/">
			  <van-search
			    v-model="value"
			    show-action
			    placeholder="搜电影,搜影院"
			    @search="onSearch"
			  />
			</form>
		</div>
		<div class="cinema-list"  v-if="value.length>0">
			<ul>
				<li v-for="item in cinemaList" :key="item.id">
					<div class="title">
						<p>{{item.nm}}</p>
						<p><span>{{item.sellPrice}}</span><span>元起</span></p>
					</div>
					<div class="addr">{{item.addr}}</div>
					<div class="icon">
						<span class="refued">退</span>
						<span class="eat">小吃</span>
						<span class="eat">{{item.tag.vipTag}}</span>
						<template v-if="item.tag.hallType.length==2">
							<span class="endrose">{{item.tag.hallType[0]}}</span>
							<span class="endrose">{{item.tag.hallType[1]}}</span>
						</template>
						<template v-if="item.tag.hallType.length==1">
							<span class="endrose">{{item.tag.hallType[0]}}</span>
						</template>
					</div>
					<div class="discount-block">
						<template v-if="item.promotion.cardPromotionTag !=''">
							<img src="https://i.maoyan.com/images/dpmmweb/cinemaList/img/base/base64/card.png" alt="">
							{{item.promotion.cardPromotionTag}}
						</template>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Header from "../components/Head.vue"
	import { Toast } from 'vant';
	export default {
	  data() {
	    return {
			value: '',
	    };
	  },
	  methods: {
	    onSearch(val) {
	         // console.log(this.$store.state.cinemalist)
	    },
		
	  },
	  components:{
	  	Header
	  },
	  computed:{
		 cinemaList(){
			 //·判断当前cinemaList 是否有数据有才直接用·没有就请求getCityList
			 console.log(this.$store.state.cinemalist.filter(item=>item.nm.includes(this.value)))
			 return this.$store.state.cinemalist.length>0 ? this.$store.state.cinemalist.filter(item=>item.nm.includes(this.value)): this.$store.state.cinemalist=this.$store.dispatch("getCinemasList");
		 } 
	  },
	};
</script>

<style lang="scss" scoped>
	.contain{
		height: 100vh;
		background-color: #F5F5F5;
	}
	.search{
		margin-top: 1rem;
	}
	.van-search__action{
		color: #f03d37;
	}
	.van-search{
		background-color: #F5F5F5;
		border-bottom: 0.02rem solid #e5e5e5;
	}
	.van-search__content{
		background-color: #fff;
		border: .02rem solid #e6e6e6;
		border-radius: 0.1rem;
	}
	.cinema-list{
		// padding: 0.4rem 0;
		box-sizing: border-box;
		width: 100vw;
		background-color: #fff;
		ul{
			li{
				display: flex;
				align-items: center;
				flex-direction: column;
				justify-content: space-between;
				border-bottom: 1px solid #ebedf0;
				padding: 0.02rem 0.15rem;
				box-sizing: border-box;
				.title{
					width: 100%;
					display: flex;
					align-items: center;
					justify-content: start;
					p:first-child{
						font-size: .32rem;
						color: #000;
						white-space: nowrap
					}
					p:last-child{
						-webkit-line-clamp: 1;
						overflow: hidden;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						font-size: .32rem;
						span:first-child{
							color: #f03d37;
							font-size: 0.36rem;
						}
						span:last-child{
							font-size: .22rem;
							color: #f03d37;
							margin-left: 0.06rem;
						}
					}
				}
				.addr{
					width: 100%;
					text-overflow: ellipsis;
					-webkit-line-clamp: 1;
					overflow: hidden;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					font-size: .26rem;
					color: #666;
				}
				.icon{
					position: relative;
					width: 100%;
					height: 0.5rem;
					display: flex;
					align-items: center;
					span{
						display: inline-block;
						padding: 0 0.06rem;
						height: 0.3rem;
						line-height: .3rem;
						border-radius: 0.04rem;
						font-size: .17rem;
						margin-left: 0.1rem;
					}
					.refued,.endrose{
						color: #589daf;
						border: 0.02rem solid #589daf;						
					}
					.eat{
						color: #f90;
						border: 0.02rem solid #f90;
					}
				}
			}
		}
	}
	.discount-block{
		color: #999;
		margin-bottom: 0.08rem;
		font-size: .22rem;
		width: 100%;
		margin-bottom: 0.2rem;
		padding: 0.02rem 0;
		box-sizing: border-box;
		img{
			position: relative;
			top: 0.04rem;
			width: 0.3rem;
			height: 0.28rem;
		}
	}
</style>
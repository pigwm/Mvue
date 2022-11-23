<template>
	<div class="contain">
		<div class="recommd">
			<div class="reIcon">
				<img src="https://p0.meituan.net/scarlett/448afce485c1f342895185c2be668fa411803.png@80q" alt="">
			</div>
			<div class="redownload">
				<span>领取50元电影票</span>
				<span>打开App<van-icon name="arrow" /></span>
			</div>
		</div>
		<div class="movie-info">
			<div class="crumbs-nav">
				<a href="/">猫眼电影 > </a>
				<span>{{list.nm}}</span>
			</div>
			<div class="movie-info-top">
				<div class="movie-cover">
					<img src="https://p0.pipi.cn/mmdb/25bfd6ddb53c7e5015d23c5bc24d876c03d41.jpg?imageView2/1/w/300/h/414/q/80" alt="">
					<div class="iconplay">
					</div>
				</div>
				<div class="movie-desc">
					<p class="movie-cn-name">{{list.nm}}</p>
					<p class="movie-en-name">{{list.enm}}</p>
					<p>{{list.cat}}</p>
					<p>{{list.star}}</p>
					<p><span>{{list.pubDesc}}</span>/<span>{{list.dur}}</span></p>
					<div class="btns">
						<div>
							<van-icon name="like" color="white"/>
							<span>想看</span>
						</div>
						<div>
							<van-icon name="star" color="white"/>
							<span>看过</span>
						</div>
					</div>
				</div>
			</div>
			
			<div class="brief-introduction">
				<div class="title">
					<span>简介</span>
					<div><span>展开</span><van-icon name="arrow-down" /></div>
				</div>
				<div class="dra">
					{{list.dra}}
				</div>
			</div>
		</div>
		
		<div class="buy-ticket-btn can-buy">
			<div class="buy-wrapper">
				<img src="https://obj.pipi.cn/festatic/asgard/resources/images/movie/share-icon.png" alt="">
				<a href="">特惠购票</a>
			</div>
			
		</div>
	
	</div>
</template>

<script>
	import http from '@/assets/utils.js'
	import axios from 'axios';
	export default {
		data(){
			return{
				list:[]
			}
		},
	  methods:{
		  go(){
			  this.$router.push("/city");
		  },
	  },
	 created() {
	 	// this.$route 对当前哈希值操作
	 	console.log(this.$route.params.id);
	 	http({
			baseURL:`/hot/ajax/detailmovie?movieId=${this.$route.params.id}`
	 	}).then(res=>{
	 		this.list = res.data.detailMovie;
	 		console.log(res);
	 	})
	 	
	 },
	};
</script>

<style lang="scss" scoped>
	.contain{
		width: 100%;
		height: 2.08rem;
	}
	.recommd{
		display: flex;
		align-items: center;
		justify-content: space-around;
		width: 100%;
		height: 1.2rem;
		background-color: #fff;
		border-bottom: 1px solid #e8e8e8;
		border-top: 1px solid #e8e8e8;
		.reIcon{
			flex: 2;
			text-align: center;
			img{
				width: 1.88rem;
				height: 0.78rem;
			}
		}
		.redownload{
			flex: 4;
			display: flex;
			align-items: center;
			justify-content: end;
			padding-right: 0.15rem;
			box-sizing: border-box;
			span:first-child{
				font-size: 0.28rem;
				font-family: PingFangSC-Regular,Arial,Helvetica,sans-seri;
				font-weight: 620;
				color: #666;
				margin-right: 0.2rem;
			}
			span:last-child{
				font-weight: 700;
				text-align: center;
				font-size: .32rem;
				font-family: PingFangSC-Medium;
				color: #b37e7e;
			}
		}
	}
	.movie-info{
		width: 100%;
		background-color: #664d29;
		padding: 0.42rem 0.32rem;
		color: #fff;
		position: relative;
		box-sizing: border-box;
		.crumbs-nav{
			margin-bottom: 0.3rem;
			font-size: 0.26rem;
			a{
				text-decoration: none;
				color: #ccc;
			}
			span{
				color: #ccc;
			}
		}
		.movie-info-top{
			display: flex;
			justify-content: start;
			align-items: center;
			height: 2.96rem;
			.movie-cover{
				position: relative;
				height: 2.76rem;
				width: 2.4rem;
				img{
					width: 100%;
					height: 100%;
				}
				.iconplay{
					position: absolute;
					height: 0.6rem;
					width: 0.6rem;
					bottom: 0;
					left: 0;
					background-image: url('https://obj.pipi.cn/festatic/asgard/resources/images/movie/poster-play.png');
					background-size: 100% 100%;
				}
			}
			.movie-desc{
				width: 100%;
				height: 2.76rem;
				margin-left: 0.24rem;
				.movie-cn-name{
					font-size: .4rem;
					text-overflow: ellipsis;
					white-space: nowrap;
					overflow: hidden;
					font-weight: 700;
					margin-bottom: 0.2rem;
				}
				p:not(:first-child){
					font-size: .24rem;
					opacity: .6;
					text-overflow: ellipsis;
					white-space: nowrap;
					overflow: hidden;
					color: #fff;
					padding: 0.02rem 0;
					box-sizing: border-box;
				}
				.btns{
					width: 100%;
					 display: flex;
					 justify-content: space-between;
					div{
						display: flex;
						justify-content: center;
						align-items: center;
						background: hsla(0,0%,100%,.35);
						box-shadow: 0 0.02rem 0.08rem 0 rgb(0 0 0 / 10%);
						border-radius: 0.08rem;
						font-size: .28rem;
						width: 47.61904762%;
						height: 0.6rem;
						color: #fff;
						span{
							margin-left: 0.05rem;
						}
					}
				}
			}
		}
		.brief-introduction{
			width: 100%;
			margin-top: 0.5rem;
			.title{
				display: flex;
				justify-content: space-between;
				span{
					font-size: .3rem;
				}
				div{
					font-size: .24rem;
					opacity: .6;
					color: #fff;
					width: 0.9rem;
					
				}
			}
			.dra{
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 3;
				text-overflow: ellipsis;
				overflow: hidden;
				margin: 0.14rem 0;
				font-size: .3rem;
				line-height: .52rem;
			}
		}
	}
	.buy-ticket-btn{
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 1.2rem;
		background-color: #fff;
		border-top-left-radius: 0.1rem;
		border-top-right-radius: 0.1rem;
		overflow: hidden;
		.buy-wrapper{
			display: flex;
			width: 100%;
			height: 100%;
			align-items: center;
			img{
				margin-left: 0.48rem;
				margin-right: 0.6rem;
				width: 0.38rem;
				height: 0.38rem;
			}
			a{
				flex: 1;
				height: 0.88rem;
				background-image: linear-gradient(-90deg,#fb3333,#ff5269);
				box-shadow: 0 0.06rem 0.12rem 0 rgb(251 51 51 / 30%);
				border-radius: 0.5rem;
				font-size: .34rem;
				color: #fff;
				text-align: center;
				line-height: .88rem;
				margin: 0 0.2rem;
			}
		}
	}
	
	
</style>
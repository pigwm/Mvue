<template>
	<div class="navbar">
		<div class="recommd">
			<div class="reIcon">
				<img src="https://p0.meituan.net/scarlett/448afce485c1f342895185c2be668fa411803.png@80q" alt="">
			</div>
			<div class="redownload">
				<span>发现最新最热电影</span>
				<span>打开App<van-icon name="arrow" /></span>
			</div>
		</div>
		<div class="nav">
			<div class="city" @click="go()">{{$store.state.city}}<van-icon name="arrow-down" /></div>
			<div class="tab">
				<ul>
					<li><router-link to="/home/Now" active-class="selected">热映</router-link></li>
					<li><router-link to="/home/cinema" active-class="selected">影院</router-link></li>
					<li><router-link to="/home/com" active-class="selected">待映</router-link></li>
					<li><router-link to="/home/classic" active-class="selected">经典电影</router-link></li>
				</ul>
			</div>
			<div class="search" @click="search()">
				<img src="https://obj.pipi.cn/festatic/touchnode/resources/images/dpmmweb/component/index/img/base64/search-red.png" alt="">
			</div>
		</div>
	</div>
</template>

<script>
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
		 search(){
			 this.$router.push("/search");
		 }
		  
	  },
	  mounted() {
	
	  }
	};
</script>

<style lang="scss" scoped>
	.navbar{
		position: sticky;
		top: 50px;
		width: 100%;
		height: 2.08rem;	
		z-index: 12;
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
		.nav{
			display: flex;
			width: 100%;
			height: 0.9rem;
			justify-content: center;
			background-color: #fff;
			border-bottom: 0.02rem solid #e6e6e6;
			.city{
				flex: 2;
				display: flex;
				align-items: center;
				font-size: 0.3rem;
				color: #666;
				width: 1rem;
				height: 0.9rem;
				padding-left: 0.3rem;
			}
			.tab{
				flex: 5;
				height: 100%;
				ul{
					height: 100%;
					display: flex;
					align-items: center;
					font-size: 0.3rem;
					li{
						padding: 0 0.12rem;
						height: 100%;
						display: flex;
						align-items: center;
						a{
							position: relative;
							color: #666;
							height: 100%;
							display: flex;
							align-items: center;
							font-weight: 700;
						}
						
					}
				}
			}
			.search{
				flex: 1;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				img{
					width: 0.4rem;
					height: 0.4rem;
				}
			}
		}
	}
	.selected{
		color: #333;
		font-size: 0.34rem;
		&::after{
			content: "";
			display: block;
			position: absolute;
			bottom: 0.02rem;
			left: 50%;
			transform: translateX(-50%);
			width: 5.33333333vw;
			border-radius: 0.02rem;
			height: 0.06rem;
			background-color: #f03d37;
			animation: silde 0.2s;
		}
	}
	@keyframes silde{
		0%{
			left: 0;
		}
		100%{
			left: 50%;
			transform: translateX(-50%);
		}
	}
</style>
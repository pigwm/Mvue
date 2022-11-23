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
		
		  
	  },
	};
</script>

<style lang="scss" scoped>
	.navbar{
		position: relative;
		top: 0px;
		width: 100%;
		height: 1.2rem;	
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
	}	
</style>
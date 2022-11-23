<template>
	<div class="head">
		<van-nav-bar title="猫眼电影" left-text="" @click-right="onShow()">
		  <template #right >
			 <img src="https://p0.meituan.net/scarlett/f05f61e7a8f3f45fd071c068d7a26870356.png" alt="">
		  </template>
		</van-nav-bar>
		<div class="nav-list" v-show="showPopover">
			<ul>
				<li>首页</li>
				<li>榜单</li>
				<li>热点</li>
				<li>商城</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import { Toast } from 'vant';
	
	export default{
		name:'Header',
		data(){
			return{
				showPopover: false,
			}
		},
	  methods: {
	    onShow() {
	      this.showPopover = !this.showPopover;
	    }
	  },
	}
</script>

<style lang="scss" scoped>
	.head{
		height: 1rem;
		position: relative;
		z-index: 22;
		.van-nav-bar{
			height: 1rem;
			background-color: #E54847;
			img{
				width: 0.34rem;
				height: 0.32rem;
			}
		}
		::v-deep .van-nav-bar__title{
			color: white;
			font-size: 0.36rem;
			
		}
		.nav-list{
			position: absolute;
			top: 0.85rem;
			right: 0.24rem;
			width: 2.2rem;
			z-index: 10;
			background-color: #fff;
			box-shadow: 0 0.06rem 0.18rem 0 rgb(0 0 0 / 10%);
			ul{
				width: 100%;
				font-size: 0.3rem;
				li{
					height: 0.91rem;
					text-align: center;
					line-height: 0.91rem;
					border-bottom: 0.02rem solid #f0f0f0;
					color: #333;
				}
			}
		}
	}
	
</style>
<template>
	<div>
		<Logo></Logo>
		<Header></Header>
		<div class="short-videos-list">
			<ul>
				<li v-for="(item,index) in list" :key="index">
					<img :src="item.images[0].url" alt="">
					<div class="title">{{item.title}}</div>
					<div class="video-info">
						<div>
							<img :src="item.user.avatarurl" alt="">
							<span>{{item.user.nickName}}</span>
						</div>
						<div>
							<img src="https://p1.meituan.net/moviemachine/5377c2c03dacf20b6e286e3e72dd57911272.png@80q" alt="">
							<span>{{item.shareCount}}</span>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Header from '@/components/Header.vue'
	import Logo from '@/components/Logo.vue'
	export default{
		data(){
			return{
				list:[]
			}
		},
		components:{
			Header,
			Logo
		},
		mounted() {
			this.$store.dispatch("getshortVedio");
			this.list = this.$store.state.shortVedio[7].data.feeds;
			// console.log(this.list)
		}
	}
</script>

<style lang="scss" scoped>
	.short-videos-list{
		width: 100%;
		ul{
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			li{
				position: relative;
				width: 49.5%;
				margin-bottom: 0.05rem;
				height: 6rem;
				// background-color: aqua;
				overflow: hidden;
				img{
					width: 100%;
					height: 100%;
				}
				.title{
					width: 3.4rem;
					padding: 0 0.16rem;
					position: absolute;
					color: #fff;
					font-size: .3rem;
					line-height: .42rem;
					bottom: 0.82rem;
					text-shadow: 0 0 3px rgb(0 0 0 / 30%);
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					overflow: hidden;
					box-sizing: border-box;
				}
				.video-info{
					display: flex;
					justify-content: space-between;
					align-items: center;
					bottom: 0.28rem;
					font-size: .26rem;
					width: 100%;
					padding: 0 0.16rem;
					position: absolute;
					color: #fff;
					box-sizing: border-box;
					div{
						display: flex;
						align-items: center;
					}
					img{
						position: relative;
						opacity: .9;
						border: 0 solid rgba(42,42,42,.05);
						border-radius: 50%;
						width: 0.36rem;
						height: 0.36rem;
						margin-right: 0.1rem;
					}
				}
			}
		}
	}
</style>
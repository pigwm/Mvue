<template>
	<div>
		<Logo></Logo>
		<Header></Header>
		<div>
			<van-tabs v-model="active"  @click="onClick">
			   <van-tab v-for="(item,index) in list" :title="item.name" :name="index">
					<ul class="vlog">
						<li v-for="(t,i) in item.url.data.feeds">
							<div class="videoplayer">
								<img :src="t.images[0].url" alt="">
								<p class="title">{{t.title}}</p>
								<div class="play-but"></div>
							</div>
							<div class="video-info">
								<div class="user">
									<img  v-lazy="t.user.avatarurl" />
									<!-- <img :src="" alt=""> -->
									<span>{{t.user.nickName}}</span>
								</div>
								<div class="info">
									<div>
										<img src="https://obj.pipi.cn/festatic/asgard/resources/images/media/video-praise.png" alt="">
										<span>{{t.upCount}}</span>
									</div>
									<div>
										<img src="https://obj.pipi.cn/festatic/asgard/resources/images/media/video-comment.png" alt="">
										<span>{{t.shareInfo.channel}}</span>
									</div>
									<div>
										<img src="https://obj.pipi.cn/festatic/asgard/resources/images/media/video-share.png" alt="">
									</div>
								</div>
							</div>
						</li>
					</ul>
			    </van-tab>
			</van-tabs>
		</div>
	</div>
</template>

<script>
import Header from '@/components/Header.vue'
import Logo from '@/components/Logo.vue'
import { Toast } from 'vant';
import http from '@/assets/utils.js'
		
export default {
	data(){
		return{
			active:"",
			list:[],
		}
	},
	methods:{
	 onClick(name, title) {
		  Toast(name);
		  // console.log(this.list)
		},
	},
	mounted() {
		this.$store.dispatch("getVedio");
		this.list = this.$store.state.vlog;
		// console.log(this.list);
		
	},
  components: {
	 Header,
	 Logo
  }
}
</script>

<style lang="scss" scoped>
	.vlog{
		width: 100vw;
		li{
			width: 100%;
			margin-bottom: 0.12rem;
			.videoplayer{
				position: relative;
				width: 100%;
				img{
					width: 100%;
				}
				.title{
					position: absolute;
					top: 0;
					font-size: .34rem;
					color: #fff;
					font-family: PingFangSC-Medium,serif;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					text-overflow: ellipsis;
					word-wrap: break-word;
					word-break: break-all;
					overflow: hidden;
					margin: 0.18rem 0.3rem 0.38rem;
					text-shadow: 0 0 3px rgb(0 0 0 / 30%);
				}
				.play-but{
					z-index: 10;
					position: absolute;
					left: 50%;
					top: 50%;
					width: 1.16rem;
					height: 1.16rem;
					margin-left: -0.58rem;
					margin-top: -0.58rem;
					background-image: url(https://obj.pipi.cn/festatic/asgard/resources/images/media/video-btn-play.png);
					background-size: contain;
				}
			}
			.video-info{
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 0.92rem;
				background-color: #fff;
				padding: 0 0.3rem;
				box-sizing: border-box;
				.user{
					display: flex;
					align-items: center;
					img{
						width: 0.44rem;
						height: 0.44rem;
						border-radius: 0.22rem;
					}
					span{
						margin-left: 0.16rem;
						font-size: .28rem;
						color: #666;
					}
				}
				.info{
					display: flex;
					justify-content: space-between;
					align-items: center;
					div{
						display: flex;
						justify-content: space-between;
						align-items: center;
						height: 35px;
						img{
							width: 0.36rem;
							height: 0.36rem;
							padding-left: 0.15rem;
							padding-right: 0.15rem;
							margin-right: 0.15rem;
						}
						span{
							font-size: .24rem;
							color: #666;
						}
					}
					
				}
			}
		}
	}
</style>
<template>
	<div class="tabbar">
		
		<van-tabbar route active-color="#f03d37" inactive-color="#696969">
		  <van-tabbar-item replace to="/home" icon="play-circle-o">电影/影院</van-tabbar-item>		  
		  <van-tabbar-item replace to="/vedio" icon="tv-o">视频</van-tabbar-item>
		  <van-tabbar-item replace to="/vlog" icon="video-o">小视频</van-tabbar-item>
		  <van-tabbar-item replace to="/qqw" icon="coupon-o">演出</van-tabbar-item>
		  <van-tabbar-item replace to="/my" icon="manager-o">我的</van-tabbar-item>
		</van-tabbar>
		
	</div>
</template>

<script>
	export default{
		// 注册前置守卫  前置拦截
		
	}
	
</script>

<style lang="scss" scoped>
	.tabbar{
		position: relative;
		z-index: 100;
	}
</style>
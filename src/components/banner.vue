<template>
	<div class="banner">
		<van-swipe :autoplay="3000" lazy-render>
		  <van-swipe-item v-for="image in images" :key="image">
		    <img :src="image" />
		  </van-swipe-item>
		</van-swipe>
	</div>
</template>

<script>
	export default {
	  setup() {
	    const images = [
	      'https://img.meituan.net/kylisean/4badaabcda65e6509a7702422c545b5f113560.jpg@1035w_180h_1c_1e',
	      'https://img.meituan.net/kylisean/7fe3b434408b1b16de5d840857825ca5183661.jpg@1035w_180h_1c_1e',
		  'https://img.meituan.net/kylisean/f1152441bb750584c9d159fdb3c4e79b134204.jpg@1035w_180h_1c_1e',
		  'https://img.meituan.net/kylisean/913cc4102868b6969065ad214163289615657.jpg@1035w_180h_1c_1e',
		  'https://img.meituan.net/kylisean/8e80956c7722dedd66a77832c2a5c8b7204147.jpg@1035w_180h_1c_1e'
	    ];
	    return { images };
	  },
	};
</script>

<style lang="scss" scoped>
	.banner{
		width: 100%;
		height: 1.5rem;
		padding: 0.1rem 0.3rem;
		box-sizing: border-box;
		
		.van-swipe{
			width: 100%;
			height: 100%;
			img{
				width: 100%;
				height: 100%;
				border-radius: 0.1rem;
			}
		}
	}
	 .my-swipe .van-swipe-item {
	    color: #fff;
	    font-size: 20px;
	    line-height: 150px;
	    text-align: center;
	    background-color: #39a9ed;
	  }
</style>
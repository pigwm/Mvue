<template>
	<div>
		<van-nav-bar title="猫眼电影" fixed   @click-left="onClickLeft">
		  <template #left>
		    <van-icon name="arrow-left" size="24" color="white"/>
		  </template>
		</van-nav-bar>
	</div>
</template>

<script>
	export default {
	  data() {
	    return {
	     
	    };
	  },
	  methods: {
	    onClickLeft(){
			 this.$router.push("/home");
		}
	  },
	};
</script>

<style lang="scss" scoped>
	
	.van-nav-bar{
		background-color: #E54847;
		::v-deep .van-nav-bar__title{
			color: white;
			font-size: 0.36rem;
			
		}
	}
</style>
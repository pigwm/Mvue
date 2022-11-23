<template>
	<div>
		<van-dropdown-menu>
		  <van-dropdown-item v-model="value1" :options="option1" :title="value1"/>
		  <van-dropdown-item v-model="value2" :options="option2" :title="value2"/>
		   <van-dropdown-item v-model="value3" :options="option3" :title="value3"/>
		</van-dropdown-menu>
	</div>
</template>

<script>
	export default {
	  data() {
	    return {
	      value1: "全城",
	      value2: '品牌',
		  value3: "特色",
	      option1: [
	        { text: '全部商品', value: 0 },
	        { text: '新款商品', value: 1 },
	        { text: '活动商品', value: 2 },
	      ],
	      option2: [
	        { text: '默认排序', value: 'a' },
	        { text: '好评排序', value: 'b' },
	        { text: '销量排序', value: 'c' },
	      ],
		  option3: [
		    { text: '默认排序', value: 'a' },
		    { text: '好评排序', value: 'b' },
		    { text: '销量排序', value: 'c' },
		  ],
	    };
	  },
		mounted() {
			this.$store.dispatch("getBrand");
			this.option2 = this.$store.state.brand;
		}
	};
</script>

<style>
</style>
<template>
	<div class="App">
		<router-view />
		<tabbar v-if="this.$route.meta.istabbar"></tabbar>
		<!--   -->
	</div>	
</template>

<script>
	import page from '@/views/page.vue'
	import Tabbar from '@/components/Tabbar.vue'
	export default {
	  
	  components:{
	  	page,
			Tabbar
	  }
	};
	
</script>

<style lang="scss">
	*{
		margin: 0;
		padding: 0;
	}
	html{
		font-size: 50px;
	}
	.App{
		margin-bottom: 1.6rem;
	}
</style>

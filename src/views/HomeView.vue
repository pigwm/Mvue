<template>
  <div class="home">
		<Header v-if="this.$route.meta.ishead"></Header>
		<Navbar></Navbar>
		<router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'HomeView',
  components: {
		Header,
		Navbar
  }
}
</script>

<style scoped lang="scss">
	body{
		background-color: #F5F5F5;
	}
	.head{
		position: sticky;
		top: 0;
	}
</style>

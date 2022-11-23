<template>
	<div class="box">
			<div class="location">
				<p class="local">定位城市</p>
				<div>
					<p @click="get(local.nm,local.id)">{{local.nm}}</p>
				</div>
			</div>
			<div class="location">
				<p class="local">最近访问的城市</p>
				<div class="sample">
					<p v-for="list in latelyist" @click="get(list.nm,list.id)">{{list.nm}}</p>
				</div>
			</div>
			<div class="location">
				<p class="local">热门城市</p>
				<div class="sample sam1">
					<p v-for="list in hotcity" @click="get(list.nm,list.id)">{{list.nm}}</p>
				</div>
			</div>
			<van-index-bar :index-list="indexList">
			  <div v-for="list in this.$store.state.cityList">
				  <van-index-anchor :index="list.type" />
				  <van-cell :title="city.nm" v-for="city in list.city" @click="get(city.nm,city.id)" />
			  </div>
			
			</van-index-bar>
	</div>
</template>

<script>
	import http from '@/assets/utils.js'
	export default {
	  data() {
	    return {
	     cityList: [],
		 local:{nm:"广州",id:20},
		 latelyist:[],
		 hotcity:[]
	    };
	  },
	  computed:{
		  indexList(){
			  let cityList = ["定位","最近","热门",...this.$store.state.cityList.map(item=>item.type)]
			return   cityList;
		  }
	  },
	  methods:{
		  get(city,cityId){
			  console.log(cityId)
			 this.$store.commit("changecityName",[city,cityId]);
			  this.$router.back();
		  }
	  },
	  mounted() {
	  	this.$store.dispatch("getCityList");
		this.latelyist = [{nm:"广州",id:20},{nm:"安岳",id:699},{nm:"北京",id:1}];
      this.hotcity = [{nm:"上海",id:10},{nm:"深圳",id:30},{nm:"北京",id:1},
      {nm:"天津",id:40},{nm:"武汉",id:57},{nm:"西安",id:42},{nm:"成都",id:59},
      {nm:"重庆",id:45}];
      }
	};
</script>

<style lang="scss" scoped>
	.box{
		width: 100vw;
		background-color: #EBEBEB;
		overflow-x: hidden;
	}
	::v-deep.van-index-bar__sidebar{
		right: 0.7rem;
	}
	.location{
		width: 100%;
		font-size: .28rem;
		.local{
			width: 100%;
			padding: 0.1rem 0.3rem 0.1rem;
			color: #333;
		}
		div{
			height: 1.1rem;
			background-color: #F5F5F5;
			p{
				position: relative;
				background: #fff;
				width: 1rem;
				height: 0.66rem;
				text-align: center;
				padding: 0 0.4rem;
				display: flex;
				align-items: center;
				justify-content: center;
				top: 0.3rem;
				margin-left: 4%;
				border: 0.02rem solid #e6e6e6;
				border-radius: 0.06rem;
			}
		}
		.sample{
			display: flex;
			flex-wrap: wrap;
			p{
			}
		}
		.sam1{
			height: 3.5rem;
		}
	}
</style>
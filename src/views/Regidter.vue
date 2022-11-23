<template>
	<div class="my">
		<Header></Header>
		<div class="login">
			<van-form @submit="onSubmit" method="post" enctype="multipart/form-data">
			  <van-field
			    v-model="username"
			    name="username"
			    placeholder="请输入账号"
			    :rules="[{ required: true, message: '请输入手机号' }]"
			  />
			  <van-field
			    v-model="password"
			    type="password"
			    name="password"
			    placeholder="请输入密码"
			    :rules="[{ required: true, message: '请输入密码' }]"
			  />
			 
			  <div style="margin: 16px;">
			    <van-button round block type="info" native-type="submit">提交注册</van-button>
			  </div>
			  
			</van-form>
			<div style="margin: 16px;" @click="go">
			  <van-button round block>已有账号,去登录</van-button>
			</div>
		</div>
		<div class="iLoginComp-user-confirm">
			<van-checkbox v-model="checked" checked-color="#ee0a24" icon-size="10px"></van-checkbox>
			<p>
				<span>我已阅读并同意</span>
				<span>《猫眼用户服务协议》</span>
				<span>《隐私政策》</span>
			</p>
		</div>
		<div class="service">
			<span>客服电话：</span>
			<span>1010-5335</span>
		</div>
		<p class="last">未注册的手机号将自动生成新账号</p>
	</div>
</template>

<script>
	import Header from "../components/Head.vue"
	export default {
	  data() {
	    return {
	      username: '',
	      password: '',
		  checked: false,
		  age:"",
		  src:''
	    };
	  },
	  methods: {
	    onSubmit(values) {
		  fetch(`http://localhost:3000/apw/login`,{
			    method:"POST",
			    body:JSON.stringify({
			      username:this.username,
			      password:this.password
			    }),
			    headers:{
			        "Content-Type":"application/json"
			    }
			  }).then(res=>res.json())
			  .then(res=>{
			      if (res.ok) {
					   alert('用户已存在,不能重复注册!')
			      } else{
					  fetch(`http://localhost:3000/apw/redister`,{
					    method:"POST",
					    body:JSON.stringify({
					      username:this.username,
					      password:this.password,
					    }),
					    headers:{
					        "Content-Type":"application/json"
					    }
					  })
					  .then(res=>res.json())
					  .then(res=>{
					      console.log(res);
					      if (res.ok) {
					        alert('注册成功')
					      } 
					  })
				  }
			  })
		 
	    },
		go(){
			 this.$router.push("/login");
		}
	  },
	  components:{
		  Header
	  }
	};
	
</script>

<style lang="scss" scoped>
	.my{
		width: 100vw;
		overflow-y: hidden;
	}
	
	.login{
		margin-top: 2rem;
		.van-button--info{
			background-color: #E54847;
			border: none;
		}
	}
	.iLoginComp-user-confirm{
		width: 100%;
		padding: 0.5rem 0.4rem  0.1rem;
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		p{
			margin-left: 0.1rem;
			font-size: 0.26rem;
			span:nth-of-type(1){
				font-weight: 400;
				color: rgba(0,0,0,.5);
			}
			span:not(:first-child){
				color: #df2d2d;
			}
		}
	}
	.service{
		font-size: 0.26rem;
		text-align: center;
		span:nth-of-type(1){
			font-weight: 400;
			color: rgba(0,0,0,.5);
		}
		span:not(:first-child){
			color: #df2d2d;
		}
	}
	.last{
		font-size: 0.26rem;
		font-weight: 400;
		color: rgba(0,0,0,.5);
		text-align: center;
		margin-top: 0.2rem;
	}
</style>
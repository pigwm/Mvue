<template>
	<div>
		<div class="head">
			<van-nav-bar title="登录"  left-arrow>
			  <template #left>
			    <van-icon name="arrow-left" color="white"/>
			  </template>
			</van-nav-bar>
		</div>
		<div class="login">
			<van-form @submit="onSubmit" method="post" enctype="multipart/form-data">
			  <van-field
			    v-model="username"
			    name="username"
			    placeholder="请输入账号"
			    :rules="[{ required: true, message: '请输入账号' }]"
			  />
			  <van-field
			    v-model="password"
			    type="password"
			    name="password"
			    placeholder="请输入密码"
			    :rules="[{ required: true, message: '请输入密码' }]"
			  />

			  <div style="margin: 16px;">
			    <van-button round block type="info" native-type="submit">登录</van-button>
			  </div>
			  
			</van-form>
			<div style="margin: 16px;" @click="go">
			  <van-button round block>注册</van-button>
			</div>
		</div>
		<van-popup v-model="show">
		  <div class="sv">
			<slide-verify
			  :l="42"
			  :r="10"
			  :w="310"
			  :h="155"
			  slider-text="请拖动滑块完成验证"
			  @success="onSuccess"
			  @fail="onFail"
			  @refresh="onRefresh"
			  :imgs="imgs"
			  :accuracy='5'
			></slide-verify>
		  </div>
		    
		</van-popup>
	</div>
</template>

<script>
	export default {
		data() {
		  return {
		    username: '',
		    password: '',
			checked: false,
			src:'',
			show:false,
			imgs: [
				"https://img2.baidu.com/it/u=3633788373,2592065658&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800",
				"https://img2.baidu.com/it/u=4147884680,3389833900&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
				"https://img2.baidu.com/it/u=962649406,713927692&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
				"https://img2.baidu.com/it/u=4244947304,878295677&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=334",
				"https://img0.baidu.com/it/u=3643895624,2552772604&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=675"
			]

		  };
		},
		methods:{
			onSubmit(values) {
			  this.show = !this.show;
			},
			go(){
				 this.$router.push("/regidter");
			},
			onSuccess() {
			  console.log("成功回调");
			  fetch(`http://localhost:3000/apw/login`,{
			    method:"POST",
			    body:JSON.stringify({
			      username:this.username,
			      password:this.password
			    }),
			    headers:{
			        "Content-Type":"application/json"
			    }
			  })
			  .then(res=>res.json())
			  .then(res=>{
			      // console.log(res.data[0]);
			      if (res.ok) {
			  					  sessionStorage.setItem("token",{
			  					  	username:this.username
			  					  })
			        this.$router.push({path: '/my', query: {data: res.data[0]}});
			      } else {
			        alert('用户不存在,请先注册')
			      }
			  })
			},
			onFail() {
			  console.log("失败回调");
			},
			onRefresh() {
			  console.log("刷新回调");
			},
		},
	  setup() {
	    const onClickLeft = () => history.back();
	    return {
	      onClickLeft,
	    };
	  },
	};
</script>

<style lang="scss" scoped>
	.van-nav-bar{
		background-color: #E54847;
		border: none;
		::v-deep .van-nav-bar__title{
			color: white;
			font-size: 0.36rem;
		}
	}
	.login{
		margin-top: 0.5rem;
		.van-button--info{
			background-color: #E54847;
			border: none;
		}
	}
	.sv{
		padding: 0.5rem 0.8rem;
		font-size: 0.3rem;
	}
</style>
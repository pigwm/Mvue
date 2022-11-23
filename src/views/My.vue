<template>
	<div class="box">
		<div class="my">
			<div class="myimg">
				<van-image
				  round
				  width="1.2rem"
				  height="1.2rem"
				  :src="scr"
				/>
			</div>
			<div class="info">
				<div><span>账号:</span><span>{{user.username}}</span></div>
				<div><span>性别:</span><span>{{user.sex}}</span></div>
				<div><span>年龄:</span><span>{{user.age}}</span></div>
				<div><span>爱好:</span><span>{{user.hobby}}</span></div>
			</div>
			
		</div>
		<div class="edit">
			<van-button icon="edit" type="info" @click="flag = !flag">
			 编辑个人信息
			</van-button>
		</div>
		<div v-show="flag">
			<van-form @submit="onSubmit">
			  <van-field
			    v-model="username"
			    name="username"
			    label="用户名:"
			    placeholder="用户名"
			    :rules="[{ required: true, message: '请填写用户名' }]"
			  />
			  <van-field name="sex" label="单选框">
			    <template #input>
			      <van-radio-group v-model="sex" direction="horizontal">
			        <van-radio name="男">男</van-radio>
			        <van-radio name="女">女</van-radio>
			      </van-radio-group>
			    </template>
			  </van-field>
			  <van-field
			    v-model="age"
			    name="age"
			    label="年龄:"
			    placeholder="年龄"
			    :rules="[{ required: true, message: '请填写年龄' }]"
			  />
			 <van-field name="checkboxGroup" label="爱好">
			   <template #input>
			     <van-checkbox-group v-model="groupChecked" direction="horizontal">
			       <van-checkbox name="游泳" shape="square">游泳</van-checkbox>
			       <van-checkbox name="唱歌" shape="square">唱歌</van-checkbox>
				   <van-checkbox name="跳舞" shape="square">跳舞</van-checkbox>
			     </van-checkbox-group>
			   </template>
			 </van-field>
			 <!-- <van-field name="uploader" label="上传头像">
			    <template #input>
			      <van-uploader v-model="value" :after-read="afterRead" mutiple="mutiple"/>
			    </template>
			  </van-field> -->
			  <div style="margin: 16px;">
			    <van-button round block type="info" native-type="submit">提交</van-button>
			  </div>
			</van-form>
		</div>
		<div class="exit">
			<van-button type="small" @click="exit()">退出</van-button>
		</div>
	</div>
</template>

<script>
	import { ref } from 'vue';
	// let forms = null; //设置公共变量，用来创建 FromData 对象，把文件带到后台
	export default{
		beforeRouteEnter(to,from,next){
			// // 判断当前跳转路径是否需要拦截
			// if (to.meta.isRequery) {
			// 	// 判断是否登录
				
			// } else{
			// 	next();
			// }
			if (sessionStorage.getItem("token")) {
				next();
			} else{
				next('/login');
			}
		},
		data(){
			return{
				user:{},
				scr:require("../assets/5.webp"),
				flag:false,
				username: '',
				age: '',
				sex:'',
				upfileList:[],
				forms:null
			}
		},
		mounted() {
			this.user = this.$route.query.data;
			console.log(this.$route.query.data)
		},
		methods:{
			exit(){
				sessionStorage.removeItem("token");
				this.$router.push({path: '/login'});
			},
			 onSubmit(values) {
			      console.log(values);
				  fetch(`http://localhost:3000/apw/edit`,{
				    method:"POST",
				    body:JSON.stringify({
				      username:values.username,
				      age:values.age,
					  hobby:values.checkboxGroup.join(","),
					  id:this.$route.query.data._id,
					  sex:values.sex
					  // uploader:this.forms.get("file")
				    }),
				    headers:{
				        "Content-Type":"application/json"
				    }
				  })
				  .then(res=>res.json())
				  .then(res=>{
				      if (res.ok) {
				      	Dialog.alert({
				      	  message: '修改成功',
				      	  theme: 'round-button',
				      	}).then(() => {
				      	  // on close
				      	});
				      }
				  })
			},
			afterRead(file){
				this.forms = new FormData();
				this.forms.append("file", file.file);
				console.log(this.forms.get("file"))
			}
		},
		 setup() {
		   const value = ref([
		         
		       ]);
			const checked = ref(false);
			const groupChecked = ref([]);
		
		    return {
		      value, checked,
          groupChecked, 
		    };
		  },
	}
</script>

<style lang="scss" scoped>
	.box{
		position: relative;
		width: 100vw;
		height: 100vh;
	}
	.my{
		
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding: 0.2rem 0.1rem;
		box-sizing: border-box;
		.myimg{
			flex: 1;
			display: flex;
			justify-content: center;
		}
		.info{
			flex: 2;
			font-size: 0.3rem;
		}
		
	}
	.exit{
		position: absolute;
		bottom:1.5rem;
		right: 0.5rem;
	}
	.edit{
		width: 100%;
		padding: 0.2rem 0.5rem;
		box-sizing: border-box;
	}
	.logo{
		width: 100%;
		padding: 0.2rem 0.32rem;
		box-sizing: border-box;
		span{
			font-size: 0.28rem;
			margin-right: 1rem;
		}
	}
	.van-checkbox-group{
		font-size: 0.3rem;
		.van-checkbox{
			margin: 0.2rem;
		}
	}
</style>
<template>
    <div class="login_class">
        <div class="login_content">
            <h1>欢迎登陆</h1>
            <el-input v-model="account" type="text" class="account_class">
                <template slot="prepend">账号</template>
            </el-input>
            <el-input v-model="password" type="password">
                <template slot="prepend">密码</template>
            </el-input>
            <el-button @click="login" type="warning">登陆</el-button>
        </div>
    </div>
</template>
<script>
    import {login} from '@/api/api'

	export default {
        created:function(){
            
		},
		mounted: function() {
		},
		data: function() {
			return{
                account:"",
                password:""
            }
		},
		methods: {
			login:function(){
                let param = {
                    account:this.account,
                    password:this.password
                }
                login(param).then(d =>{
                    if(d.code == this.$responsestatus.success){
                        this.$localStorage.set('X-key', d.result)
                        this.$router.push("/order")
                    }else{
                        this.$message.error(d.message);
                    }
                })
            }
		},
		watch:{
		  	
		},
        components:{

        }
	}
</script>
<style lang="scss">
.login_class{
    position: relative;
    width: 100%;
    height: 100%;
    background: url("../assets/background.jpg") no-repeat center;

    .login_content{

        margin: auto;
        width: 50%;
        height: max-content;
        border-radius: 5px;
        background-color: rgba(0,0,0,0.2);
        top: 0;
        bottom: 0;
        position: absolute;
        left: 0;
        right: 0;
        padding: 20px;
        text-align: center;

        .account_class{
        margin-bottom: 20px;
        }
        h1{
            font-size: 20px;
            margin-bottom: 10px;
        }
        .el-button{
            margin-top: 10px;
            width: 80%;
        }
    }
}
</style>

<template>
	<el-container id="home">
		<el-header>远鹏粮油</el-header>
		<el-container>
			<el-aside width="200px">
				<el-menu
					default-active="1"
					class="el-menu-vertical-demo">
					<el-submenu index="1">
						<template slot="title">
							<p>数据管理</p>
						</template>
						<el-menu-item index="1-1" @click="routerTo('/category')">类别管理</el-menu-item>
						<el-menu-item index="1-2" @click="routerTo('/goods')">商品管理</el-menu-item>
					</el-submenu>
					<el-menu-item index="2" @click="routerTo('/order')">订单管理</el-menu-item>
				</el-menu>
			</el-aside>
			<el-main>
				<router-view class="container"></router-view>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
export default {
	name: 'home',
	components: {},
	data(){
		return{
			
		}
	},
	methods:{
		routerTo(path){
			this.$router.push(path)
		}
	},
	created:function(){
	}
}

</script>

<style lang="scss">
#home{
	.el-header{
		    background-color: #fff;
    		border-bottom: 1px solid #aaa;
			font-size: 22px;
			line-height: 60px;
			text-align: center;
	}
	.el-aside{
		background-color: #fff
	}
}
</style>
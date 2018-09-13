<template>
    <div class="category_class">
        <el-form :inline="true" class="demo-form-inline">
            <el-form-item>
                <el-button type="primary" @click="openDialog(0)">添加</el-button>
            </el-form-item>
        </el-form>
        <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column prop="id" label="id"></el-table-column>
            <el-table-column prop="name" label="类别名称"></el-table-column>
            <el-table-column prop="code" label="CODE"></el-table-column>
            <el-table-column prop="status" label="状态">
                <template  slot-scope="scope">
                    <p>{{scope.row.status | getStatus}}</p>
                </template>
            </el-table-column>
            <el-table-column  label="创建时间">
                <template  slot-scope="scope">
                    <p>{{scope.row.createTime | formatDate}}</p>
                </template>
            </el-table-column>
            <el-table-column  label="操作">
                <template  slot-scope="scope">
                    <el-button type="warning" round @click="openDialog(1,scope.row)" size="mini">编辑</el-button>
                    <el-button type="danger" round @click="remove(scope.row.id)" size="mini">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog :title="title[index]" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="类别名称" :label-width="formLabelWidth">
                    <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="CODE" :label-width="formLabelWidth">
                    <el-input v-model="form.code" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="状态" :label-width="formLabelWidth">
                    <el-select v-model="form.status" placeholder="请选择状态">
                        <el-option label="正常" :value="Number(0)"></el-option>
                        <el-option label="停止售卖" :value="Number(1)"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="addCategory()">确 定</el-button>
            </div>
        </el-dialog>
        
    </div>
</template>
<script>
    import {getCateList,updateCategory,removeCate} from '@/api/api'

	export default {
        created:function(){
            this.loadData()
		},
		mounted: function() {
		},
		data: function() {
			return{
                tableData:[],
                dialogFormVisible:false,
                form:{},
                formLabelWidth:'100px',
                title:["添加类别","编辑类别"],
                index:0
            }
		},
		methods: {
			addCategory:function(){

                let param = {
                    cateId:this.form.id,
                    name:this.form.name,
                    status:this.form.status,
                    code:this.form.code
                }
                updateCategory(param).then(d =>{
                    this.dialogFormVisible = false;
                    if(d.code == this.$responsestatus.success){
                         this.$message.success(d.message);
                        this.loadData()
                    }else{
                        this.$message.error(d.message);
                    }

                })
            },
            openDialog(idx,row){
                this.index = idx
                this.dialogFormVisible = true

                if(idx == 0){
                    this.form = {
                        id:null,
                        name:"",
                        code:"",
                        status:0
                    }
                }

                if(idx == 1){
                    this.form = {
                        id:row.id,
                        name:row.name,
                        code:row.code,
                        status:Number(row.status)
                    }
                }
            },
            loadData(){

                getCateList().then(d =>{
                    if(d.code == this.$responsestatus.success){
                        this.tableData = d.result
                    }else{
                        this.$message.error(d.message);
                    }
                    this.data = d
                })
            },
            remove(id){

                removeCate(id).then(d =>{
                    if(d.code == this.$responsestatus.success){
                        this.$message.success(d.message);
                        this.loadData()
                    }else{
                        this.$message.error(d.message);
                    }
                    this.data = d
                })
            }
            
		},
		watch:{
		  	
		},
        components:{

        },
        filters:{
            getStatus(status){
                switch(status){
                    case 0: return "正常";break;
                    case 1: return "停止售卖";break;
                    default: return "---"
                }
            }
        }
	}
</script>
<style lang="scss">
.category_class{
    
}
</style>

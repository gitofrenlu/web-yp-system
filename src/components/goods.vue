<template>
    <div class="goods_class">
        <el-form :inline="true" class="demo-form-inline">
            <el-form-item label="产品名称">
                <el-input v-model="formInline.name" placeholder="输入产品名称"></el-input>
            </el-form-item>
            <el-form-item label="状态">
                <el-select v-model="formInline.status" placeholder="状态">
                <el-option label="全部" :value="Number(2)"></el-option>
                <el-option label="正常" :value="Number(0)"></el-option>
                <el-option label="停止售卖" :value="Number(1)"></el-option>
                </el-select>
            </el-form-item>
             <el-form-item>
                <el-button type="primary" @click="loadData">搜索</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="openDialog(0)">添加</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="id" label="id"></el-table-column>
            <el-table-column prop="category" label="类别名称"></el-table-column>
            <el-table-column  label="图片">
                <template slot-scope="scope">
                    <img :src="$baseimgurl + scope.row.imgUrl" class="img">
                </template>
            </el-table-column>
            <el-table-column prop="name" label="商品名称"></el-table-column>
            <el-table-column prop="unit" label="单位"></el-table-column>
            <el-table-column prop="size" label="规格"></el-table-column>
            <el-table-column prop="status" label="状态">
                <template  slot-scope="scope">
                    <p>{{scope.row.status | getStatus}}</p>
                </template>
            </el-table-column>
            <el-table-column label="创建时间">
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
                <el-form-item label="名称" :label-width="formLabelWidth">
                    <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="类别" :label-width="formLabelWidth">
                    <el-select v-model="form.cateId">
                        <el-option v-for="cate in cateList" :label="cate.name" :value="cate.id" :key="cate.id"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="单位" :label-width="formLabelWidth">
                    <el-input v-model="form.unit" auto-complete="off" placeholder="袋"></el-input>
                </el-form-item>
                <el-form-item label="规格" :label-width="formLabelWidth">
                    <el-input v-model="form.size" auto-complete="off" placeholder="1kg"></el-input>
                </el-form-item>
                <el-form-item label="状态" :label-width="formLabelWidth">
                    <el-select v-model="form.status" placeholder="请选择状态">
                        <el-option label="正常" :value="Number(0)"></el-option>
                        <el-option label="停止售卖" :value="Number(1)"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="图片" :label-width="formLabelWidth">
                    <el-upload
                    class="avatar-uploader"
                    action=""
                    :show-file-list="false"
                    :auto-upload="false"
                    :on-change="beforeAvatarUpload"
                    v-model="form.file">
                    <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>

            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="addGoods()">确 定</el-button>
            </div>
        </el-dialog>
        
    </div>
</template>
<script>
    import {getCateList,getGoodList,updateGoods,removeGood} from '@/api/api'

	export default {
        created:function(){
            this.loadData()
            this.getCates()
		},
		mounted: function() {
		},
		data: function() {
			return{
                tableData:[

                ],
                dialogFormVisible:false,
                form:{
                    name:"",
                    imgUrl:"",
                    cateId:"",
                    size:"",
                    unit:"",
                    status:0,
                    file:null
                },
                formLabelWidth:'60px',
                title:["添加商品","编辑商品"],
                index:0,
                formInline:{
                    name:"",
                    status:2
                },
                cateList:[]
            }
		},
		methods: {
             beforeAvatarUpload(file) {
                const isJPG = file.raw.type === 'image/jpeg' || file.raw.type === 'image/png';

                if (!isJPG) {
                this.$message.error('上传图片只能是 jpg/png 格式!');
                return
                }
                this.form.imageUrl = file.url
                this.form.file = file.raw
            },
            addGoods:function(){

                let formData = new FormData();
                
                for(let key in this.form){
                    formData.append(key,this.form[key])
                }

                updateGoods(formData).then(d =>{
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
                        id:0,
                        name:"",
                        imgUrl:"",
                        cateId:"",
                        size:"",
                        unit:"",
                        status:0,
                        file:null
                    }
                }

                if(idx == 1){
                    this.form = {
                        id:row.id,
                        name:row.name,
                        imgUrl:this.$baseimgurl+row.imgUrl,
                        cateId:Number(row.cateId),
                        size:row.size,
                        unit:row.unit,
                        status:0,
                        file:null
                    }
                }
            },
            loadData(){

                let param = {
                    status:this.formInline.status,
                    name:this.formInline.name
                }
                getGoodList(param).then(d =>{
                    if(d.code == this.$responsestatus.success){
                        this.tableData = d.result
                    }else{
                        this.$message.error(d.message);
                    }
                })
            },
            getCates(){

                getCateList().then(d =>{
                    if(d.code == this.$responsestatus.success){
                        this.cateList = d.result
                    }else{
                        this.$message.error(d.message);
                    }
                })
            },
            remove(id){
                removeGood(id).then(d =>{
                    if(d.code == this.$responsestatus.success){
                        this.$message.success(d.message);
                        this.loadData()
                    }else{
                        this.$message.error(d.message);
                    }
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
.goods_class{
    .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .img{
    width: 100px;
    height: 100px;
  }
}
</style>

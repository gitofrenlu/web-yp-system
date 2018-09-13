<template>
    <div class="order_class">
        <el-form :inline="true" class="demo-form-inline">
            <el-form-item label="客户昵称">
                <el-input v-model="customerName" placeholder="输入昵称"></el-input>
            </el-form-item>
            <el-form-item label="客户手机号">
                <el-input v-model="mobile" placeholder="输入手机号"></el-input>
            </el-form-item>
            <el-form-item label="状态">
                <el-select v-model="status" placeholder="状态">
                <el-option label="全部" :value="Number(4)"></el-option>
                <el-option label="待处理" :value="Number(0)"></el-option>
                <el-option label="处理中" :value="Number(1)"></el-option>
                <el-option label="已完成" :value="Number(2)"></el-option>
                <el-option label="已取消" :value="Number(3)"></el-option>
                </el-select>
            </el-form-item>
             <el-form-item>
                <el-button type="primary" @click="loadData(1)">搜索</el-button>
            </el-form-item>
        </el-form>
        <el-table
            :data="tableData.list"
            style="width: 100%">
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-table
                        :data="props.row.details"
                        style="width: 100%"
                        size="mini">
                        <el-table-column prop="id" label="ID" width="90"></el-table-column>
                        <el-table-column prop="goodName" label="商品名称" width="90"></el-table-column>
                        <el-table-column prop="standard" label="数量" width="90"></el-table-column>
                        <el-table-column label="状态" width="90">
                            <template  slot-scope="scope">
                                <p :class="'detail_p_'+props.$index+'_'+scope.$index">{{scope.row.status | getStatus}}</p>
                                <el-select :class="['detail_input','detail_input_'+props.$index+'_'+scope.$index]" v-model="scope.row.status" placeholder="请选择状态" size="mini">
                                    <el-option label="正常" value="0"></el-option>
                                    <el-option label="停止售卖" value="1"></el-option>
                                </el-select>
                            </template>
                        </el-table-column>
                        <el-table-column label="价格" width="90">
                            <template  slot-scope="scope">
                                <p :class="'detail_p_'+props.$index+'_'+scope.$index">{{scope.row.price}}</p>
                                <el-input v-model="scope.row.price" :class="['detail_input','detail_input_'+props.$index+'_'+scope.$index]" type="number" auto-complete="off" :min="Number(0)" size="mini"></el-input>
                            </template>
                        </el-table-column>
                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <el-button :class="'detail_p_'+props.$index+'_'+scope.$index" type="primary" icon="el-icon-edit" circle @click="openDialog(2,0,0,0,props.$index,scope.$index)" size="mini"></el-button>
                                <el-button :class="['detail_input','detail_input_'+props.$index+'_'+scope.$index]" type="success" icon="el-icon-check" circle @click="addGoods(scope.row.id,props.$index,scope.$index)" size="mini"></el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </template>
            </el-table-column>
            <el-table-column label="ID" prop="id"></el-table-column>
            <el-table-column label="状态" prop="statusString"></el-table-column>
            <el-table-column label="创建时间" prop="createTime"></el-table-column>
            <el-table-column label="客户昵称" prop="customerName"></el-table-column>
            <el-table-column label="客户手机号" prop="customerMobile"></el-table-column>
            <el-table-column label="客户地址" prop="customerAddress"></el-table-column>
            <el-table-column label="总价" prop="totalPrice"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button type="primary" icon="el-icon-edit" circle @click="openDialog(1,scope.row.id,scope.row.totalPrice,scope.row.status)" size="mini"></el-button>
                    <el-button type="danger" icon="el-icon-delete" circle size="mini" @click="removeOrder(scope.row.id)"></el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination background layout="prev, pager, next" :total="tableData.total" @current-change="loadData"
         :page-size="20"></el-pagination>


         <el-dialog title="修改" :visible.sync="dialogFormVisible">
            <el-form :model="formData">
                <el-form-item label="价格" :label-width="formLabelWidth">
                    <el-input v-model="formData.price" type="number" auto-complete="off" :min="Number(0)"></el-input>
                </el-form-item>
                <el-form-item label="状态" :label-width="formLabelWidth" v-if="type == 2">
                    <el-select v-model="formData.status" placeholder="请选择状态">
                        <el-option label="正常" :value="Number(0)"></el-option>
                        <el-option label="取消商品" :value="Number(1)"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="状态" :label-width="formLabelWidth" v-else>
                    <el-select v-model="formData.status" placeholder="请选择状态">
                        <el-option label="待处理" :value="Number(0)"></el-option>
                        <el-option label="处理中" :value="Number(1)"></el-option>
                        <el-option label="已完成" :value="Number(2)"></el-option>
                        <el-option label="已取消" :value="Number(3)"></el-option>
                    </el-select>
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
    import {getOrders,updateOrderStatus,removeOrder} from '@/api/api'

	export default {
        created:function(){
            this.loadData(1)
		},
		mounted: function() {
		},
		data: function() {
			return{
                tableData:[],
                current:1,
                customerName:"",
                mobile:"",
                status:4,
                formData:{
                    id:null,
                    price:null,
                    status:0
                },
                dialogFormVisible:false,
                type:1,
                formLabelWidth:"60px"
            }
		},
		methods: {
			loadData(current){

                let param = {
                    current:current,
                    customerName:this.customerName,
                    mobile:this.mobile,
                    status:this.status
                }
                
                getOrders(param).then(d =>{
                    if(d.code == this.$responsestatus.success){
                        this.tableData = d.result
                    }else{
                        this.$message.error(d.message);
                    }
                })
            },
            openDialog(type,id,price,status,index1,index2){
                this.type = type

                this.formData = {
                    id:id,
                    price:price,
                    status:Number(status),
                }
                 if(type == 2){
                    $(`.detail_p_${index1}_${index2}`).hide()
                    $(`.detail_input_${index1}_${index2}`).show()
                }
                if(type == 1){
                    this.dialogFormVisible = true
                }
            },
            addGoods(id,index1,index2){
        
                if(this.type == 2){ 
                    this.formData.id = id
                    this.formData.price = this.tableData.list[index1].details[index2].price
                    this.formData.status = this.tableData.list[index1].details[index2].status
                }

                if(isNaN(this.formData.price)){
                    this.$message.error("价格格式输入错误");
                    return
                }

                let param = $.extend(this.formData,{
                    type:this.type
                })

                updateOrderStatus(param).then(d =>{
                    this.dialogFormVisible = false
                    if(d.code == this.$responsestatus.success){
                        this.$message.success(d.message);
                        if(this.type == 1){
                            this.loadData(1)
                        }
                        if(this.type == 2){
                            $(`.detail_p_${index1}_${index2}`).show()
                            $(`.detail_input_${index1}_${index2}`).hide()
                        }
                    }else{
                        this.$message.error(d.message);
                    }
                })
            },
            removeOrder:function(id){

                removeOrder(id).then(d =>{
                    if(d.code == this.$responsestatus.success){
                        this.$message.success(d.message);
                        this.loadData(1)
                    }else{
                        this.$message.error("删除失败");
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
                status = Number(status)
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
.order_class{

    .detail_input{
        display: none;
    }
}

</style>

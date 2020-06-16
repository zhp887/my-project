<template>
    <div>
        <h2>首页</h2>
        <div class="list">
            <!-- 编程式导航（建议的写法） -->
            <div v-for='item in goods' :key='item.id' @click='skip(item.id)'>
                <span v-text='item.id'></span>
                <span>-</span>
                <span v-text='item.name'></span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
     data:function(){
         return{
            goods:[
                {id:1,name:'笔记本',price:'5000'},
                {id:2,name:'鼠标',price:'100'},
                {id:3,name:'键盘',price:'300'},
                {id:4,name:'耳机',price:'200'},
            ]
         }
    },
    methods:{
        skip(id){
            this.$router.push('/detail/'+id)
        }
    }

}
</script>
<style lang="css" scoped>
.list{
    display: flex;
    height: 30px;
}
.list>div{
    flex: 1;
    border: 1px solid #ccc;
    text-align: center;
    line-height: 30px;
    font-size: 16px;
}
div>h2{
    text-align :center
}
</style>
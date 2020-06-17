<template>
    <div>
        <h1>商品详情页</h1>
    </div>
</template>
<script>
export default {
    props:{
        id:{
            type:String,
            required:true
        }
    },
    data:function(){
        return{

        }
    },
    mounted(){
        console.log('动态路由',this.$route.params.id)
        console.log('路由传参',this.id)
        //根据id调接口,获取商品详情，并赋值给声明式变量
        //this.info = 返回商品详情结果
    }
}
</script>
<style lang="css">

</style>
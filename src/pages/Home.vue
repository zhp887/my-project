<template>
    <div>
        <h2>首页
            <span v-text='msg'></span>
        </h2>
        <h2 v-text='msg2'></h2>
        <!-- 渲染音乐列表 -->
        <div>
            <div v-for='item in songList' :key='item.id'>
                <span v-text='item.name'></span>
            </div>
        </div>
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
import {mapState,mapGetters,mapActions} from "vuex";
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
    computed:{
        ...mapState('study',['msg']),
        ...mapGetters('study',['msg2']),
        ...mapState('song',['songList'])
    },
    mounted(){
        let params = {
            ct:24,
            qqmusic_ver:1298,
            new_json:1,
            remoteplace:'txt.yqq.song',
            searchid: 54616638128860322,
            t:0,
            aggr:1,
            cr:1,
            catZhida:1,
            lossless:0,
            flag_qc:0,
            p:1,
            n:10,
            w:'周杰伦',
            g_tk_new_20200303:5381,
            g_tk:5381,
            loginUin:0,
            hostUin:0,
            format:'json',
            inCharset:'utf8',
            outCharset:'utf-8',
            notice:0,
            platform:'yqq.json',
            needNewCode:0
        }
        this.getQQMusic(params)
    },
    methods:{
        ...mapActions('song',['getQQMusic']),
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
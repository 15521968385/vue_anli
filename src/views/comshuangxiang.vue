<template>
    <div class="comshuangxiang">
        <h1>父亲的num:{{num}}</h1>
        <child :pnum="num" @cInput="cInput"></child>
    </div>
</template>
<script>
import child from '@/components/child'
export default {
    name:'comshuangxiang',
    data(){
        return{
            num:1
        }
    },
    methods:{
        cInput(cnum){
            
            this.num=Number(cnum)
        }
    },
    components:{
        child
    }
}
</script>
<style lang="less" scoped>
.comshuangxiang{
    background-color: blue;
    padding: 10px;
}
</style>
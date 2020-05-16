<template>
    <div class="refsandparent">
        <div>{{arrObj}}</div>
        <child ref="childcom"></child>
        <child2 :arrObj="arrObj"></child2>
    </div>
</template>
<script>
import child from '@/components/child'
import child2 from '@/components/child2'
export default {
    name:'refsandparent',
    data(){
        return{
            arrObj:[],
            msg:'父组件的msg'
        }
    },
    mounted(){
        // 还有一种方式this.$children
        //this.$refs只能实现访问子组件，访问data数据.msg,访问methods方法.fun()
        this.arrObj = this.$refs.childcom.arrObj
    },
    components:{
        child,child2
    }
}
</script>
<style lang="less" scoped>
.refsandparent{
    background-color: cadetblue;
    padding: 10px;
}
</style>
<template>
    <div class="propsandemit">
        <h1>parent</h1>
        <h4>{{msg}}</h4>
        <h4>{{arr}}</h4>
        <p>{{cZhi}}</p>
        <child :cmsg="msg" :carr="arr" @cClickItem="cClickItem"></child>
    </div>
</template>
<script>
import child from '@/components/child'
export default {
    name:'propsandemit',
    data(){
        return{
            msg:'父组件的msg',
            arr:['父组件的arr','父组件的arr','父组件的arr'],
            cZhi:"child组件传过来的值"
        }
    },
    methods:{
        cClickItem(item){
            this.cZhi=item
        }
    },
    components:{
        child
    }
}
</script>
<style lang="less" scoped>
.propsandemit{
    background-color: gray;
    padding:10px
    
}
p{
    background-color: yellow;
}
</style>

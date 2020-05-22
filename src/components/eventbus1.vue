<template>
    <div class="eventbus1">
        你哥
        {{msg}}
        <button @click="toS">按钮</button>
    </div>
</template>
<script>
import {eventBus} from '@/main'
export default {
    name:'eventbus1',
    data(){
        return{
            msg:'我是你哥'
        }
    },
    methods:{
        toS(){
            // 发送事件给eventbus2
            eventBus.$emit('toS','我是你哥')
        }
    },
    created(){
        // 接收eventbus2发送的事件
       eventBus.$on('toB',msg=>{
           console.log(msg)
           this.msg=msg
       })
    }
}
</script>
<style lang="less" scoped>

</style>
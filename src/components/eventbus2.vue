<template>
    <div class="eventbus2">
        你妹
        {{msg}}
        <button @click="toB">按钮</button>
    </div>
</template>
<script>
import {eventBus} from '@/main'

export default {
    name:'eventbus2',
    data(){
        return{
            msg:'我是你妹'
        }
    },
    methods:{
        toB(){
            eventBus.$emit('toB','我是你妹')
        }
    },
    created(){
        
        eventBus.$on('toS',msg=>{
            console.log(msg)
            this.msg=msg
        })
    }
}
</script>
<style lang="less" scoped>

</style>
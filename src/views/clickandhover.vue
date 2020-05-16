<template>
    <div class="clickandhover">
        <p><van-button type="info" @click="tishi">重要提示</van-button></p>
        <ul class="clickul">
            <li v-for="(item,i) in arr" :key="i" :class="i==click_item?'green':''" @click="click_item=i"><a>{{item}}</a></li>
        </ul>
        <ul class="hoverul">
            <li v-for="(item,i) in arr" :key="i" :class="i==hover_item?'green':''"  @mouseover="hover_item=i" ><a>{{item}}</a></li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'clickandhover',
    data(){
        return{
            arr:['谢敬涛','谢敬涛','谢敬涛','谢敬涛'],
            click_item:null,
            hover_item:null
        }
    },
    methods:{
        tishi(){
            this.$notify('移动端没有对应的鼠标悬浮事件');
        }
    }
}
</script>
<style lang="less" scoped>
ul{
    display: flex;
    margin: 10px;
    li{
        flex: 1;
        text-align: center;
        a{
            display: block;
            width: 100%;
            height: 100%;
        }
    }
    .green{
        background-color: green;
    }
}
</style>
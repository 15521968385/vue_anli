<template>
  <!-- value,name,v-model都要写 -->
  <div class="vmodel">
    <!-- radio单选框 -->
    <!-- v-model绑定value单个值 -->
    <div class="radio_box">
      <h2>radio单选框</h2>
      <label>
        <input type="radio" name="nan" value="男" v-model="sex" />男
      </label>
      <label>
        <input type="radio" name="nv" value="女" v-model="sex" />女
      </label>
      <label>
        <input type="radio" name="renyao" value="人妖" v-model="sex" />人妖
      </label>
      <h4 v-show="sex!=''">您选择的是:{{sex}}</h4>
      <h4 v-show="sex==''">请选择性别</h4>
    </div>
    <!-- checkbox单选框 -->
    <!-- v-model绑定boolean值 -->
    <div class="check_dan">
      <h2>checkbox单选框</h2>
      <label>
        <input type="checkbox" name="agree" value="同意" v-model="isAgree" />同意
      </label>
      <input type="button" :disabled="!isAgree" value="下一步" @click="next" />
      <h4>您选择了:{{isAgree}}</h4>
    </div>
    <!-- checkbox多选框 -->
    <!-- v-model绑定数组 -->
    <div class="check_duo">
      <h2>checkbox多选框</h2>
      <div style="padding:10px">
        <label>
          <input
            type="checkbox"
            value="all"
            name="all"
            @input="checkall"
            v-model="isall"
            ref="checkall"
          />
          全选
        </label>
      </div>
      <label v-for="(item,i) in checkarrone" :key="i">
        <input
          type="checkbox"
          :value="item"
          :name="item"
          v-model="checkarr"
          ref="checkboxs"
          @input="checknoall"
        />
        {{item}}
      </label>

      <h4>您选择的是:{{checkarr}}</h4>
    </div>
    <!-- select单选 -->
    <!-- v-model绑定value单个值 -->
    <div class="select_dan">
      <h2>select单选</h2>
      <select name="select_dan" v-model="selectDan">
        <option value="苹果" name="苹果">苹果</option>
        <option value="香蕉" name="香蕉">香蕉</option>
        <option value="葡萄" name="葡萄">葡萄</option>
        <option value="火龙果" name="火龙果">火龙果</option>
      </select>
      <h4 v-show="selectDan==''">请选择</h4>
      <h4 v-show="selectDan!=''">您选择了:{{selectDan}}</h4>
    </div>
    <!-- select多选 -->
    <!-- v-model绑定数组 -->
    <div class="select_duo">
      <h2>select多选</h2>
      <select name="select_duo" v-model="selectDuo" multiple>
        <option value="苹果" name="苹果">苹果</option>
        <option value="香蕉" name="香蕉">香蕉</option>
        <option value="葡萄" name="葡萄">葡萄</option>
        <option value="火龙果" name="火龙果">火龙果</option>
        <option value="你猴桃" name="你猴桃">你猴桃</option>
        <option value="芒果" name="芒果">芒果</option>
        <option value="龙岩" name="龙岩">龙岩</option>
      </select>
      <h4 v-show="selectDuo==''">请选择</h4>
      <h4 v-show="selectDuo!=''">您选择了:{{selectDuo}}</h4>
    </div>
  </div>
</template>
<script>
export default {
  name: "vmodel",
  data() {
    return {
      sex: "",
      isAgree: false,
      isall: false,
      checkarrone: ["篮球", "足球", "羽毛球", "排球"],
      checkarr: [],
      selectDan: "",
      selectDuo: []
    };
  },
  methods: {
    next() {
      alert("下一步");
    },
    // 全选
    checkall() {
      let checkall = this.$refs.checkall.checked;
      for (let item of this.$refs.checkboxs) {
        item.checked = checkall;
        
      }
    },
    // 不全选
    checknoall() {
      let isall = this.$refs.checkboxs.every(function(item,index){
        return item.checked==true
      })
      this.$refs.checkall.checked=isall;
      
    }
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
label {
  padding: 10px 10px 10px 0;
}
.radio_box,
.check_dan,
.check_duo {
  margin-bottom: 10px;
}
</style>
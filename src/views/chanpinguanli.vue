<template>
  <div class="chanpinguanli">
    <label>
      <input
        v-focus="'yellow'"
        @keyup.enter="add()"
        type="text"
        style="height:44px;width:100px;border:none"
        placeholder="输入用户名"
        v-model="user.name"
      />
      <van-button type="primary" @click="add">添加</van-button>
      <input
        type="text"
        style="height:44px;width:100px;float:right"
        placeholder="搜索关键字"
        v-model="user.keywords"
      />
    </label>

    <table class="table">
      <thead>
        <tr>
          <th>序号</th>
          <th>用户</th>
          <th class="time">创建时间</th>
          <th>操作</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(item,i) in search(user.keywords)" :key="i">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td class="time">{{item.time | dateFiler}}</td>
          <td>
            <a @click.prevent="del(item.id)" href="#">删除</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "chanpinguanli",
  data() {
    return {
      msg: [
        { id: 1, name: "谢敬涛1", time: new Date() },
        { id: 2, name: "谢敬涛2", time: new Date() },
        { id: 3, name: "谢敬涛3", time: new Date() },
        { id: 4, name: "谢敬涛4", time: new Date() },
        { id: 5, name: "谢敬涛5", time: new Date() }
      ],
      user: {
        name: "",
        keywords: ""
      }
    };
  },
  methods: {
    add() {
      if (this.user.name == "") return alert("请输入用户名");
      let id = this.msg[this.msg.length-1].id+1
      let user = {id:id,name: this.user.name, time: new Date() };
      this.msg.push(user);
      this.user.name = "";
    },
    del(id) {
      for (let i in this.msg) {
        if (this.msg[i].id == id) {
          this.msg.splice(i, 1);
        }
      }
    },
    search(keywords) {
      return this.msg.filter(item => {
        return item.name.includes(keywords);
      });
    }
  }
};
</script>
<style lang="less" scoped>
.table {
  display: block;
  thead,
  tbody {
    display: block;
  }

  tr {
    border-bottom: 1px solid red;
    display: block;
    display: flex;
    padding: 10px 0;
    width: 100%;

    td,
    th {
      flex: 1;
      text-align: left;
      vertical-align: bottom;
    }
    .time {
      flex: 2;
    }
  }
  tbody tr:hover {
    background-color: chartreuse;
    transition: all 0.5s;
  }
}
</style>
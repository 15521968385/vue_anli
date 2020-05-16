<template>
  <div class="gouwuche">
    <div>
      <label>
        <button @click="addgood">添加商品</button>
        <van-dialog v-model="add.isdialog" show-cancel-button :beforeClose="beforeClose">
          <van-field v-model="add.name" label="名字" placeholder="请输入名字" :name="add.name" />
          <van-field
            v-model="add.price"
            type="number"
            label="价格"
            placeholder="请输入价格"
            :name="add.price"
          />
          <van-field v-model="add.num" type="digit" label="数量" placeholder="请输入数量" />
        </van-dialog>
      </label>
    </div>
    <table>
      <thead>
        <tr>
          <th>序号</th>
          <th class="goodname">名字</th>
          <th>价格</th>
          <th>数量</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,i) in goods" :key="i">
          <td>{{item.id}}</td>
          <td class="goodname">{{item.name}}</td>
          <td>{{item.price | showPrice}}</td>
          <td>
            <van-stepper v-model="item.num" />
          </td>
          <td>
            <a @click.prevent href="#" @click="del(item.id)">删除</a>
          </td>
        </tr>
      </tbody>
    </table>
    <h1>总价格：{{sumprice|showPrice}}</h1>
  </div>
</template>
<script>
export default {
  name: "gouwuche",
  data() {
    return {
      goods: [
        { id: 1, name: "海贼王", price: 99, num: 1 },
        { id: 2, name: "火影", price: 66.33, num: 1 },
        { id: 3, name: "龙珠", price: 33, num: 1 },
        { id: 4, name: "一拳超人", price: 22, num: 1 }
      ],
      add: {
        isdialog: false,
        name: "",
        price: "",
        num: ""
      }
    };
  },
  methods: {
    addgood() {
      this.add.isdialog = true;
    },
    beforeClose(action, done) {
      // 点击确认时
      if (action === "confirm") {
        let id;
        if (this.goods.length == 0) {
          id = 1;
        } else {
          id = this.goods[this.goods.length - 1].id + 1;
        }

        let good = {
          id: id,
          name: this.add.name,
          price: Math.abs(Number(this.add.price)),
          num: Number(this.add.num)
        };

        if (good.name == "") {
          alert("请输入名字");
        } else if (good.price == "") {
          alert("请输入价格");
        } else if (good.num == "") {
          alert("请输入数量");
        } else {
          this.goods.push(good);
        }
        this.add.name = "";
        this.add.price = "";
        this.add.num = "";
        done(); //关闭
        // 点击取消时
      } else if (action === "cancel") {
        done(); //关闭
      }
    },
    del(id) {
      for (let i in this.goods) {
        if (this.goods[i].id == id) {
          this.goods.splice(i, 1);
        }
      }
    }
  },
  computed: {
    sumprice: function() {
      let sumprice = 0;
      for (let i in this.goods) {
        sumprice += this.goods[i].price * this.goods[i].num;
      }
      return sumprice;
    }
  },
  filters: {
    showPrice(price) {
      return `￥${price.toFixed(2)}`;
    }
  }
};
</script>
<style lang="less" scoped>
table {
  display: block;
  thead,
  tbody {
    display: block;
    width: 100%;
    tr {
      display: flex;
      td,
      th {
        flex: 1;
        line-height: 28px;
      }
      .goodname {
        flex: 2;
      }
    }
  }
  tbody > tr {
    border-bottom: 1px solid gray;
  }
  tbody > tr:hover {
    background-color: brown;
    transition: all 0.5s;
  }
}
</style>
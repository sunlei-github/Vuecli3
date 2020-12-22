<template>
  <HelloWorld :msg="name"  />
  <myprop :cname="name" :cold="old" :cnumberarr="numberarr" :ctestuser="testuser"></myprop>
  
  <nimingslot>匿名插槽的传入的值</nimingslot>
  <nimingslot></nimingslot>

  <jumingslot>
    <template v-slot:slot1>具名插槽值11111</template>
  </jumingslot>

  <scpeslot>
    <template v-slot:user="slotProps">
     {{slotProps.suser.nname}}
    </template>
  </scpeslot>

  <scpeslot>
    <template v-slot:foods="test">
    zzzz  {{test.foodlist[2]}}
    </template>
  </scpeslot>

  <div>
    <!-- 过滤器 {{old | addAny(20)}} -->
  </div>


  <div v-for="(item, index) in checkArr" :key="item.id">
    <input type="checkbox" name="aa" :value="item.id" v-model="checked" />{{
      item.name
    }}
    <button @click="rmsingle(index)">移除</button>
  </div>
  <button @click="rmbatch">批量删除</button>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import myprop from "./components/myprop.vue";
import nimingslot from  "./components/nimingslot.vue";
import jumingslot from  "./components/jumingslot.vue";
import scpeslot from "./components/scpeslot.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    myprop,
    nimingslot,
    jumingslot,
    scpeslot
  },
  data() {
    return {
      name:"Tom",
      old:21,
      numberarr:[14,54,23,67],
      testuser:{
        username:"Jim",
        usersex:"男",
      },
      checked: [],
      checkArr: [
        { id: 11, name: "雪糕" },
        { id: 22, name: "电视" },
        { id: 33, name: "电脑" },
        { id: 44, name: "手枪" },
        { id: 55, name: "笔记本" },
        { id: 66, name: "苹果" },
      ],
    };
  },
  filters:{
    addAny(val){
      this.old+=val;
      console.log("过滤器将数字加任意数字"+this.old);
    },
    addAnyTw(addNum,mulnum){
      this.old+=addNum;
      console.log("过滤器将数字加任意数字"+this.old);
      this.old-=mulnum;
      console.log("过滤器将数字减去任意数字"+this.old);
    }
  },
  methods: {
    rmbatch() {
      var temparr = this.checkArr.filter((c) => {
        return this.checked.some((m) => m === c.id);
      });
      for (const item of temparr) {
        var itemindex = this.checkArr.indexOf(item);
        if (itemindex > -1) {
          this.checkArr.splice(itemindex, 1);
        }
      }
    },
    rmsingle(index) {
      this.checkArr.splice(index, 1);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

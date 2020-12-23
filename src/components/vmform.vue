<template>
    <div>
        <template v-for="(item, index) in checkArr" :key="item.id">
            <input type="checkbox" name="aa" :value="item.id" v-model="checked" />
            {{item.name}}
            <button @click="rmsingle(index)">移除</button>
        </template>
        <button @click="rmbatch">批量删除</button>
        <br>
        <template v-for="item in checkArr" :key="item.id">
            <input type="checkbox" name="aa" :value="item.id" v-model="item.checked" />
            {{item.name}}
        </template>
        <button @click="rmbacth2">批量删除2</button>

        <input type="text"  v-model="textval" > {{textval}}
        <input type="textarea" v-model="textareaval" > {{textareaval}}
        <template v-for="item of radioarr" :key="item.id">
        <input name="11" type="radio" :value="item.id" v-model="radioval" > {{item.name}} <br> 
        </template>
        {{radioval}}
        <select name="op1" id="op1" v-model="selectop">
            <template v-for="item in checkArr" :key="item.id">
                <option :value="item.id">{{item.name}}</option>
            </template>
        </select>
            {{selectop}}
    </div>
</template>

<script>
export default {
    name:"vmform",
    data(){
        return {
            radioarr:[
                {id:"12",name: "可乐"},
                {id:"14",name: "冰可乐"}
            ],
            selectop:"11",
            textval:"",
            textareaval:"",
            radioval:"12",
            checked: [],
            checkArr: [
            { id: 11, name: "雪糕" },
            { id: 22, name: "电视" },
            { id: 33, name: "电脑" },
            { id: 44, name: "手枪" },
            { id: 55, name: "笔记本" },
            { id: 66, name: "苹果" },
      ],
    }
    },
    beforeMount:function(){
        //提前为数据添加一个checked的属性来绑定 多选框的可选与否 但是在控制台修改该属性并不能 控制多选框是否选中
        this.checkArr.forEach(c=>{
            c.checked=false;
        })
    },
    mounted:function(){
        // this.checkArr.forEach(c=>{
        //     c.checked=false;
        // })
    },
    methods:{
    rmbatch() {
    console.log(this.checked);
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
    rmbacth2(){
     var temparr = this.checkArr.filter((c) => {
        return c.checked==true;
    });
    console.log(temparr);
    },
    }
}
</script>  
<template>
    <div>
        <input type="number" v-model="addnum"> addnum{{addnum}}  
        计算属性 数字{{cpnum}} 
        数字number{{number}}

        侦查器
        <input type="number" v-model="wnumber">
        <button @click="clickobj">改变侦查器对象的值</button>

    <template v-for="item in arr" :key="item.id">
        <a @click.prevent="click(item)" id="item.id" href="#">{{item.msg}}</a> <br>
    </template>


    </div>
</template>

<script>
export default {
    name:"compuedwatch",
    data() {
        return {
            msg:"信息",
            number:12,
            addnum:0,
            wnumber:122,
            user:{
                name:"Tom",
                old:118
            },
            wuser:{
                name:"Jim",
                old:1234
            },
            arr:[
                {id:1,msg:"1111"},
                {id:2,msg:"2222"}
            ]
        }
    },
    // 计算属性 计算对象时  似乎是有问题的
    // 计算属性 默认只有get属性  但是也可以添加一个 set属性
    // 计算属性的缓存 当相关响应式依赖发生变化时 他们才会重新求值  
    computed:{
        cpnum:function(){
            let number=this.number+this.addnum;
            console.log(`计算属性的值${number}`)
            return number;
        },
    },
    watch: {
        wnumber:function(newvalue,oldvalue){
            console.log(`新值${newvalue}旧值${oldvalue}`);
        },
        wuser:function(newvalue,oldvalue){
             console.log(`新值${newvalue.name}旧值${oldvalue.name}`);
             console.log(`新值${newvalue.old}旧值${oldvalue.old}`);
        }
    },
    methods:{
        click:function(item){
            item.msg="ddd";
        },
        clickobj:function(){
            console.log(this.wuser.name+"----"+this.wuser.old);
            this.wuser={name:"MMM",old:"3456"};
            console.log(this.wuser.name+"----"+this.wuser.old);
        }
    }
}
</script>
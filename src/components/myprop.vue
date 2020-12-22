<template>
    <div>
         我是组件 comp1
        {{cname}}
        {{cold}}
        {{ctestuser}}
        {{cnumberarr}}

        <slot></slot>
    </div>
</template>

<script>
export default{
    name:"myprop",
    props: {
        cname:{
            type:String,
            required:true
        },
        cold:{
            type:Number,
            required:true
        },
        cnumberarr:{
            type:Array,
            required:true
        },
        ctestuser:{
            type:Object,
            required:true
        },
    },
    data() {
        return {
        }
    },
    methods: {
        
    },
    mounted() {
    },
}
</script>

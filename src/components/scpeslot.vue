<template>
    <div>
        作用域插槽
        <slot name="user" :suser="suser">{{suser.fname}}</slot>

        <slot name="foods" :foodlist="foods" >AAAAAA{{foods[0]}}</slot>
    </div>
</template>

<script>
export default {
    name:"nimingslot",
    data() {
        return {
            suser:{
                fname:"插槽的用户的姓名",
                nname:"插槽的用户的姓名1111"
            },
            foods:[1,23,45,6]
        }
    },
}
</script>
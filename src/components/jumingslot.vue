<template>
    <div>
        具名插槽
        <slot name="slot1">具名插槽默认值1</slot>
        <slot name="slot2">具名插槽默认值2</slot>
        <slot name="slot3">具名插槽默认值3</slot>
    </div>
</template>

<script>
export default {
    name:"jumingslot",

}
</script>
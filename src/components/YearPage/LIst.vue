<template>
    <ul>
        <CardItem v-for="(item, index) in data" :key="index" :item="item"></CardItem>
    </ul>
</template>

<script>
    import CardItem from "./Item.vue"
    export default {
        components:{
            CardItem,
        },
        props:{
            data:Array,
        }
    }
</script>

<style lang="less" scoped>

</style>
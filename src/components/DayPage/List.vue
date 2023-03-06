<template>
    <div class="list">
        <ListItem title="当前年月" :content="data['year-month']"></ListItem>
        <ListItem title="今年属相" :content="data.animalsYear"></ListItem>
        <ListItem title="农历年份" :content="data.lunarYear"></ListItem>
        <ListItem title="适宜事件" :content="data.suit"></ListItem>
        <ListItem title="避免事件" :content="data.avoid"></ListItem>
    </div>
</template>

<script>
    import ListItem from "./Item.vue"
    export default {
        components:{
            ListItem,
        },
        props:{
            data:Object,
        }
    }
</script>

<style lang="less" scoped>
    .list {
        padding: 0.15rem;
        box-sizing: border-box;
    }
</style>
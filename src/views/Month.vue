<template>
    <div class="container">
        <CardList :data="monthData"></CardList>
    </div>
</template>

<script>
    import getData from '@/services';
    import { getCurDate } from '@/utils/utils';
    import { onMounted, computed } from 'vue';
    import { useStore } from 'vuex';
    import CardList from "@/components/MonthPage/List.vue"
    
    export default{
        setup(){
            const store = useStore();

            onMounted(() => {
                const field = store.state.field;
                getData(store, field, getCurDate(field))
            })

            return {
                monthData: computed(() => store.state.monthData),
            }
        },
        components:{
            CardList,
        }
    }
</script>

<style lang="less" scoped>

</style>
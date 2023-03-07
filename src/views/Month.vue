<template>
    <div class="container">
        <error-tip :errorCode="errorCode" v-if="errorCode"></error-tip>
        <CardList :data="monthData" v-else></CardList>
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
                errorCode: computed(() => store.state.errorCode),
            }
        },
        components:{
            CardList,
        }
    }
</script>

<style lang="less" scoped>

</style>
<template>
    <div class="container">
        <error-tip :errorCode="errorCode" v-if="errorCode"></error-tip>
        <YearList :data="yearData" v-else></YearList>
    </div>
</template>

<script>
import getData from '@/services';
import { getCurDate } from '@/utils/utils';
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import YearList from "@/components/YearPage/LIst.vue"

    export default{
        setup(){
            const store = useStore();

            onMounted(() => {
                const field = store.state.field;
                getData(store, field, getCurDate(field));
            })

            return {
                yearData: computed(() => store.state.yearData),
                errorCode: computed(() => store.state.errorCode),
            }
        },
        components:{
            YearList,
        }
    }
</script>

<style lang="less" scoped>

</style>
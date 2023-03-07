<template>
    <div class="container">
        <error-tip :errorCode="errorCode" v-if="errorCode"></error-tip>
        <div v-else>
            <DayCard :data="dayData"></DayCard>
            <List :data="dayData"></List>
        </div>
    </div>
</template>

<script>
import { onMounted, computed } from 'vue';
import getData from "@/services"
import DayCard from "@/components/DayPage/Card.vue"
import List from "@/components/DayPage/List.vue"
import { getCurDate } from "@/utils/utils"
import { useStore } from 'vuex';

export default{
    setup(){
        const store = useStore();
        onMounted(() => {
            const field = store.state.field;
            getData(store, field, getCurDate(field));
        })

        return {
            dayData:computed(() => store.state.dayData),
            errorCode: computed(() => store.state.errorCode),
        }
    },
    components:{
        DayCard,
        List,
    }
}
</script>

<style lang="less" scoped>

</style>
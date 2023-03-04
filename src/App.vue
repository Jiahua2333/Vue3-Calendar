<template>
    <div>
        <TopHeader>{{ headerTitle }}</TopHeader>
        <SearchInput :placeholder="placeholder" :maxLength="maxLength" ></SearchInput>
        <router-view></router-view>
        <TabBar></TabBar>
    </div>
</template>

<script>
import TopHeader from "@/components/TopHeader/TopHeader.vue";
import TabBar from "@/components/TabBar";
import SearchInput from "@/components/SearchInput";
import {useStore} from "vuex";
import {useRouter} from 'vue-router';
import { watch } from 'vue';

export default {
    components: {
        TopHeader,
        TabBar,
        SearchInput,
    },
    setup(){
        const store = useStore();
        const router = useRouter();

        watch(
            () => router.currentRoute.value.name,
            (newValue) => {
                store.commit("setHeaderTitle", newValue);
                store.commit("setPlaceholder", newValue);
                store.commit("setMaxLength", newValue);
                store.commit("setField", newValue);
            }
        )
        // console.log(store.state);
        return store.state;
    }
};
</script>

<style lang="less">
    .container{
        padding: 0.82rem 0 0.44rem 0;
        box-sizing: border-box;
    }
</style>

<template>
    <div class="search">
        <input type="text" :placeholder="placeholder" :maxlength="maxLength" v-model="keyword" @input="search()">
    </div>
</template>

<script>
import getData from "@/services";
import { ref, watch } from "vue";
import { useStore } from "vuex";
import { formatUserDate } from "@/utils/utils"
export default{
    props:{
        placeholder:String,
        maxLength:String,
    },
    
    setup(){
        const keyword = ref("");
        const store = useStore();
        const search = () => {
            const field = store.state.field;
            // console.log(111);
            if(keyword.value.length === Number(store.state.maxLength)){
                // console.log(222);
                getData(store,field,formatUserDate(keyword.value))
            }
        };

        watch(
            () => store.state.field,
            () => {
                keyword.value = "";
            }
        );

        return {
            keyword,
            search,
        };
    },

}
</script>

<style lang="less" scoped>
    .search{
        position: fixed;
        top: 0.44rem;
        left: 0;
        z-index: 99;
        width: 100%;
        height: 0.38rem;
        padding: 0.03rem 0.1rem;
        box-sizing: border-box;
        background: #fff;
        input{
            width: 100%;
            height: 100%;
            font-size: 0.14rem;
            border: 1px solid #ddd;
            text-indent: 0.1rem;
            border-radius: 0.3rem;
            &:focus{
            border-color: #ed4040;
            box-shadow: 0 0 0.02rem #ed4040;
            transition: all 0.3s;
        }
        }
    }
</style>
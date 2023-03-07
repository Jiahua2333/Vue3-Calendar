<template>
    <div class="error-tip">
        <img :src="require('../../assets/img/error.png')" alt="error messege">
        <p>{{ errorData[errorCode] }}</p>
    </div>
</template>

<script>
    import errorData from "@/data/error"
    export default {
        props:{
            errorCode:Number
        },
        setup(){
            return{
                errorData
            }
        }
    }
</script>

<style lang="less" scoped>
    .error-tip{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 80vh;
        img{
            width: 0.5rem;
        }
        p{
            font-size: 0.14rem;
            color: #999;
            margin-top: 0.15rem;
        }
    }
</style>
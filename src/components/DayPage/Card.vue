<template>
    <div class="wrapper">
        <div class="card">
            <div class="header">{{ data.weekday }}</div>
                <h1 class="text lunar">{{ data.lunar }}</h1>
                <h2 class="text date">{{ data.date }}</h2>           
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            data:Object,
        }
    }
</script>

<style lang="less" scoped>
    .wrapper{
        padding: 0.15rem;
        box-sizing: border-box;
        .card{
            background: url("../../assets/img/bg.jpg") no-repeat center/cover;
            border: 1px solid #ddd;
            border-radius: 0.15rem;
            overflow: hidden;
            color: white;
            .header{
                height: 0.35rem;
                padding: 0.1rem;
                box-sizing: border-box;
                font-size: 0.14rem;
                background: rgba(0,0,0,0.3);
            }
            .text{
                    text-align: center;
                    margin: 0.3rem 0;
                    text-shadow: 0.02rem 0.05rem #666;
                
                &.lunar{
                    color: #f75555;
                    font-size: 0.5rem;
                    font-weight: bold;
                }
                &.date{
                    font-size: 0.2rem;
                }
            }  
        }
    }
</style>
<template>
    <li class="item">
        <div class="card">
            <div class="img-wrapper">
                <img :src="require(`../../assets/img/${item.name}.jpg`)" :alt="`${item.name}`">
                <div class="mask">
                    <h1>{{ item.name }}</h1>
                    <h2>{{ item.festival }}</h2>
                </div>
            </div>
            <div class="content-wrapper">
                <h1>假期描述：{{ item.desc || '无说明' }}</h1>
                <h2>拼假建议：{{ item.rest || '无说明' }}</h2>
            </div>
        </div>
    </li>
</template>

<script>
    export default {
        props:{
            item:Object,
        }
    }
</script>

<style lang="less" scoped>
    .item{
        padding: 0.1rem 0.15rem;
        box-sizing: border-box;
        .card{
            border: 1px solid #ddd;
            border-radius: 0.15rem;
            overflow: hidden;
            background: #fff;
            box-shadow: 0.01rem 0.03rem #999;
            .img-wrapper{
                position: relative;
                height: 2.15rem;

                .mask{
                    position: absolute;
                    top:0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0,0,0,0.4);
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;

                    h1{
                        color: #ed4040;
                        font-size: 0.5rem;
                        font-weight: bold;
                    }
                    h2{
                        color: #fff;
                        margin-top: 0.15rem;
                    }
                }
            }
            .content-wrapper{
                padding: 0.1rem;
                box-sizing: border-box;
                h1{
                    font-size: 0.16rem;
                    line-height: 0.2rem;
                }
                h2{
                    font-size: 0.14rem;
                    line-height: 0.2rem;
                    margin-top: 0.1rem;
                }
            }
        }
    }
</style>
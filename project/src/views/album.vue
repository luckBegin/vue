<template>
    <div class="metting">
        <div class="scroll-content">

            <div class="masonry">
                <div class="item"  v-for="item in imgList">
                    <div class="box">
                    <img :src="'http://jichang.yoopoon.com/static'+item.path" alt="">
                    </div>
                </div>
            </div>


            <!--<div class="zq-waterfall">-->
                <!--<div class="zq-waterfall-item" v-for="item in imgList">-->
                    <!--<div class="box">-->
                        <!--<img :src="'http://jichang.yoopoon.com/static'+item.path" alt="">-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue' ;
    import {service} from '@/service/service.js';

    export default {
        name: 'metting',
        components: {
            HelloWorld
        },
        methods: {},
        data() {
            return {
                imgList: []
            }
        },
        created() {
            var _this = this;
            service.getAlbum()
                .then(res => {
                    var data = res.data;
                    if (data.success == true) {
                        _this.$data.imgList = data.data.all;
                    } else {
                        alert("获取图片出错");
                    }
                    ;
                })
        }
    }
</script>
<style scoped>
    .metting {
        width: 100%;
        height: 100%;
        background: url('../assets/flow/album.png') round;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    .scroll-content {
        width: 100%;
        height: 100%;
        overflow: scroll;
    }

    .zq-waterfall {
        padding: 35% 0 0 0;
        width: 100%;
    }

    .box {
        margin-bottom: 0.333rem;
    }

    .box > img {
        width: calc(100% - 10px);
        border-radius: 0.133rem;
        display: block;
        margin: 0 5px 5px 5px;
        border: 1px solid #e2c588;
    }

    .zq-waterfall-item {
        width: calc(50% - 8px);
        background-color: #ccc;
        box-sizing: border-box;
        margin: 4px;
    }

    .zq-waterfall-item:nth-child(odd) {
        float: left;
    }

    .zq-waterfall-item:nth-child(even) {
        float: right;
    }

    .masonry { column-count: 2; column-gap: 0; margin-top: 35% ;padding-bottom: 20px;}
    .item { break-inside: avoid; box-sizing: border-box; }
</style>
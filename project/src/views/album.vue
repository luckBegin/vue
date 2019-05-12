<template>
    <div class="metting">
        <div class="scroll-content">
            <!--<p class="tips">-->
                <!--尊敬的客户您好，本次活动照片我们将会同步上传，请您于12月28日前长按惠存，谢谢！-->
            <!--</p>-->
            <div class="masonry">
                <div class="item"  v-for="item in imgList">
                    <div class="box">
                    <img :src="'http://lijiang-api.jpgqs.cn/'+item.path" alt="" @click="choseImage(item)">
                    <img class = 'download' src="../assets/flow/download.png" alt="" @click="choseImage(item)">
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

        <div class="boxWrap" v-if="show" @click="show = false ">
            <img :src="img" alt="" class="blockImg">
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
        methods: {
			choseImage(item){
				this.$data.img = 'http://lijiang-api.jpgqs.cn' + item.path ;
                var isAndroid = window.navigator.userAgent.indexOf('Android') > -1 ;
                if(!isAndroid)
                    this.$data.show = true ;
            }
        },
        data() {
            return {
                imgList: [] ,
                show : false ,
                img : null
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
                    };
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
    .boxWrap{
        width: 100%;
        height: 100%;
        background: #000;
        position: absolute;
        top:0px;
        left: 0px;
        background: rgba(0, 0, 0, 1);
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .scroll-content {
        width: 100%;
        height: 100%;
        overflow: scroll;
    }

    .download{
        position: absolute;
        bottom: -5px;
        opacity: 0.8;
    }
    .zq-waterfall {
        padding: 1% 0 0 0;
        width: 100%;
    }

    .box {
        margin-bottom: 0.333rem;
        position: relative;
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

    .masonry { column-count: 2; column-gap: 0; margin-top: 40% ;padding-bottom: 20px;}
    .item { break-inside: avoid; box-sizing: border-box; }
    .blockImg{
        display: block;
        width: 100%;
        height: auto;
    }
    .tips{
        color:#ccc ;
        margin-top: 35%;
    }
</style>

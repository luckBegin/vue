<template>
    <div class="metting">
        <div class="scroll-content">
            <p class="tips">
                尊敬的客户您好，本次活动照片我们将会同步上传，请您于12月28日前长按惠存，谢谢！
            </p>
            <div class="masonry">
                <div class="item"  v-for="item in imgList">
                    <div class="box">
                    <img :src="'http://jichang.yoopoon.com/static'+item.path" alt="" @click="choseImage(item)">
                    </div>
                </div>
            </div>
            <button @click="loadMore($event)" class="loadMore">点击加载更多...</button>
        </div>

        <div class="boxWrap" v-if="show" @click="show = false" >
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
				this.$data.img = 'http://jichang.yoopoon.com/static' + item.path ;
                var isAndroid = window.navigator.userAgent.indexOf('Android') > -1 ;
                if(!isAndroid)
                    this.$data.show = true ;
            },
            loadMore($event){
				this.page += 1 ;
				var _this = this ;
				$event.target.disabled = true ;
				service.getAlbum(this.page)
					.then(res => {
						$event.target.disabled = false ;
						var data = res.data;
						if (data.success == true) {
							_this.$data.imgList = _this.$data.imgList.concat(data.data.all);
						} else {
							alert("获取图片出错");
						};
					})
            }
        },
        data() {
            return {
                imgList: [] ,
                show : false ,
                img : null ,
                page : 1
            }
        },
        created() {
            var _this = this;
            service.getAlbum(this.page)
                .then(res => {
                    var data = res.data;
                    if (data.success == true) {
                        _this.$data.imgList = _this.$data.imgList.concat(data.data.all);
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

    .zq-waterfall {
        padding: 1% 0 0 0;
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

    .masonry { column-count: 2; column-gap: 0; margin-top: 4% ;padding-bottom: 20px;}
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
    .loadMore{
        margin-bottom: 20px;
        border: none;
        padding: 5px 50px;
        border-radius: 5px;
        background: #e4c789;
        color: #313131;
    }
</style>
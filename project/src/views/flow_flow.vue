<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide ">
                <img src="../assets/flow/flow.png" class="flowSection">
            </div>
            <div class="swiper-slide bg1">
                <div class="video">
                    <!-- <video class="videoWrap" controls>
                        <source src="../assets/flow/gallery/video.mp4" type="video/mp4">
                        您的浏览器不支持 video 标签。
                    </video> -->
                </div>
            </div>
            <div class="swiper-slide bg2">
            </div>
              <div class="swiper-slide bg3">
            </div>
              <div class="swiper-slide bg4">
            </div>
              <div class="swiper-slide bg5">
            </div>
              <div class="swiper-slide bg6">
            </div>
              <div class="swiper-slide bg7">
            </div>
              <div class="swiper-slide bg8">
            </div>
              <div class="swiper-slide bg9">
            </div>
              <div class="swiper-slide bg10">
            </div>
              <div class="swiper-slide bg11">
            </div>
              <div class="swiper-slide bg12">
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要滚动条 -->
        <div class="swiper-scrollbar"></div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'flow',
        components: {
            HelloWorld
        },
        mounted: function(){
            var mySwiper = new Swiper ('.swiper-container', {
                direction: 'vertical', // 垂直切换选项
                loop: true, // 循环模式选项

                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                },
            })
        },
        methods: {
            flow(index) {
                if (index === 1)
                    this.$router.replace({path: "/place"})
                if (index === 2)
                    this.$router.replace({path: "/metting"})
                if (index === 3)
                    this.$router.replace({path: "/album"})
            }
        }
    }
</script>
<style scoped>

    .swiper-container,
    .swiper-wrapper,
    .swiper-slide {
        width: 100%;
        height: 100%;
        position: relative;
        background-position: center
    }
    .flowSection{
        width: auto;
        height: 100%;
        display: block;
    }
    .video{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.7);
        z-index: 99;
    }
    .videoWrap{
        position: absolute;
        left: 5%;
        top: 35%;
        width: 90%;
    }
    .bg{
        background-image: url('../assets/flow/flow.png')   ; 
    }

    .bg1{
        background-image: url('../assets/flow/gallery/1.jpg')   ; 
    }
     .bg2{
        background-image: url('../assets/flow/gallery/2.jpg')   ; 
    }
     .bg3{
        background-image: url('../assets/flow/gallery/3.jpg')   ; 
    }
     .bg4{
        background-image: url('../assets/flow/gallery/4.jpg')   ; 
    }
     .bg5{
        background-image: url('../assets/flow/gallery/5.jpg')   ; 
    }
     .bg6{
        background-image: url('../assets/flow/gallery/6.jpg')   ; 
    }
     .bg7{
        background-image: url('../assets/flow/gallery/7.png')   ; 
        background-repeat: round;
        background-position: 0 0;
    }
     .bg8{
        background-image: url('../assets/flow/gallery/8.jpg')   ; 
    }
     .bg9{
        background-image: url('../assets/flow/gallery/9.jpg')   ; 
    }
     .bg10{
        background-image: url('../assets/flow/gallery/10.jpg')   ; 
    }
     .bg11{
        background-image: url('../assets/flow/gallery/11.jpg')   ; 
    }
     .bg12{
        background-image: url('../assets/flow/gallery/12.jpg')   ; 
    }
</style>

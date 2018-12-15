<template>
    <div class="metting">
        <img src="../assets/flow/title.png" alt="" class="coverImage">

        <div class="section">
            <span>
                13:30 - 14:00
            </span>
            <span>
            </span>
            <span>
                签到,合影,品茶区,入座
            </span>
        </div>

        <div class="section">
            <span>
                13:30
            </span>
            <span>
            </span>
            <span>
                冷餐
            </span>
        </div>

        <div class="section">
            <span>
                14:00
            </span>
            <span>
            </span>
            <span>
                提示开场
            </span>
        </div>

        <div class="section">
            <span>
                14:05-14:15
            </span>
            <span>
            </span>
            <span>
                开场
            </span>
        </div>

        <div class="section">
            <span>
               14:15-14:25
            </span>
            <span>
            </span>
            <span>
                领导致辞
            </span>
        </div>

        <div class="section">
            <span>
               14:25-14:45
            </span>
            <span>
            </span>
            <span>
                市场推介
            </span>
        </div>

        <div class="section">
            <span>
              14:45-14:55
            </span>
            <span>
            </span>
            <span>
                第一组颁奖
            </span>
        </div>

        <div class="section">
            <span>
              14:55-15:00
            </span>
            <span>
            </span>
            <span>
                昆航节目
            </span>
        </div>

        <div class="section">
            <span>
                15:00-15:10
            </span>
            <span>
            </span>
            <span>
                第二组颁奖
            </span>
        </div>

        <div class="section">
            <span>
               15:10-15:15
            </span>
            <span>
            </span>
            <span>
                南航节目
            </span>
        </div>

        <div class="section">
            <span>
               15:15-15:20
            </span>
            <span>
            </span>
            <span>
                第一轮互动
            </span>
        </div>

        <div class="section">
            <span>
               15:20 - 15:30
            </span>
            <span>
            </span>
            <span>
                第三组颁奖
            </span>
        </div>

        <div class="section">
            <span>
               15:30 - 15:35
            </span>
            <span>
            </span>
            <span>
                川航节目
            </span>
        </div>

        <div class="section">
            <span>
               15:35 - 15:45
            </span>
            <span>
            </span>
            <span>
                第四组颁奖
            </span>
        </div>

        <div class="section">
            <span>
               15:35 - 15:45
            </span>
            <span>
            </span>
            <span>
                第四组颁奖
            </span>
        </div>

        <div class="section">
            <span>
               15:45 - 15:50
            </span>
            <span>
            </span>
            <span>
                瑞丽航节目
            </span>
        </div>

        <div class="section">
            <span>
               15:50 - 15:55
            </span>
            <span>
            </span>
            <span>
                第二轮互动
            </span>
        </div>

        <div class="section">
            <span>
               15:55-16:05
            </span>
            <span>
            </span>
            <span>
                第五组颁奖
            </span>
        </div>

        <div class="section">
            <span>
               16:05 - 16:10
            </span>
            <span>
            </span>
            <span>
                祥鹏节目
            </span>
        </div>

        <div class="section">
            <span>
               16:10 - 16:20
            </span>
            <span>
            </span>
            <span>
                第六组颁奖
            </span>
        </div>
        <div class="section">
            <span>
               16:20 - 16:25
            </span>
            <span>
            </span>
            <span>
                东航节目
            </span>
        </div>
        <div class="section">
            <span>
               16:25 - 16:30
            </span>
            <span>
            </span>
            <span>
                第三轮互动
            </span>
        </div>

        <div class="section">
            <span>
               16:30 - 16:35

            </span>
            <span>
            </span>
            <span>
                联合节目
            </span>
        </div>

        <div class="section">
            <span>
               16 : 35
            </span>
            <span>
            </span>
            <span>
                合影留念
            </span>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue' ;

    export default {
        name: 'metting',
        components: {
            HelloWorld
        },
        methods: {}
    }
</script>
<style scoped>
    .metting {
        width: 100%;
        background: url('../assets/flow/metting.png') round;
        padding-bottom: 20px;
    }

    .coverImage {
        width: 100%;
        margin-top: 10%;
        margin-bottom: 4%;
    }

    .section {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        color: #e2c588;
        margin-bottom: 46px;
    }

    .section > span:nth-of-type(1) {
        width: 30%;
        text-align: right;
    }

    .section > span:nth-of-type(2) {
        width: 13px;
        height: 13px;
        background: #e2c588;
        border-radius: 50%;
        margin-right: 13px;
        margin-left: 13px;
        position: relative;
    }

    .section > span:nth-of-type(2)::after{
        display: block;
        content: "";
        width: 2px;
        height: 40px;
        background: #e2c588;
        top: 20px;
        position: relative;
        left: 5px;
    }

    .section > span:nth-of-type(3) {
        width: 50%;
        text-align: left;
    }
</style>
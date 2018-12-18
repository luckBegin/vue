<template>
    <div class="metting">
        <img src="../assets/flow/title.png" alt="" class="coverImage">
        <div class="section">
            <span>
                14:00 - 14:10
            </span>
            <span>
            </span>
            <span>
                机场集团领导致欢迎辞
            </span>
        </div>
        <div class="section">
            <span>
                14:10 - 14:20
            </span>
            <span>
            </span>
            <span>
                云南航空市场推介
            </span>
        </div>
        <div class="section">
            <span>
                14:10 - 16:30
            </span>
            <span>
            </span>
            <span>
                节目及颁奖仪式
            </span>
        </div>
        <div class="section">
            <span>
                16:30
            </span>
            <span>
            </span>
            <span>
                活动结束
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
        height: 100%;
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
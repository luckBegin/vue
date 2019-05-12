<template>
    <div class="metting">
        <!--<img src="../assets/flow/title.png" alt="" class="coverImage">-->
        <div style="height:200px;">

        </div>

        <div class="section" :class=" now > '0000' ? 'row_active' : '' ">
            <span class = 'row row_left row_active_left1'  :class=" now > '0000' ? 'row_active_left' : '' ">
                <span>
                    5月14日
                </span>
                <span>
                    全天
                </span>
            </span>
            <span>
            </span>
            <span class="row row_right">
                <span>
                    嘉宾报道入住
                </span>
                <span>滇西明珠花园酒店</span>
            </span>
        </div>

        
        <div class="section" >
            <span class = 'row row_left'>
                <span>
                    待定
                </span>
                <span style="opacity:0">
                    全天
                </span>
            </span>
            <span>
            </span>
            <span class="row row_right">
                <span>
                    晚餐
                </span>
                <span>待定</span>
            </span>
        </div>

          <div class="section" :class=" now > '0730' ? 'row_active' : '' ">
            <span class = 'row row_left'  :class=" now > '0730' ? 'row_active_left' : '' ">
                <span>
                    5月15日
                </span>
                <span>
                    07:30 - 09:00
                </span>
            </span>
            <span>
            </span>
            <span class="row row_right">
                <span>
                    早餐
                </span>
                <span>滇西明珠花园酒店自助餐厅</span>
            </span>
        </div>

        <div class="section"  :class=" now > '0900' ? 'row_active' : '' ">
            <span class = 'row row_left'  :class=" now > '0900' ? 'row_active_left' : '' ">
                <span>
                    09:00 - 09:15
                </span>
                <span style="opacity:0">
                    07:30 - 09:00
                </span>
            </span>
            <span>
            </span>
            <span class="row row_right">
                <span>
                    嘉宾入场
                </span>
                <span>滇西明珠花园酒店聚贤堂</span>
            </span>
        </div>

 <div class="section"  :class=" now > '0915' ? 'row_active' : '' ">
            <span class = 'row row_left' :class=" now > '09091500' ? 'row_active_left' : '' ">
                <span>
                    09:15 - 09:30
                </span>
                <span style="opacity:0">
                    07:30 - 09:00
                </span>
            </span>
            <span>
            </span>
            <span class="row row_right">
                <span>
                    丽江机场领导致辞
                </span>
                <span>滇西明珠花园酒店聚贤堂</span>
            </span>
        </div>

        
        <div class="section"  :class=" now > '0930' ? 'row_active' : '' ">
            <span class = 'row row_left' :class=" now > '0930' ? 'row_active_left' : '' ">
                <span>
                    09:30 - 09:45
                </span>
                <span style="opacity:0">
                    07:30 - 09:00
                </span>
            </span>
            <span>
            </span>
            <span class="row row_right">
                <span>
                    丽江市文旅局作丽江旅游市场推介
                </span>
                <span>滇西明珠花园酒店聚贤堂</span>
            </span>
        </div>


 <div class="section"  :class=" now > '0945' ? 'row_active' : '' ">
            <span class = 'row row_left'  :class=" now > '0945' ? 'row_active_left' : '' ">
                <span>
                    09:45 - 10:45
                </span>
                <span style="opacity:0">
                    07:30 - 09:00
                </span>
            </span>
            <span>
            </span>
            <span class="row row_right">
                <span>
                    丽江市文旅局作丽江航空旅游市场分析及航线推介
                </span>
                <span>滇西明珠花园酒店聚贤堂</span>
            </span>
        </div>



 <div class="section"  :class=" now > '1045' ? 'row_active' : '' ">
            <span class = 'row row_left' :class=" now > '1045' ? 'row_active_left' : '' ">
                <span>
                    10:45 - 11:00
                </span>
                <span style="opacity:0">
                    07:30 - 09:00
                </span>
            </span>
            <span>
            </span>
            <span class="row row_right">
                <span>
                    泸沽湖机场作航空市场推介
                </span>
                <span>滇西明珠花园酒店聚贤堂</span>
            </span>
        </div>

 <div class="section"  :class=" now > '1110' ? 'row_active' : '' " style="margin-bottom:0">
            <span class = 'row row_left' :class=" now > '1110' ? 'row_active_left' : '' ">
                <span>
                    11:10 - 11:30
                </span>
                <span style="opacity:0">
                    07:30 - 09:00
                </span>
            </span>
            <span>
            </span>
            <span class="row row_right">
                <span>
                    丽江机场与相关单位签署战略合作协议
                </span>
                <span>滇西明珠花园酒店聚贤堂</span>
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
        data() {
			return {
                now: ""
			}
		},
        mounted: function(){
            const date = new Date() ;
            const h = date.getHours()  > 10  ? date.getHours()  + '': '0' + date.getHours() ;
            const m = date.getMinutes()  > 10? date.getMinutes()  + '' : '0' + date.getMinutes() ;
            this.$data.now = h + m ;
        } ,
        methods: {}
    }
</script>
<style scoped>
    .metting {
    width: 100%;
    background: url('../assets/flow/metting.png') round  ; 
    padding-bottom: 20px;
    min-height: 100%
    }

    .coverImage {
        width: 100%;
        margin-top: 10%;
        margin-bottom: 4%;
    }

    .section {
        width: 100%;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        color: #fff;
        margin-bottom: 17px;
        display: flex ;
    }

    .section > span:nth-of-type(1) {
        width: 30%;
        text-align: right;
    }

    .section > span:nth-of-type(2) {
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: 50%;
    margin-right: 13px;
    margin-left: 13px;
    position: relative;
    top: -8px;
    }

    .section > span:nth-of-type(2)::after{
    display: block;
    content: "";
    width: 2px;
    height: 48px;
    background: #fff;
    top: 13px;
    position: relative;
    left: 9px;
    }

    .section > span:nth-of-type(3) {
        width: 50%;
        text-align: left;
    }
    .row{
        display: flex;
        flex-direction: column ;
        justify-content: center;
        font-size: 13px;
    }
    .row_right{
        align-items: flex-start ;
    }
    .row_left{
        align-items: flex-end ;
        position: relative;
    }
    .row_active{
        color:rgb(18, 184, 255);
        position: relative
    }
    .row_active_left::after{
        content: "";
        display: block;
        width: 16px;
        height: 16px;
        background: rgb(18, 184, 255);
        border-radius: 50%;
        margin-right: 13px;
        margin-left: 31px;
        position: relative;
        top: -1px;
        position: absolute;
        z-index: 999;
    }
    .row_active_left1{
        top:1px !important ;
    }
</style>

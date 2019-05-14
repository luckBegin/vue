<template>
    <div class="metting">
        <img src="../assets/flow/flow_title.png" alt="" class="coverImage">
        <div class="section" :class=" now > '150000' ? 'row_active' : '' ">
            <span class = 'row row_left row_active_left1'  :class=" now > '150000' ? 'row_active_left' : '' ">
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

        
        <div class="section" :class=" now > '141230' ? 'row_active' : '' ">
            <span class = 'row row_left'   :class=" now > '141230' ? 'row_active_left' : '' ">
                <span>
                    12:30	
                </span>
                <span style="opacity:0">
                    全天
                </span>
            </span>
            <span>
            </span>
            <span class="row row_right">
                <span>
                    午餐
                </span>
                <span>云福春</span>
            </span>
        </div>

                <div class="section" :class=" now > '141830' ? 'row_active' : '' ">
            <span class = 'row row_left'  :class=" now > '141830' ? 'row_active_left' : '' ">
                <span>
                    18:30	
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
                <span>今生丽水</span>
            </span>
        </div>

          <div class="section" :class=" now > '150730' ? 'row_active' : '' ">
            <span class = 'row row_left'  :class=" now > '150730' ? 'row_active_left' : '' ">
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

        <div class="section"  :class=" now > '150900' ? 'row_active' : '' ">
            <span class = 'row row_left'  :class=" now > '150900' ? 'row_active_left' : '' ">
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

 <div class="section"  :class=" now > '150915' ? 'row_active' : '' ">
            <span class = 'row row_left' :class=" now > '150915' ? 'row_active_left' : '' ">
                <span>
                    09:15 - 09:25
                </span>
                <span style="opacity:0">
                    07:30 - 09:00
                </span>
            </span>
            <span>
            </span>
            <span class="row row_right">
                <span>
                    云南机场集团公司领导致辞
                </span>
                <span>滇西明珠花园酒店聚贤堂</span>
            </span>
        </div>

        
        <div class="section"  :class=" now > '150925' ? 'row_active' : '' ">
            <span class = 'row row_left' :class=" now > '150925' ? 'row_active_left' : '' ">
                <span>
                    09:25 - 09:35
                </span>
                <span style="opacity:0">
                    07:30 - 09:00
                </span>
            </span>
            <span>
            </span>
            <span class="row row_right">
                <span>
                    民航丽江监管局领导致辞
                </span>
                <span>滇西明珠花园酒店聚贤堂</span>
            </span>
        </div>

        <div class="section"  :class=" now > '150935' ? 'row_active' : '' ">
            <span class = 'row row_left' :class=" now > '150935' ? 'row_active_left' : '' ">
                <span>
09:35-09:55
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

 <div class="section"  :class=" now > '150955' ? 'row_active' : '' ">
            <span class = 'row row_left'  :class=" now > '150955' ? 'row_active_left' : '' ">
                <span>
09:55 - 10:55
                </span>
                <span style="opacity:0">
                    07:30 - 09:00
                </span>
            </span>
            <span>
            </span>
            <span class="row row_right">
                <span>
                    丽江机场做丽江航空旅游市场分析及航线推介
                </span>
                <span>滇西明珠花园酒店聚贤堂</span>
            </span>
        </div>



 <div class="section"  :class=" now > '151110' ? 'row_active' : '' ">
            <span class = 'row row_left' :class=" now > '151110' ? 'row_active_left' : '' ">
                <span>
                    11:10 - 11:25
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

        <div class="section"  :class=" now > '151125' ? 'row_active' : '' " >
            <span class = 'row row_left' :class=" now > '151125' ? 'row_active_left' : '' ">
                <span>
11:25 - 11:45

                </span>
                <span style="opacity:0">
                    07:30 - 09:00
                </span>
            </span>
            <span>
            </span>
            <span class="row row_right">
                <span>
                    相关方单位签署战略合作协议
                </span>
                <span>滇西明珠花园酒店聚贤堂</span>
            </span>
        </div>

        <div class="section"  :class=" now > '151145' ? 'row_active' : '' " >
            <span class = 'row row_left' :class=" now > '151145' ? 'row_active_left' : '' ">
                <span>
                    11:45 - 12:00
                </span>
                <span style="opacity:0">
                    07:30 - 09:00
                </span>
            </span>
            <span>
            </span>
            <span class="row row_right">
                <span>
                    参会嘉宾沟通交流和讨论发言
                </span>
                <span>滇西明珠花园酒店聚贤堂</span>
            </span>
        </div>
        
          <div class="section"  :class=" now > '151200' ? 'row_active' : '' " >
            <span class = 'row row_left' :class=" now > '151200' ? 'row_active_left' : '' ">
                <span>
                   12:00 - 13:00
                </span>
                <span style="opacity:0">
                    07:30 - 09:00
                </span>
            </span>
            <span>
            </span>
            <span class="row row_right">
                <span>
                    午餐（自助餐）
                </span>
                <span>滇西明珠花园酒店自助餐厅</span>
            </span>
        </div>

 <div class="section"  :class=" now > '151600' ? 'row_active' : '' " >
            <span class = 'row row_left' :class=" now > '151600' ? 'row_active_left' : '' ">
                <span>
                    16:00 - 16:15
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

         <div class="section"  :class=" now > '151615' ? 'row_active' : '' " >
            <span class = 'row row_left' :class=" now > '151615' ? 'row_active_left' : '' ">
                <span>
                    16:15 - 16:30
                </span>
                <span style="opacity:0">
                    07:30 - 09:00
                </span>
            </span>
            <span>
            </span>
            <span class="row row_right">
                <span>
                    丽江市人民政府领导致辞
                </span>
                <span>滇西明珠花园酒店聚贤堂</span>
            </span>
        </div>

         <div class="section"  :class=" now > '151630' ? 'row_active' : '' " >
            <span class = 'row row_left' :class=" now > '151630' ? 'row_active_left' : '' ">
                <span>
                   16:30 - 17:00
                </span>
                <span style="opacity:0">
                    07:30 - 09:00
                </span>
            </span>
            <span>
            </span>
            <span class="row row_right">
                <span>
                    丽江市地方民航发展局通报航空公司获奖情况
                </span>
                <span>滇西明珠花园酒店聚贤堂</span>
            </span>
        </div>

 <div class="section"  :class=" now > '151700' ? 'row_active' : '' " >
            <span class = 'row row_left' :class=" now > '151700' ? 'row_active_left' : '' ">
                <span>
                    17:00 - 17:30
                </span>
                <span style="opacity:0">
                    07:30 - 09:00
                </span>
            </span>
            <span>
            </span>
            <span class="row row_right">
                <span>
                    丽江市人民政府领导为获表彰航空公司颁奖
                </span>
                <span>滇西明珠花园酒店聚贤堂</span>
            </span>
        </div>
         <div class="section"  :class=" now > '151730' ? 'row_active' : '' " >
            <span class = 'row row_left' :class=" now > '151730' ? 'row_active_left' : '' ">
                <span>
                   17:30-19:30
                </span>
                <span style="opacity:0">
                    07:30 - 09:00
                </span>
            </span>
            <span>
            </span>
            <span class="row row_right">
                <span>
                    晚宴(丽江市政府宴请)

                </span>
                <span>待定</span>
            </span>
        </div>

        <img src="../assets/flow/lineA.png" alt="" class="coverImage">
        <div class="section" :class=" now > '160730' ? 'row_active' : '' ">
            <span class = 'row row_left row_active_left1'  :class=" now > '160730' ? 'row_active_left' : '' ">
                <span>
                 5月16日
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
        <div class="section" :class=" now > '160900' ? 'row_active' : '' ">
            <span class = 'row row_left row_active_left1'  :class=" now > '160900' ? 'row_active_left' : '' ">
                <span>
                  09:00 - 10:00
                </span>
                <span style="opacity:0">
                    07:30 - 09:00
                </span>
            </span>
            <span>
            </span>
            <span class="row row_right">
                <span>
                    酒店出发前往玉龙雪山景区
                </span>
                <span style="opacity:0"> 滇西明珠花园酒店自助餐厅</span>
            </span>
        </div>
        <div class="section" :class=" now > '161000' ? 'row_active' : '' ">
            <span class = 'row row_left row_active_left1'  :class=" now > '161000' ? 'row_active_left' : '' ">
                <span>
                  10:00 - 12:00
                </span>
                <span style="opacity:0">
                    07:30 - 09:00
                </span>
            </span>
            <span>
            </span>
            <span class="row row_right">
                <span>
                    游览考察玉龙雪山景区
                </span>
                <span style="opacity:0"> 滇西明珠花园酒店自助餐厅</span>
            </span>
        </div>
         <div class="section" :class=" now > '161200' ? 'row_active' : '' ">
            <span class = 'row row_left row_active_left1'  :class=" now > '161200' ? 'row_active_left' : '' ">
                <span>
                  12:00 - 14:00
                </span>
                <span style="opacity:0">
                    07:30 - 09:00
                </span>
            </span>
            <span>
            </span>
            <span class="row row_right">
                <span>
                    午餐
                </span>
                <span> 雪厨餐厅</span>
            </span>
        </div>
         <div class="section" :class=" now > '161400' ? 'row_active' : '' ">
            <span class = 'row row_left row_active_left1'  :class=" now > '161400' ? 'row_active_left' : '' ">
                <span>
                  14:00 - 14:20
                </span>
                <span style="opacity:0">
                    07:30 - 09:00
                </span>
            </span>
            <span>
            </span>
            <span class="row row_right">
                <span>
                    前往印象丽江
                </span>
                <span style="opacity:0"> 雪厨餐厅</span>
            </span>
        </div>
                 <div class="section" :class=" now > '161400' ? 'row_active' : '' ">
            <span class = 'row row_left row_active_left1'  :class=" now > '161400' ? 'row_active_left' : '' ">
                <span>
                  14:00 - 15:20
                </span>
                <span style="opacity:0">
                    07:30 - 09:00
                </span>
            </span>
            <span>
            </span>
            <span class="row row_right">
                <span>
                    观看印象丽江演出
                </span>
                <span style="opacity:0"> 雪厨餐厅</span>
            </span>
        </div>
         <div class="section" :class=" now > '161520' ? 'row_active' : '' ">
            <span class = 'row row_left row_active_left1'  :class=" now > '161520' ? 'row_active_left' : '' ">
                <span>
                  15:20 - 15:40
                </span>
                <span style="opacity:0">
                    07:30 - 09:00
                </span>
            </span>
            <span>
            </span>
            <span class="row row_right">
                <span>
                    前往蓝月谷景区
                </span>
                <span style="opacity:0"> 雪厨餐厅</span>
            </span>
        </div>
         <div class="section" :class=" now > '161630' ? 'row_active' : '' ">
            <span class = 'row row_left row_active_left1'  :class=" now > '161630' ? 'row_active_left' : '' ">
                <span>
                 16:30 - 17:30
                </span>
                <span style="opacity:0">
                    07:30 - 09:00
                </span>
            </span>
            <span>
            </span>
            <span class="row row_right">
                <span>
                    返回酒店
                </span>
                <span style="opacity:0"> 雪厨餐厅</span>
            </span>
        </div>
         <div class="section" :class=" now > '161800' ? 'row_active' : '' ">
            <span class = 'row row_left row_active_left1'  :class=" now > '161800' ? 'row_active_left' : '' ">
                <span>
                    18:00-20:00	
                </span>
                <span style="opacity:0">
                    07:30 - 09:00
                </span>
            </span>
            <span>
            </span>
            <span class="row row_right">
                <span>
                    晚餐
                </span>
                <span> 龙安餐厅</span>
            </span>
        </div>
         <img src="../assets/flow/lineB.png" alt="" class="coverImage">
        <div class="section" :class=" now > '160730' ? 'row_active' : '' ">
            <span class = 'row row_left row_active_left1'  :class=" now > '160730' ? 'row_active_left' : '' ">
                <span>
                 5月16日
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
        <div class="section" :class=" now > '160900' ? 'row_active' : '' ">
            <span class = 'row row_left row_active_left1'  :class=" now > '160900' ? 'row_active_left' : '' ">
                <span>
                    09:00-11:30
                </span>
               <span style="opacity:0">
                    07:30 - 09:00
                </span>
            </span>
            <span>
            </span>
            <span class="row row_right">
                <span>
                    酒店出发前往老君山景区
                </span>
                <span style="opacity:0">滇西明珠花园酒店自助餐厅</span>
            </span>
        </div>
        <div class="section" :class=" now > '161130' ? 'row_active' : '' ">
            <span class = 'row row_left row_active_left1'  :class=" now > '161130' ? 'row_active_left' : '' ">
                <span>
                   11:30 - 12:30
                </span>
               <span style="opacity:0">
                    07:30 - 09:00
                </span>
            </span>
            <span>
            </span>
            <span class="row row_right">
                <span>
                    午餐
                </span>
                <span>老君山景区</span>
            </span>
        </div>
         <div class="section" :class=" now > '161230' ? 'row_active' : '' ">
            <span class = 'row row_left row_active_left1'  :class=" now > '161230' ? 'row_active_left' : '' ">
                <span>
                   12:30 - 15:00
                </span>
               <span style="opacity:0">
                    07:30 - 09:00
                </span>
            </span>
            <span>
            </span>
            <span class="row row_right">
                <span>
                    游览考察老君山景区
                </span>
                <span style="opacity:0">老君山景区</span>
            </span>
        </div>
        <div class="section" :class=" now > '161500' ? 'row_active' : '' ">
            <span class = 'row row_left row_active_left1'  :class=" now > '161500' ? 'row_active_left' : '' ">
                <span>
                   15:00 - 17:30
                </span>
               <span style="opacity:0">
                    07:30 - 09:00
                </span>
            </span>
            <span>
            </span>
            <span class="row row_right">
                <span>
                    返回酒店
                </span>
                <span style="opacity:0">老君山景区</span>
            </span>
        </div>
         <div class="section" :class=" now > '161800' ? 'row_active' : '' ">
            <span class = 'row row_left row_active_left1'  :class=" now > '161800' ? 'row_active_left' : '' ">
                <span>
                    18:00-20:00	
                </span>
                <span style="opacity:0">
                    07:30 - 09:00
                </span>
            </span>
            <span>
            </span>
            <span class="row row_right">
                <span>
                    晚餐
                </span>
                <span> 龙安餐厅</span>
            </span>
        </div>
        <img src="../assets/flow/flow_title.png" alt="" class="coverImage">
           <div class="section" :class=" now > '170000' ? 'row_active' : '' ">
            <span class = 'row row_left row_active_left1'  :class=" now > '170000' ? 'row_active_left' : '' ">
                <span>
                    5月17日
                </span>
                <span>
                    全天
                </span>
            </span>
            <span>
            </span>
            <span class="row row_right">
                <span>
                    嘉宾返程
                </span>
                <span>送机</span>
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
            const day = date.getDate() ;
            const h = date.getHours()  > 10  ? date.getHours()  + '': '0' + date.getHours() ;
            const m = date.getMinutes()  > 10? date.getMinutes()  + '' : '0' + date.getMinutes() ;
            this.$data.now = day +  h + m ;
        } ,
        methods: {}
    }
</script>
<style scoped>
    .metting {
    width: 100%;
    background: url('../assets/flow/metting.jpg') round  ; 
    padding-bottom: 20px;
    min-height: 100%
    }

    .coverImage {
        width: 65%;
        margin-top: 15%;
        margin-bottom: 10%;
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
    height: 59px;
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

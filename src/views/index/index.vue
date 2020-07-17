<template>
    <div class="sy-box">
        <!-- 卡片 -->
        <ul class="sy-card">
            <li>
                <div class="card-icon">
                    <span class="el-icon-office-building"></span>
                </div>
                <div class="card-con">
                    <p class="card-text">签约入驻企业</p>
                    <p class="card-num"><i>6544</i>个</p>
                </div>
            </li>
            <li>
                <div class="card-icon">
                    <span class="el-icon-user"></span>
                </div>
                <div class="card-con">
                    <p class="card-text">签约入驻个人</p>
                    <p class="card-num"><i>10987</i>人</p>
                </div>
            </li>
            <li>
                <div class="card-icon">
                    <span class="el-icon-document"></span>
                </div>
                <div class="card-con">
                    <p class="card-text">累计发布任务</p>
                    <p class="card-num"><i>23987</i>个</p>
                </div>
            </li>
            <li>
                <div class="card-icon">
                    <span class="el-icon-document-checked"></span>
                </div>
                <div class="card-con">
                    <p class="card-text">累计结算金额</p>
                    <p class="card-num"><i>876432.00</i>元</p>
                </div>
            </li>
            <li>
                <div class="card-icon">
                    <span class="el-icon-printer"></span>
                </div>
                <div class="card-con">
                    <p class="card-text">累计开票金额</p>
                    <p class="card-num"><i>76432.00</i>元</p>
                </div>
            </li>
        </ul>
        <!-- echarts -->
        <div class="chart-top">
            <!-- 左侧 -->
            <div class="chart-left">
                <h3>签约入驻企业行业分布</h3>
                <div id="myChart" :style="{width: '1055px', height: '550px'}"></div>
            </div>
            <!-- 右侧 -->
            <div class="chart-right">
                <h3>企业用工流程</h3>
                <div class="step-box">
                    <ul class="step-list">
                        <li>
                            <div class="step-ciy"></div>
                            <div class="step-con">
                                <p class="step-text">企业工商信息核验</p>
                                <p class="step-text1"></p>
                            </div>
                        </li>
                        <li>
                            <div class="step-ciy"></div>
                            <div class="step-con">
                                <p class="step-text">平台生成并签署合同</p>
                                <p class="step-text1">平台的框架协议电子签</p>
                            </div>
                        </li>
                        <li>
                            <div class="step-ciy"></div>
                            <div class="step-con">
                                <p class="step-text">企业签署合同</p>
                                <p class="step-text1"></p>
                            </div>
                        </li>
                        <li>
                            <div class="step-ciy"></div>
                            <div class="step-con">
                                <p class="step-text">企业入驻成功</p>
                                <p class="step-text1"></p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 饼图 -->
        <div class="pie-box">
            <div class="pie-left">
                <h3>累计发布任务类型分布</h3>
                <div id="myChart2" :style="{width: '742px', height: '480px'}"></div>
            </div>
            <div class="pie-right">
                <h3>累计发布任务状态分布</h3>
                <div id="myChart3" :style="{width: '742px', height: '480px'}"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'index',
    data(){
        return{

        }
    },
    mounted(){
        this.drawLine();
        this.drawLine2();
        this.drawLine3();
    },
    methods: {
        drawLine(){
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChart'))
            // 绘制图表
            myChart.setOption({
                // title: { text: '' },
                color: ['#f08043'],
                tooltip: {},
                grid: {
                    top: '20'
                },
                xAxis: {
                    data: ["互联网","文化娱乐","餐饮","住宿","医疗","人工智能","旅游业","制造业","建筑业","批发零售","IT服务","电子商务"]
                },
                yAxis: [
                    {
                        axisLine: {show:false},
                        axisTick: {show:false}
                    }
                ],
                series: [{
                    name: '数量',
                    type: 'bar',
                    data: [400, 452, 911, 442, 158, 838, 931, 589, 784, 504, 955, 92],
                    barWidth:40,
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,      //开启显示
                                position: 'top', //在上方显示
                                textStyle: {     //数值样式
                                    color: 'black',
                                    fontSize: 16
                                }
                            }
                        }
                    }
                }]
            });
        },
        drawLine2(){
            let myChart2 = this.$echarts.init(document.getElementById('myChart2'))
            var option = {
                color: ['#73a0fa','#73deb3','#f7c739'],
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c}'
                },
                legend: {
                    //orient: 'vertical',
                    //top: 'middle',
                    left: 'center',
                    bottom: 20,
                    data: ['岗位', '项目', '灵工'],
                    icon: "circle"
                },
                series: [
                    {
                        name: '数据来源',
                        type: 'pie',
                        radius: ['50%', '70%'],
                        center: [371, 200],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '18',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            {value: 765, name: '岗位'},
                            {value: 219, name: '项目'},
                            {value: 457, name: '灵工'}
                        ],
                        itemStyle:{ 
                            normal:{ 
                            label:{ 
                                show: true, 
                                formatter: '{b} : {c}' 
                                }, 
                                labelLine :{show:true} 
                            } 
                        }
                    }
                ]
            };
            // 绘制图表
            myChart2.setOption(option);
        },
        drawLine3(){
            let myChart3 = this.$echarts.init(document.getElementById('myChart3'))
            var option = {
                color: ['#73a0fa','#73deb3','#f08043','#f7c739'],
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c}'
                },
                legend: {
                    //orient: 'vertical',
                    //top: 'middle',
                    left: 'center',
                    bottom: 20,
                    data: ['待审核', '已驳回', '进行中', '已结束'],
                    icon: "circle"
                },
                series: [
                    {
                        name: '数据来源',
                        type: 'pie',
                        radius: ['50%', '70%'],
                        center: [371, 200],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '18',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            {value: 765, name: '待审核'},
                            {value: 219, name: '已驳回'},
                            {value: 457, name: '进行中'},
                            {value: 220, name: '已结束'}
                        ],
                        itemStyle:{ 
                            normal:{ 
                            label:{ 
                                show: true, 
                                formatter: '{b} : {c}' 
                                }, 
                                labelLine :{show:true} 
                            } 
                        }
                    }
                ]
            };
            // 绘制图表
            myChart3.setOption(option);
        },
    }
}
</script>

<style scoped lang="scss">
// 卡片
.sy{
    &-card{
        display: flex;
        margin-top: 26px;
    }
    &-card li{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20%;
        height: 152px;
        background-color: #ffffff;
        margin-left: 10px;
    }
    &-card li:first-child{
        margin-left: 0;
    }
}
.card{
    &-icon{
        width: 46px;
        height: 46px;
        line-height: 46px;
        font-size: 46px;
        text-align: center;
        color: #f08043;
    }
    &-con{
        margin-left: 12px;
    }
    &-text{
        font-size: 16px;
        color: #7f807e;
        margin-bottom: 5px;
    }
    &-num{
        font-size: 14px;
        color: #7f807e;
    }
    &-num i{
        font-style: normal;
        font-size: 24px;
        color: #7f807e;
        margin-right: 8px;
    }
}
// echarts
.chart{
    &-top{
        display: flex;
        justify-content: space-between;
        margin-top: 26px;
    }
    &-left{
        h3{padding-left: 55px;}
        width: 1055px;
        background-color: #ffffff;
        margin-right: 15px;
    }
    &-right{
        h3{padding-left: 45px;}
        width: 430px;
        background-color: #ffffff;
    }
    &-left h3, &-right h3{
        height: 90px;
        line-height: 90px;
        font-size: 18px;
        color: #474847;
    }
}
// 企业用工流程
.step{
    &-box{
        padding-top: 50px;
    }
    &-list{
        padding-left: 45px;
    }
    &-list li{
        display: flex;
        height: 120px;
    }
    &-ciy{
        position: relative;
        z-index: 9;
        height: 28px;
        width: 28px;
        border-radius: 50%;
        border: 4px solid #f08043;
        margin-right:32px ;
        background-color: #ffffff;
    }
    &-ciy::after{
        content: "";
        position: absolute;
        left: 50%;
        top: 24px;
        display: block;
        width: 2px;
        height: 92px;
        background-color: #e9e6e6;
    }
    &-list li:first-child &-ciy::before{
        content: "";
        position: absolute;
        bottom: 24px;
        left: 50%;
        display: block;
        width: 2px;
        height: 30px;
        background-color: #e9e6e6;
    }
    &-list li:last-child &-ciy::after{
        height: 30px;
    }
    &-text{
        font-size: 16px;
        color: #474847;
        font-weight: bold;
        margin-top: 4px;
    }
    &-text1{
        font-size: 14px;
        color: #838682;
        margin-top: 10px;
    }
}
// 饼图
.pie{
    &-box{
        display: flex;
        justify-content: space-between;
        margin-top: 26px;
    }
    &-left, &-right{
        width: 50%;
        background-color: #ffffff;
    }
    &-left h3, &-right h3{
        height: 90px;
        line-height: 90px;
        font-size: 18px;
        color: #474847;
        padding-left: 45px;
    }
    &-left{
        margin-right: 15px;
    }
}
</style>
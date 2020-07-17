<template>
    <div class="header-box">
        <div class="header-con">
            <!-- shang -->
            <div class="header-top">
                <div class="header-logo"><img src="../../assets/logo.png" alt="logo"></div>
                <div class="header-user">
                    <ul class="header-img">
                        <li>
                            <img src="https://api.xlinggong.cn/pic/logo/logo.png" alt="headimg">
                            <span>admin</span>
                            <i class="el-icon-arrow-down"></i>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- xia -->
            <div class="bottom-box">
                <ul class="bottom-nav">
                    <li :class="index==idx?'nav-active':''" v-for="(item,idx) in navData" :key="idx" @click="navlink(idx)">
                        <i :class="item.icon"></i>
                        <span>{{item.text}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            index: '0',
            navData: [
                {
                    text: 'DASHBOARD',
                    icon: 'fa fa-bar-chart'
                },
                {
                    text: '企业资质与协议',
                    icon: 'fa fa-file-pdf-o'
                },
                {
                    text: '企业信息',
                    icon: 'el-icon-office-building'
                },
                {
                    text: '个人信息',
                    icon: 'el-icon-user'
                },
                {
                    text: '任务信息',
                    icon: 'el-icon-document'
                },
                {
                    text: '结算信息',
                    icon: 'el-icon-document-checked'
                },
                {
                    text: '发票信息',
                    icon: 'el-icon-printer'
                }
            ]
        }
    },
    methods: {
        navlink(idx){
            this.index = idx;
        }
    }
}
</script>

<style scoped lang="scss">
.header{
    &-box{
        width: 100%;
        height: 180px;
        background-color: #ffffff;
        -moz-box-shadow:0px 4px 5px #dee1e5; 
        -webkit-box-shadow:0px 4px 5px #dee1e5; 
        box-shadow:0px 4px 5px #dee1e5;
    }
    &-con{
        width: 1500px;
        margin: 0 auto 0;
        padding-top: 0.1px;
    }
    &-top{
        display: flex;
        justify-content: space-between;
        height: 45px;
        margin-top: 24px;
    }
    &-logo{
        width: 130px;
        img{
            width: 100%;
        }
    }
    &-user{
        cursor: pointer;
    }
    &-img{height: 100%;}
    &-img img{
        width: 26px;
        height: 26px;
        border-radius: 50%;
    }
    &-img li{
        height: 100%;
        display: flex;
        align-items: center;
    }
    &-img span{
        display: inline-block;
        width: 70px;
        text-align: center;
    }
    &-img i{
        font-style: normal;
        display: inline-block;
    }
}
// 导航栏
.bottom{
    &-box{
        margin-top: 15px;
    }
    &-nav{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 60px;
        background-color: #f0f2f5;
    }
    &-nav li{
        display: flex;
        align-items: center;
        cursor: pointer;
        padding: 0 52px;
        line-height: 60px;
        font-size: 16px;
        color: #7f807e;
    }
    &-nav i{
        display: inline-block;
        width: 22px;
        height: 22px;
        text-align: center;
        line-height: 22px;
        margin-right: 8px;
    }
}
.nav-active{
    background-color: #63b8e9;;
    color: #ffffff!important;
}
</style>
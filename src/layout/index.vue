<template>
    <div class="app-wrapper">
        <!-- 导航栏 -->
        <div class="navbar-container">
            <Header />
        </div>
        <!-- 主体区域 -->
        <div class="main-container">
            <AppMain />
        </div>
    </div>
</template>

<script>
import { Header, AppMain } from './components'
export default {
    name: 'Layout',
    components: {
        AppMain,
        Header
    }
}
</script>

<style scoped lang="scss">
.app-wrapper{
    background-color: #f0f2f5;
}
.main{
    &-container{
        width: 1500px;
        margin: 0 auto 0;
    }
}
</style>
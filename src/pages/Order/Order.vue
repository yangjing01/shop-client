<template>
    <section class="order">

        <HeaderTop title="订单列表"></HeaderTop>
        <section class="order_no_login">
            <img src="../../pages/waimai.png">
            <h3>登录后查看订单</h3>
            <button>立即登录</button>
        </section>
    </section>
</template>

<script>
    import HeaderTop from "../../components/HeaderTop/HeaderTop";
    export default {
        name: "Order",
        components:{
            HeaderTop
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    @import "../../common/stylus/mixins.styl"
.order
    width 100%
    .order_no_login
        padding-top 140px
        width 60%
        margin 0 auto
        text-align center
        >img
            display block
            width 50%
            margin 0 auto
        >h3
            padding 10px 0
            font-size 17px
            color #6a6a6a
        button
            display inline-block
            width 100px
            height 40px
            font-size 14px
            border-radius 5px
            color #fff
            border 0
            outline none
            background-color #02a674
            padding 10px 10px


</style>

<template>
    <header class="header">
        <slot name="left"></slot>
        <span class="header_title">
            <span class="header_title_text ellipsis">{{title}}</span>
        </span>
        <slot name="right"></slot>
    </header>
</template>

<script>
    export default {
        name: "HeaderTop",
        props:{
            title:String
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .header
        background-color #02a774
        position fixed
        z-index 100
        left 0
        top 0
        width 100%
        height 45px
        .header_search
            width 10%
            height 50%
            position absolute
            left 15px
            top 50%
            transform translateY(-50%)
            cursor pointer
            .icon-sousuo_huaban1
                font-size 24px
                color #fff
        .header_title
            position absolute
            left 45%
            top 50%
            transform translate(-50%,-50%)
            color #fff
            width 50%
            text-align center
            .header_title_text
                font-size 16px
                color #fff
                display block
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
        .header_login
            font-size 14px
            position absolute
            right -40px
            top 50%
            transform translateY(-50%)
            width 50%
            color #fff
            text-align center
            cursor pointer
            .header_login_text
                color #fff
</style>

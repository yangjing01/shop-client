<template>
    <!--   搜索-->
    <section class="search">
        <HeaderTop title="搜索">
        </HeaderTop>
        <form class="search_form" action="#">
            <input type="search" name="search" placeholder="请输入商家或美食名称" class="search_input">
            <input type="submit" name="submit" class="search_submit">
        </form>
    </section>
</template>

<script>
    import HeaderTop from "../../components/HeaderTop/HeaderTop";
    export default {
        name: "Search",
        components:{
            HeaderTop
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    @import "../../common/stylus/mixins.styl"

.search
    width 100%
    height 100%
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
    .search_form
        clearFix()
        margin-top 45px
        background-color #ffffff
        padding 12px 8px
        input
            height 35px
            padding 0 4px
            border-radius 3px
            font-weight bold
            border 0
            &.search_input
                float left
                width 79%
                border 1px solid #f2f2f2
                font-size 14px
                color #333
                background-color #f2f2f
            &.search_submit
                float right
                width 18%
                border 4px solid #02a77
                font-size 16px
                color #fff
                background-color #02a774

</style>

//直接更新statede对个对象
/*
vuex 的 mutations 模块
*/
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS
} from './mutation-types'
export default {
    [RECEIVE_ADDRESS](state, {address}) {
        state.address = address
    },
    [RECEIVE_CATEGORYS](state, {categorys}) {
        state.categorys = categorys
    },
    [RECEIVE_SHOPS](state, {shops}) {
        state.shops = shops
    },
}

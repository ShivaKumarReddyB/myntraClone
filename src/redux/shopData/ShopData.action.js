import {SHOP_DATA} from'../../pages/Shop/shop.data'

import  {shopActionTypes}from './shopData.types'
 console.log(SHOP_DATA)

export const loadShopData =()=>({
    type:shopActionTypes.GET_SHOP_DATA,
    payload:SHOP_DATA
})
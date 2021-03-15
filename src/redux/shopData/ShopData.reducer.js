import {shopActionTypes} from "./shopData.types";

const INITIAL_STATE={
    shopData:[]
 }

 const shopReducer=(state=INITIAL_STATE,action)=>{
    switch (action.type){
        case shopActionTypes.GET_SHOP_DATA:
            return{
                ...state,
                shopData: action.payload
            }
        default:
            return state

    }




 }

export  default  shopReducer
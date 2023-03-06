import { def } from "@vue/shared";

export default {
    setHeaderTitle(state, routerName){
        switch(routerName){
            case 'day':
                state.headerTitle = '当天信息';
                break;
            case 'month':
                state.headerTitle = '近期信息';
                break;
            case 'year':
                state.headerTitle = '当年信息';
                break;
            default:
                state.headerTitle = '当天信息';
                break;
        }
    },
    setPlaceholder(state, routerName){
        const date = new Date();
        const year = date.getFullYear();
        const month = (date.getMonth()+1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');

        switch(routerName){
            case 'day':
                state.placeholder = `格式： ${year}${month}${day} (${year}年${month}月${day}日)`;
                break;
            case 'month':
                state.placeholder = `格式： ${year}${month} (${year}年${month}月)`;
                break;
            case 'year':
                state.placeholder = `格式： ${year} (${year}年)`;
                break;
            default:
                state.placeholder = `格式： ${year}${month}${day} (${year}年${month}月${day}日)`;
                break;
        }
    },
    setMaxLength(state, routerName){
        switch(routerName){
            case 'day':
                state.maxLength = "8";
                break;
            case 'month':
                state.maxLength = "6";
                break;
            case 'year':
                state.maxLength = "4";
                break;
            default:
                state.maxLength = "8";
                break;
        }
    },
    setField(state, routerName){
        state.field = routerName;
    },
    setErrorCode(state, errorCode){
        state.errorCode = errorCode;
    },
    setData(state, playload){
        const {field, data} = playload;
        switch(field){
            case 'day':
                state.dayData = data;
                break;
            case 'month':
                state.monthData = data;
                break;
            case 'year':
                state.yearData = data;
                break;
        }
    },
}
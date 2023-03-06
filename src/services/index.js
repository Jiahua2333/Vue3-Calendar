import { getDayData, getMonthData, getYearData } from "./requests";
import { formatChsDate } from "@/utils/utils"

const getData = async (store, field, date) => {
    let data = null;
    switch (field) {
        case "day":
            data = await getDayData(date);
            break;
        case "month":
            data = await getMonthData(date);
            break;
        case "year":
            data = await getYearData(date);
            break;
    }
    // console.log(data);

    let res = null;
    switch(field){
        case 'day':
            res = data.result.data
            res.date = formatChsDate(res.date,'day');
            res['year-month'] = formatChsDate(res['year-month'],'month');
            break;
        case 'month':
            break;
        case 'year':
            break;
    }

    store.commit("setErrorCode", data.error_code);
    if(data.error_code) return;
    store.commit("setData", {
        field,
        data: data.result.data,
    });
};

export default getData;
import {axiosPost, axiosGet} from "@/utils/http";
// import { reject, resolve } from "core-js/fn/promise";

const getDayData = date => {
    return new Promise((resolve, reject) => {
        axiosPost({
            url:'/api/calendar/day',
            data:{
                date
            },
            success:function(data){
                resolve(data)
            },
            error:function(err){
                reject(err)
            },
        })
    })
}

const getMonthData = yearMonth => {
    return new Promise((resolve, reject) => {
        axiosPost({
            url:'/api/calendar/month',
            data:{
                'year-month':yearMonth
            },
            success:function(data){
                resolve(data)
            },
            error:function(err){
                reject(err)
            },
        })
    })
}

const getYearData = year => {
    return new Promise((resolve, reject) => {
        axiosPost({
            url:'/api/calendar/year',
            data:{
                year
            },
            success:function(data){
                resolve(data)
            },
            error:function(err){
                reject(err)
            },
        })
    })
}

export {
    getDayData,
    getMonthData,
    getYearData,
}
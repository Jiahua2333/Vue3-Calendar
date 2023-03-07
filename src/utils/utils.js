//获取tab栏图标的日期
function getIconDate(field){
    const date = new Date();
    switch(field){
        case 'day':
            return date.getDate().toString().padStart(2,'0');
        case 'month':
            return (date.getMonth()+1).toString().padStart(2,'0');
        case 'year':
            return date.getFullYear().toString().substring(2);     
    }
}

function getCurDate(field){
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const day = date.getDate();

    switch(field){
        case 'day':
            return `${year}-${month}-${day}`;
        case 'month':
            return `${year}-${month}`;
        case 'year':
            return `${year}`;    
    }
}

function formatChsDate(date, field){
    const arr = date.split("-");
    switch(field){
        case 'day':
            return `${arr[0]}年${arr[1]}月${arr[2]}日`;
        case 'month':
            return `${arr[0]}年${arr[1]}月`;
        case 'year':
            return `${arr[0]}年`;    
    }
}

function formatUserDate(date){
    switch(date.length){
        case 8:
            let year = date.substring(0,4);
            let month = Number(date.substring(4,6));
            let day = Number(date.substring(6,8));
            return `${year}-${month}-${day}`;
        case 6:
            let year2 = date.substring(0,4);
            let month2 = Number(date.substring(4,6));
            return `${year2}-${month2}`;
        default:
            return date;
    }
}

export {
    getIconDate,
    getCurDate,
    formatChsDate,
    formatUserDate,
}
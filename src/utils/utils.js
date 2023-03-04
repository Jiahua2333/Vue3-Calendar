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

export {
    getIconDate,
}
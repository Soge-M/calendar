const monthes = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
const month1 = new Date();
const month2 = new Date(month1.getFullYear(),month1.getMonth()+1);
const month3 = new Date(month1.getFullYear(),month1.getMonth()+2);
const emptySquares=[];
const numberSquares=[];


function renderMonth(month, monthCounter){
    const nowMonth = monthes[month.getMonth()];
    const lastDayMonth = new Date(month.getFullYear(),month.getMonth()+1,0).getDate();
    const lastDayWeekt = new Date(month.getFullYear(),month.getMonth(),lastDayMonth).getDay();
    const firstDayWeekt = new Date(month.getFullYear(),month.getMonth(),1).getDay();
    const lastDayWeek = lastDayWeekt == 0? 7 : lastDayWeekt;
    const firstDayWeek = firstDayWeekt == 0? 7 : firstDayWeekt;
    const monthBox = document.createElement('div');
    monthBox.className = 'month';
    monthBox.innerHTML = buildMonthHead(nowMonth);
    const monthNumbers = document.createElement('div');
    monthNumbers.className = 'month__numbers';
    monthBox.appendChild(monthNumbers);
    document.getElementById(`calendar${monthCounter}`).appendChild(monthBox);
    const rows = [];
    for ( let i = 0; i < qtyRows(lastDayMonth, lastDayWeek, firstDayWeek);i++ ){
        rows[i] = document.createElement('div');
        rows[i].className = 'row row_' + (i+1);
        monthNumbers.appendChild(rows[i]);
    }
    let counterNumbers = 0;
    let emptySquaresController = true;
    for (let i = 0; i <qtyRows(lastDayMonth, lastDayWeek, firstDayWeek);i++){
        for (let j = 0; j < 7; j++){
            if (emptySquaresController == true){
                for (let k=0 ;k < firstDayWeek - 1 ; k++){
                    emptySquares[k] = document.createElement('div');
                    emptySquares[k].className = 'square square_empty';
                    rows[0].appendChild(emptySquares[k]);
                }   
                j = firstDayWeek - 1;
                emptySquaresController = false;
            }
            if (counterNumbers > lastDayMonth - 1 ) break;
            numberSquares[counterNumbers] = document.createElement('div');
            numberSquares[counterNumbers].className = `square square_filled`;
            numberSquares[counterNumbers].innerHTML = `<div class='square__number square__number-${counterNumbers+1}'>${counterNumbers+1}</div> \n <div class='square__indicator-1'></div>\n <div class='square__indicator-2'></div>`
            rows[i].appendChild(numberSquares[counterNumbers]);
            counterNumbers++;
        }
    }
}




function buildMonthHead (nowMonth){
    return `
    <div class=month__name>${nowMonth}</div>
    `
}


function qtyRows(lastDayMonth, lastDayWeek, firstDayWeek){
    k1 = lastDayMonth + (firstDayWeek-1) + (7-lastDayWeek);
    k = k1 / 7;
    return k
}

renderMonth(month1,1);
renderMonth(month2,2);
renderMonth(month3,3);




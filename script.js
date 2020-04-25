let data = [
    {principal: 2500, time: 1.8},
    {principal: 1000, time: 5},
    {principal: 3000, time: 1},
    {principal: 2000, time: 3}
];

let calc_interest = function (principal, rate, time) {
    let interest = (principal * rate * time)/100;
    return {principal: principal, rate: rate, time: time, interest:  interest};
}

function interestCalculator(arr) {
    let interestData = [];
    arr.forEach(element => {
        if(element.principal >= 2500 && (element.time > 1 && element.time < 3)) {
            let rate = 1;
            let calc = calc_interest(element.principal, element.time, rate);
            interestData.push(calc);
        } else if(element.principal >= 2500 && element.time >= 3) {
            let rate = 4;
            let calc = calc_interest(element.principal, element.time, rate);
            interestData.push(calc);
        } else if(element.principal < 2500 || element.time <= 1) {
            let rate = 2;
            let calc = calc_interest(element.principal, element.time, rate);
            interestData.push(calc);
        } else {
            let rate = 1;
            let calc = calc_interest(element.principal, element.time, rate);
            interestData.push(calc);
        }
    });
    console.log(interestData);
    return interestData;
}

interestCalculator(data);
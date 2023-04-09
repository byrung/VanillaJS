const calculator = {
    plus: function (a, b){
        return (a + b);
    },
    min: function (a, b){
        return a-b;
    },
    div: function (a, b){
        return a/b;
    },
    times: function (a, b){
        return a*b;
    },
    power: function (a, b){
        return a**b;
    }
};

const plusResult = calculator.plus(2,3);
/*const minResult = calculator.min(plusResult, 10);
const timesResult = calculator.times(10,minResult);
const divResult = calculator.div(timesResult, plusResult);
const powerResult = calculator.power(divResult, minResult);*/

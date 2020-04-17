// // 1.
// const age = +prompt('Введите Ваш возраст');
// if(age < 12 && age >0){
//     alert('Вы являетесь ребенком.')
// }else{
//     if(age < 18){
//         alert('Вы являетесь подростком.')
//     }
//     else{
//         if (age < 60){
//             alert('Вы являетесь взрослым.')
//         }
//         else{
//             alert('Вы являетесь пенсионером.')
//         }
//     }
// }

// 2.
// const char = +prompt('Введите число:');

// switch(char){
//     case 1: alert('Соответствующий символ: !');
//     break;
//     case 2: alert('Соответствующий символ: @');
//     break;
//     case 3: alert('Соответствующий символ: #');
//     break;
//     case 4: alert('Соответствующий символ: $');
//     break;
//     case 5: alert('Соответствующий символ: %');
//     break;
//     case 6: alert('Соответствующий символ: ^');
//     break;
//     case 7: alert('Соответствующий символ: &');
//     break;
//     case 8: alert('Соответствующий символ: *');
//     break;
//     case 9: alert('Соответствующий символ: (');
//     break;
//     case 0: alert('Соответствующий символ: )');
//     break;
//     default: alert('Это не число от 0 до 9.')
// }

// 3.

// let num = prompt('Введите трехзначное число:');
// if(num.length == 3){
//     num = Number(num);
//     const last_num = num%10;
//     num -= last_num;
//     num /=10;
    
//     const first_num = (num - num%10)/10
//     num %= 10;

//     if(first_num == num || last_num == num || first_num == last_num){
//         alert('В этом числе есть одинаковые цифры.')
//         }else{
//             alert('В этом числе нет одинаковых цифр.')
//             }
// }else{
//     alert('Вы ввели не трехзначное число.')
//     }


// // 4.

// const year = +prompt('Введите год:');

// if ((year%400 == 0) || (year%4 == 0 && year%100 !=0)){
//     alert('Год высокосный.');
// }else{
//     alert('Год невысокосный.')
// }

// // 5.

// let num = +prompt('Введите пятизначное число:');
// if(!isNaN(num)){
//     num = String(num);
//     if(num.length == 5){
//         if(num[0] == num[4] && num[1] == num[3]){
//             alert('Это число палиндром.')
//         }else{
//             alert('Это число не палиндром.')
//         }
//     }else{
//             alert('Вы ввели не пятизначное число.')
//         }
// }else{
//     alert('Вы ввели некорректное значение.')
// }

// //6

// const USD = prompt('Введите сумму:');

// switch(prompt('Введите валюту (EUR, UAN или AZN)')){
//     case 'EUR':
//         alert(`$${USD} = ${0.92 * USD} EUR.`)
//         break;
//     case 'UAN':
//         alert(`$${USD} = ${7.07 * USD} UAN.`)
//         break;
//     case 'AZN':
//         alert(`$${USD} = ${1.70 * USD} AZN.`)
//         break;
//     default:
//         alert('Данная валюта не поддерживается.')
//         break;
// }

// // 7

// let sum = +prompt('Введите сумму покупки:')

// if (sum >= 200){
//     if(sum <= 300){
//         alert(`Сумма к оплате: ${(sum - sum*0.03).toFixed(2)} грн. Скидка: ${(sum*0.03).toFixed(2)} грн.`);
//     }else{
//         if (sum <= 500){
//             alert(`Сумма к оплате: ${(sum - sum*0.05).toFixed(2)} грн. Скидка: ${(sum*0.05).toFixed(2)} грн.`);
//         }else{
//             alert(`Сумма к оплате: ${(sum - sum*0.07).toFixed(2)} грн. Скидка: ${(sum*0.07).toFixed(2)} грн.`);
//     }
// }}else{
//     alert(`Сумма к оплате: ${sum} грн.`);
// }


// // 8

// const len_circle = +prompt('Введите длину окружности:'),
// p_sqr = +prompt('Введите периметр квадрата.');

// if(len_circle / (3.14 * 2) <= p_sqr / 8){
//     alert('Круг поместится в квадрате.');
// } else{
//     alert('Круг не поместится в квадрате.');
// }


// // 9
// let mark = 0;
// alert('Привет! Задаю три вопроса, за каждый правильный ответ ты получишь +2 балла.');
// switch(+prompt('Каким по счету хокаге стал Наруто?\n 1 - пятым\n 2 - шестым\n 3 - седьмым')){
//     default:
//         break;
//     case 3:
//         mark+=2;
//         break;
// }

// switch(+prompt('Какую таблетку выбрал Нео?\n 1 - Красную\n 2 - Синюю\n 3 - Закинул обе')){
//     case 1:
//         mark+=2;
//         break;
//     default:
//         break;
// }
// switch(+prompt('Какие языки родственные?\n 1 - украинский и белорусский\n 2 - утиный и гусиный\n 3 - мексиканский и испанский')){
//     case 1:
//         mark+=2;
//         break;
//     default:
//         break;
// }

// alert(`Вы набрали: ${mark} баллов.`);

// 10

let day = +prompt('Введите день')
month = +prompt('Введите месяц:'),
year = +prompt('Введите год');

let key; // вспомогательная переменная 


if (month <= 12 && month >=0 && day > 0 && day <=31){


    if(month != 2){ 
        if (month == 1 || month == 3 || month ==  5 || month ==  7 || month == 8 || month == 10 || month == 12){ // 31 день
            key = 0;
            }else{ // 30 дней
                key = 1;
                }
            }else{ // февраль :) 
                key = 2;
            }


             switch(key){
                case 0: // 31 day
                    if (day != 31){
                        day += 1;
                    } else{
                        day = 1;
                        if (month == 12){
                            year +=1;
                            month = 1;
                        } else{
                            month +=1;
                        }
                    }
                    break;
                case 1: // 30 days
                    if (day != 30){
                        if (day > 30){
                            key = 4; // для того, чтобы надпись снизу не выводилась!)
                            alert(`У ${month} месяца максимум 30 дней!`); 
                        }
                        day += 1;
                        } else{
                            day = 1;
                            month +=1;
                }
                    break;

                case 2: // февраль высокосный
                if ((year%400 == 0) || (year%4 == 0 && year%100 !=0)){ 
                    if (day != 29){
                        if (day > 29){
                            key = 4
                            alert(`У ${month} месяца максимум 29 дней в высокосном году!`);
                        }
                        day +=1;
                    }else{
                        day = 1;
                        month+=1;
                    }
                } else{ // февраль обычный
                    if (day != 28){
                        if (day > 28){
                            key = 4
                            alert(`У ${month} месяца максимум 28 дней!`);
                        }
                        day +=1;
                    }else{
                        day = 1;
                        month+=1;
                    }
                    
                }
                    break;
                };
             


         if(key != 4){
         alert(`Следующий день: ${day}.${month}.${year};`);
        } else{
            alert('Вы ввели некорректное значение.');
        }
    }
else{
    alert('Вы ввели некорректное значение.');
}


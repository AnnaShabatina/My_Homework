'number' + 3 + 3 // number33 - конкатенація

null + 3 // 3 - так як null = 0; то 0 + 3  = 3

5 && "qwerty"// qwerty - тому що обідва truthy; то поверається правий;

+'40' + +'2' + "hillel"; // 42hillel - ми перетворили 40 та 2 в числа та додали один до одного, а потім додали до них рядок hillel, 42 перетворюе js в рядок.

'10' - 5 === 6; //false - так як з початку “10” js зробить неявне перетворення 10 в число та віднімє 5, то є 5, а 5 не дорівнює 6

true + false // 1 - неявне перетворення: true  - це 1, а false  - це 0, 1+0 = 1

'4px' - 3 // = NaN , так як 4px - не є число

'4' - 3 // = 1,так як з початку “4" js зробить неявне перетворення 4 в число та віднімє 3, то є 1

'6' + 3 ** 0; // 61, 3  внулевій степені це 1, а потім йде конкатенація

12 / '6' // 2 -6 неявно перетворюється, 12 поділене на 6.

'10' + (5 === 6); // 10false - 5 === 6 - це false, тому що 5 не дорівнює 6, а потім false перетворюється в рядок при додаванні к рядку.

null == '' // false - так як різні тіпи даних

3 ** (9 / 3); // 27 -  з початку в скобках дія. а потім возведення в куб

!!'false' == !!'true' //  true  - двойне заперечення повертає булеве значення без змін

0 || '0' && 1 // 1 - з початку порівнюємо && , строка ‘0’ true, 1 - теж true, повертає вторе значення - 1, потім 0 - це false, переходить до другого значення і повертає його

(+null == false) < 1; // false, +null  - унарний плюс , тому це 0, false = 0, та 0 ==0 - true =1; 1<1 - false

false && true || true // з почтаку && - та як перше false, то повертає його, далі || повертає друге значення , так як це перше істінне

false && (false || true); // false - у скобках повертає перше існінне значення true, потім && повертає false - перше ложне
(+null == false) < 1 ** 5; // false, +null  - унарний плюс , тому це 0, false = 0, та 0 ==0 - true =1; 1 у п'ятій це 1. 1<1 - false 

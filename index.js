function checkProbabilityTheory(count){
  const results = []; 
  const evennumbers = [];
  const oddnumbers = [];
  for(i = 0; i < count; i++){
     var res = Math.random();
     res *= 1000;
     res =  Math.round(res);
     console.log(res);
     results.push(res);
     if (res%2 ===0){
        evennumbers.push(res);
      }
      else{
       oddnumbers.push(res);
      }
   }

  const evenPercentage = (evennumbers.length/results.length)*100;
  const oddPercentage = (oddnumbers.length/results.length)*100;
 return  'Кількість згенерованих чисел: '+ results.length + ' \nПарних чисел: ' + evennumbers.length + '\nНе парних чисел: '+ oddnumbers.length +
 '\nВідсоток парних до не парних: ' + evenPercentage.toFixed(2)  + ':' +  oddPercentage.toFixed(2) ;
    
}
console.log(checkProbabilityTheory(8));




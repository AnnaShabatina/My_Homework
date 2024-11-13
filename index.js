
var services = {
"стрижка": "60 грн",
"гоління": "80 грн",
"Миття голови": "100 грн",
  price(){
    let pr = 0;
       for(let key in this) {
            if (typeof this[key] !== 'function') { 
              let allPrice = parseInt(this[key].slice(0,-3));
       
       pr += allPrice;
      }
  }
   return "загальна вартість наданих послуг:  " + pr + " грн";
 },
  minPrice(){
   const allPr = [];
  for(let key in this) {
            if (typeof this[key] !== 'function') { 
              let allPrice = parseInt(this[key].slice(0,-3)); 
              allPr.push(allPrice) ;
            
    }
      
 }
 let minPr = Math.min(...allPr);
 return "мінімальна ціна:  " +  minPr + " грн";
    
  },
  maxPrice(){
   const allPr = [];
  for(let key in this) {
            if (typeof this[key] !== 'function') { 
              let allPrice = parseInt(this[key].slice(0,-3)); 
              allPr.push(allPrice) ;
            
    }
      
    
 }
  let maxPr = Math.max(...allPr);
  return "максімальна ціна:  " +  maxPr + " грн";

  }

};
services['Розбите скло'] = "200 грн";

console.log(services.price());

console.log(services.minPrice());

console.log(services.maxPrice());

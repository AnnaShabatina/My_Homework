let lego = {
    name: "City",
    age: 10,
    prise: 100,
    numberofpieces: 2000,
   
   getInfo() {
        let info = '';
        for (let key in this) {
            if (typeof this[key] !== 'function') { 
                info += key + ': ' + this[key] + '\n';
            }
        }
        return info;
    }
  }
   

console.log(lego.getInfo());

lego.interest = "auto";

console.log(lego.getInfo());



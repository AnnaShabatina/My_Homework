var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];
var newArr = [];

for (let i = 0; i < arr.length; i++) {
 if (/^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/.test(arr[i].email))
  { 
    newArr.push(arr[i].email);
  }

    }
console.log(newArr)


  

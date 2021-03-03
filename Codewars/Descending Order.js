// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// Code -->

function descendingOrder(n){
    if(n >= 0){
      let num = n.toString();
      let num2 = num.split("");
      let ordenados = num2.sort((a, b) => b - a);
      let h = ordenados.join("");
      let result = parseInt(h) ;
  //     console.log(result);
      return result;
    }
  }
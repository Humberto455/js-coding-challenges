// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
// Code -->
function boolToWord( bool ){
    let ToF = bool.valueOf();
    if(ToF === true){
      let si = "Yes";
      return si;
    }else{
    let No = "No";
      return No;
    }
  
  }
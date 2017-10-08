/*Use recursion to create a function called 'triangleStars' that prints an upside-down triangle to the console of the given height.  So if we call your function with triangleStars(4), we should see:


function stars(n){
   if(n <= 0){
    return'';
   }
   return '*' + stars(n-1);
  }
function spaces(n){
   if(n <= 0){
    return'';
   }
   return ' ' + spaces(n-1);
  }

   
function plusFunc(spaceNum, starNum, n){
   if (n===0){
    return;
   }
   console.log(spaces(spaceNum)+stars(starNum));
   plusFunc(spaceNum+1, starNum-2, n-1);
   
  }
function printTriangle(n) {
   plusFunc(0, n*2-1, n);
  }

  printTriangle(5)*/
  
  
  
  /*Use recursion to create a function called pow which takes two arguments, base and n.  It should than return the result of multiplying the base times itself n time (that is to say, return base to the power of n).  Example: pow(2, 3) should return 8.  Remember that your function should work with any two positive integers greater than 1.



const power = function(base,n){
  
  if (n <= 0){
    
    return 1;
    
  }
  
  
  return base * power(base,n-1);
  
}
power(3,6);*/
  
  
  
  
  
  
  
  
  
  
  
  
  /*const reverse = function (str){
  
  const length = str.length;
  
  const reverseString = function(str,length){
    if (length <= 0){
      
      return"";
      
    }
    
    return str[length-1] + reverseString(str,--length);
    
  };
  
  return reverseString(str,length);
  
};
reverse("123456");*/


 





/*
function checkerBoard(depth) {
    function repeat(string, n){
      if(n <= 0) {
       return ''; 
      }
      return string + repeat(string, --n);
    }
    
    function print(depth, length) {
      if(length > depth) {
        return;
      }
      if(length % 2 === 0) {
        console.log(repeat(' *', depth));
      }
      else{
        console.log(repeat('* ', depth)); 
      }
      print(depth, ++length);
    }

    print(depth, 1);
  }
  
  checkerBoard(13);
*/














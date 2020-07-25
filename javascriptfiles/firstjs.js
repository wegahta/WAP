


function max(number1,number2){
    if(number1>number2){
    return number1;
    }
    else {
    return number2;
    }
}



function  maxOfThree(num1, num2, num3){
    if (num1 >= num2 && num1 >= num3){
        return num1;
    }
 else if (num2 >= num1 && num2 >= num3){
     return num2;
 }

 else{
     return num3;
 }
}



function isVowel(ch){

    if(ch==a||ch==e||ch==i||ch==u||ch==o ){
        return true;
        }
        else{
         return false;
        }
}

function sum(numArr=[]) {
    let sum=0;
    for(let i=0; i<numArr.length; i++){
        sum+=numArr[i];

    }

    return sum;
}

function multiply(numArr=[]) {
    let product=1;
    for(let i=0; i<numArr.length; i++){
        product*=numArr[i];

    }

    return product;
}

function reverse(name){
    let reversed='';
    for(let i=name.length-1; i>=0; i--){
        reversed=reversed+name.charAt(i);

    }

    return reversed;

}



function findLongestWord(arrWords=[]) {
    let longest;
    let len=0;
    for(let i=0; i<arrWords.length;i++){
        if(arrWords[i].length>len){
            len=arrWords[i].length;
            longest=arrWords[i];
        }

    }

    return longest;

}
function filterLongWords(arrWords=[], i){
   
    

    return arrWords.filter(word => word.length > i);
        

}

const a = [1,3,5,3,3]; 



const b = a.map(function(elem, i, array) {
  return elem * 10;
});



const c=a.filter(function(elem,i,array){
    return elem==3;
});



const d=a.reduce(function(preValue, elem, i, array){
    return preValue*elem;
});






function myFunctionTest(expected, found) {
    if (expected == found) {
      return "TEST SUCCEEDED";
    } else {
      return "TEST FAILED.  Expected " + expected + " found " + found;
    }
  }
  console.assert((myFunctionTest(20, max(20, 10)))=="TEST SUCCEEDED",'Failed assert test');
  console.assert((myFunctionTest(20, maxOfThree(20, 10,5)))=="TEST SUCCEEDED",'Failed assert test');
  console.assert((myFunctionTest(false, isVowel(a,)))=="TEST SUCCEEDED",'Failed assert test');
  console.assert((myFunctionTest(20, sum([3,5,6,4,2])))=="TEST SUCCEEDED",'Failed assert test');
  console.assert((myFunctionTest(10080, multiply([20,9,7,8])))=="TEST SUCCEEDED",'Failed assert test');
  


  

  console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));
  console.log("Expected output of maxOfThree(20,10,5) is 20  " + myFunctionTest(20, maxOfThree(20, 10, 5)));
  console.log("the expected a " + myFunctionTest(true, isVowel(a)));
  console.log("Expected output of sum([3,5,6,4,2]) is 10  " + myFunctionTest(20,sum([3,5,6,4,2])));
  console.log("Expected output of multiply([20,9,7,8]) is 10080  " + myFunctionTest(10080,multiply([20,9,7,8])));
  console.log("Expected output of reverse('Maharshi Universty') is ytsrevinU ihsrahaM  " + myFunctionTest('ytsrevinU ihsrahaM ',reverse('Maharshi Universty')));
  console.log("Expected output of findLongestWord(['wegihu','Eleni','Elu','a']) is wegihu  " + myFunctionTest('wegihu',findLongestWord(['wegihu','Eleni','Elu'])));
  console.log("Expected output of filterLongWords(['class','javascript','python','php'],6) is 'javascript'" 
  + myFunctionTest('javascript',filterLongWords(['class','javascript','python','php'],7)));
  
  

  
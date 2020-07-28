function sum(arr=[]){

const reducer=(accumulator, currentValue) => accumulator + currentValue;

const b=arr.reduce(reducer);

// console.log(a.reduce(reducer));
// document.write(a.reduce(reducer));// expected output: 10
return b;
}

function multiplay(arr2=[]){
const reducer2=(acumulater,currentvalue)=>acumulater*currentvalue;
const e=arr2.reduce(reducer2);
return e;
}

function reverse(string1){
    let y = string1.reverse;
    return y;

}
function filterwords(array=[],b){
    const a=array.filter(s => s.length<b);
    return a;
    }
    

     

    

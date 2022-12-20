let array=[1,2,3,4,5,6,7,8];
let delArray=[]
let b=0;
let k=parseInt(prompt("enter the value"));
let x=array[k]
for(i=0;i<array.length;i++){
    if(array[i]!=x){
        delArray[b]=array[i];
        b++
    }
}
console.log(delArray);
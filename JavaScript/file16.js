//promise 
const f1=() => {
    setTimeout(() => {
    return 5;
    },1000);
};
const f2=(x)=>{
    console.log(x+4);
};
const n=f1()
f2(n);
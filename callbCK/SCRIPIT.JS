const sub=(a,b,disp)=>{
    disp(a-b);
    return a-b;
};
const display =(val)=>{
    console.log("this is the final value from callback function",val);
};
console.log("the final value is:" + sub (10,5,display));


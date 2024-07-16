
let name;
const wish =()=>{
    console.log(`hello $(name)`);

};
const getName=()=>{
    setTimeout(()=>{
    name="jeyabala";

    } ,2000);
};
getName();
wish();
const mix = () => {
    console.log("Mix all the ingredients");
};

const bake = (callback) => {
    console.log("Bake in oven for 30 minutes");
    setTimeout(() => {
        callback();
        console.log("Cake is ready");
    }, 3000);
};

const callback = () => {
    alert("Tingggg! Cake is ready");
};

const coffee = () => {
    console.log("Prepare and drink coffee");
};

mix();
bake(callback);
coffee();

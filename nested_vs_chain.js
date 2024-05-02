// Five dummy asynchronous functions
function operation1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Operation 1 completed");
        }, 1000);
    });
}

function operation2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Operation 2 completed");
        }, 1000);
    });
}

function operation3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Operation 3 completed");
        }, 1000);
    });
}

function operation4() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Operation 4 failed");
        }, 1000);
    });
}

function operation5() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Operation 5 completed");
        }, 1000);
    });
}

function nestedExample() {
    operation1()
        .then(result1 =>
        {
            console.log(result1);

            return operation2().then(result2 =>
            {
                console.log(result2);

                return operation3().then(result3 =>
                {
                    console.log(result3);

                    return operation4().then(result4 =>
                    {
                        console.log(result4);

                        return operation5().then(result5 =>
                        {
                            console.log(result5);
                        });
                    });
                });
            });
        })
        .catch(error => {
            console.error("Error in nested approach:", error);
        });
}

function chainedExample() {
    operation1()
        .then(result1 => {
            console.log(result1);
            return operation2();
        })
        .then(result2 => {
            console.log(result2);
            return operation3();
        })
        .then(result3 => {
            console.log(result3);
            return operation4();
        })
        .then(result4 => {
            console.log(result4);
            return operation5();
        })
        .then(result5 => {
            console.log(result5);
        })
        .catch(error => {
            console.error("Error in chained approach:", error);
        });
}


// Call the nested example
nestedExample();


// Call the chained example
chainedExample();
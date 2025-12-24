
console.log('This is a function');

function test(){
    console.log('Testing');
    
}

// setTimeout(test,10)              // 1 sec = 1000 milisecond




// setTimeout(() => {

//     console.log('Testing 2');
    
// }, 1000);



// setTimeout(() => {
    
//     test()

// }, 1000)         // takes more time as compared to








function test2(){

    setTimeout(() =>{

        console.log('Testing');
        
    },1000);
}

const r = test2();

// console.log(r);                     //  execute first then all test2() execute at same time.


test2();

test2();






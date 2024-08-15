// 1. Get the order - 2
// 2. Get the shell - 2
// 3. Heat the shell - 3
// 4. Get the base - 2
// 5. Get the toppings - 2
// 6. Get the sauce - 1
// 7. Serve the order - 2

const custOrder = {
  item: ['taco', 'burrito', 'tostada'],
  shell: ['taco shell', 'flour tortilla', 'corn tortilla'],
  base: ['beef', 'bean', 'beef and bean'],
  toppings: ['lettuce', 'tomato', 'sour cream', 'lettuce, tomato, and sour cream'],
  sauce: ['salsa', 'guacamole']
}


let isRestaurantOpen = true;

function time(ms){
  return new Promise((resolve, reject) => {
    if (isRestaurantOpen){
      setTimeout(resolve, ms);
    } 
    else{
      reject(console.log('Taco Bell is closed'));
    }
  })
}

async function kitchen() {
  try{
    await time(2000);
    console.log(`You ordered a ${custOrder.item[1]}`);
    
    await time(0);
    console.log(`Started making order`);
    
    await time(2000);
    console.log(`Grabbing a ${custOrder.shell[1]}`);
    
    await time(2000);
    console.log(`Heating a ${custOrder.shell[1]}`);
    
    await time(2000);
    console.log(`Adding the ${custOrder.base[1]}`);
    
    await time(2000);
    console.log(`Adding ${custOrder.toppings[1]}`);
    
    await time(2000);
    console.log(`Adding the ${custOrder.sauce[1]}`);
    
    await time(2000);
    console.log(`Here is your order!`);
  }
  catch(error){
    console.log('The customer left', error);
  }
  finally{
    console.log('Day ended, Taco Bell closed');
  }
}

kitchen();
console.log('doing the dishes');
console.log('cleaning the tables');
console.log('taking orders');



// Promises

// let order = (time, work) => {
//   return new Promise( (resolve, reject) => {
//     if(isRestaurantOpen) {
//        setTimeout(() => {
//         resolve(work());
//     }, time);
//        } else {
//           reject(console.log("Taco Bell is closed"));
//        }
//   })
// }

// order(2000, () => console.log(`You ordered a ${custOrder.item[1]}`))
//     .then(() => {
//   return order(0000, () => console.log('Started making order'));
// })
// .then(() => {
//   return order(1000, () => console.log(`Grabbing a ${custOrder.shell[1]}`));
// })
// .then(() => {
//   return order(3000, () => console.log(`Heating the ${custOrder.shell[1]}`));
// })
// .then(() => {
//   return order(2000, () => console.log(`Adding the ${custOrder.base[2]}`));
// })
// .then(() => {
//   return order(2000, () => console.log(`Adding the ${custOrder.toppings[3]}`));
// })
// .then(() => {
//     return order(1000, () => console.log(`Adding the ${custOrder.sauce[1]}`));
// })
// .then(() => {
//     return order(2000, () => console.log(`Here is your ${custOrder.item[1]}!`));
// })
// .catch(() => {
//   console.log("The customer left");
// })
// .finally(() => {
//   console.log('Time for me to go to bed');
// })


//Callback Hell

// let placedOrder = (item_name, call_production) => {
//   setTimeout(() => {
//     console.log(`You ordered a ${order.item[item_name]}.`);
//     call_production();
//   }, 2000);
// }

// let production = () => {
//   console.log('started making order');
  
//   setTimeout(() =>{
//     console.log(`Grabbing a ${order.shell[1]}`);
    
//     setTimeout(() => {
//       console.log(`Heating the ${order.shell[1]}`)

//       setTimeout(() => {
//         console.log(`Adding the ${order.base[2]}`);
        
//         setTimeout(() => {
//           console.log(`Adding the ${order.toppings[3]}`);
          
//           setTimeout(() => {
//             console.log(`Adding the ${order.sauce[1]}`);
            
//             setTimeout(() => {
//               console.log(`Here is your order!`);
//             },2000);
              
//           }, 1000);
          
//       }, 2000);
        
//       }, 2000);
      
//     }, 3000);
    
    
//   }, 1000)
// };

// placedOrder(1, production);
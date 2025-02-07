
const takeOrder = (callback) => {
  setTimeout(() => {
    console.log("Order accepted ...");
    callback()
  }, 2000);
};

const prepareFood = (callback) =>{
  setTimeout(() => {
    console.log('Food prepration in process ...');
    callback()
  }, 4000);
}
const cookFood = (callback) =>{
  setTimeout(()=>{
    console.log('Food is being cooked ...');
    callback()
  },6000)
}

const packageFood = (callback) =>{
  setTimeout(() => {
    console.log('Food is being packaged ...');
    callback()
  }, 8000);
}

const deliverFood = (callback) =>{
  setTimeout(() => {
    console.log('Out of delivery ...');
    callback()
  }, 10000);
}

takeOrder(()=>{
  prepareFood(()=>{
    cookFood(()=>{
      packageFood(()=>{
        deliverFood(()=>{
                          console.log('Order delivered! 🎉');
        })
      })
    })
  })
})

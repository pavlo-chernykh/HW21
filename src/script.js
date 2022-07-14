// // function printNumbers(from, to) {
// //   let current = from;

// //   let timerId = setInterval(function() {
// //     console.log(current);
// //     if (current === to) {
// //       clearInterval(timerId);
// //     }
// //     current++
// //   }, 1000);
// // }

// // printNumbers(5, 10);


// // function printNumbers(from, to) {

// //   setTimeout(function go() {
// //     console.log(from);
// //     if (from < to) {
// //       setTimeout(go, 1000);
// //     }
// //     from++;
// //   }, 1000);
// // };

// // printNumbers(5, 10);
// // let count = 0
// // setTimeout(function tik() {


// //   console.log(count);
// //   if (count < 10) {
// //     setTimeout(tik, 500);
// //   }
// //   count++;
// // }, 500);

// // const menu = {
// //   burgerMenu: [
// //     {
// //       item: 'Burger',
// //       time: 2000
// //     },
// //     {
// //       item: 'Cola',
// //       time: 500
// //     },
// //     {
// //       item: 'Ff',
// //       time: 1000
// //     }
// //   ],
// //   pizzaMenu: [
// //     {
// //       item: 'Pizza',
// //       time: 3000
// //     },

// //     {
// //       item: 'Pepsi',
// //       time: 500
// //     },
// //     {
// //       item: 'sause',
// //       time: 500
// //     }
// //   ]
// //   };

//   // function createOrder(orderName) {
//   //   let res = [];
//   //   console.log('res', res);
//   //   console.log(`[${orderName[0].item} is ready, ${orderName[1].item} is ready, ${orderName[2].item} is ready]`);
//   //   for (let i = 0; i < orderName.length; i++) {
//   //     const element = orderName[i];
//   //     console.log(element);
//   //     let interFn = setInterval(function go() {
//   //       console.log(`${element.item} done`);

//   //       interFn = clearTimeout(interFn);
//   //     }, element.time)
//   //   }
//   //   return res;
//   // }

//   // createOrder(menu.burgerMenu)


// //   function createOrder(orderName) {
// //     const res = [];

// //     setTimeout(() => {
// //       res.push(`${orderName[0].item} done`);
// //     }, orderName[0].time)
// //     setTimeout(() => {
// //       res.push(`${orderName[1].item} done`);
// //     }, orderName[1].time)
// //     setTimeout(() => {
// //       res.push(`${orderName[2].item} done`);
// //     }, orderName[2].time)

// //     if (res.length === 0) {
// //       [`still working on it`];
// //     }
// //     return [`${orderName[0].item} done`, `${orderName[1].item} done`, `${orderName[2].item} done`];

// //  };
// //   console.log(createOrder(menu.burgerMenu));
// // let count = 0
// // function createOrder(orderName) {
// //   res = [];
//     // if (count < orderName.length) {
//     //   const values = orderName.values();
//     //   for (const value of values) {

//     //   }
//     //   // orderName.forEach(element => {
//     //   //   console.log(element.item);
//     //   // });
//     //   // let item = orderName[0].item;

//     //   res.push(`${orderName} done`);
//     //   setTimeout(tik, 500);
//     // // }
//     // count++;
//     // const values = orderName.values();
//     // for (const value of values) {
//     //   if (count < orderName.length) {
//     //     console.log(value);
//     //   }
//     //   count++;
//     // }



//     // orderName.forEach(element => {
//     //   setTimeout(function tik() {
//     //     res.push(`${element.item} done`)
//     //     console.log(element);
//     //   }, element.time);
//     // });

//   // console.log(res);
//       // res.push(`${orderName} done`);
//       // setTimeout(tik, 500);

// //   return res;
// // };
// // console.log(createOrder(menu.burgerMenu));

// function createOrder(orderName) {
// let index = 0
// let res = [];

// //
//   setTimeout(function tik() {
//     if (index <= orderName.length - 1) {
//       res.push(`${orderName[index].item} done`)
//       console.log(`${orderName[index].item} done `);

//       setTimeout(tik, orderName[index].time)
//       index++;
//     }
//   }, orderName[index].time);

//   return res;
// }

// const result = createOrder(menu.burgerMenu);
// console.log(result);




//       // console.log(index);
//       // console.log(`${orderName[index].item} done ${index}`);
//   // let count = 0
// // setTimeout(function tik() {


// //   console.log(count);
// //   if (count < 10) {
// //     setTimeout(tik, 500);
// //   }
// //   count++;
// // }, 500);

// function createOrder(orderName) {
//   let index = 0;
//   const res = [];

//   setTimeout(function tik() {
//     if (index < orderName.length) {
//       res.push(`${orderName[index].item} done`);

//       setTimeout(tik, orderName[index].time);
//       index++;
//     }
//   }, orderName[index].time);

//   return res;
// }
// const result = createOrder(menu.burgerMenu);
// // eslint-disable-next-line no-console
// console.log(result);

// function createOrder(orderName) {
//   let index = 0;
//   const res = [];
//   const fnCB = () => {
//     if (index === orderName.length) {
//       return;
//     }
//     const orderItem = orderName[index].item;
//     if (index <= orderName.length) {
//       res[index] = `${orderItem} done`;
//       // eslint-disable-next-line no-console
//       console.log(res);
//       setTimeout(fnCB, orderName[index].time);
//       index++;
//     }
//   };

//   setTimeout(fnCB, orderName[index].time);
//   return res;
// }
// const result = createOrder(menu.burgerMenu);
// // eslint-disable-next-line no-console
// console.log(result);

//// final

// function fnCB(resArr, item, index) {
//   resArr[index] = `${item.item} done`;
//   alert(` ${resArr} `);
// }
// function createOrder(orderName) {
//   const resArr = [];
//   orderName.forEach((item, index) => {
//     setTimeout(() => {
//       fnCB(resArr, item, index);
//     }, item.time);
//   });
//   // if (resArr.length === orderName.length) {
//   //   console.log('rer');
//   // }
//   return resArr;
// }
//   const result = createOrder(menu.burgerMenu);
//   // eslint-disable-next-line no-console
//   console.log(result);

// function createOrder(orderName, cb) {
//   const resArr = [];
//   orderName.forEach((item, index) => {
//     setTimeout(() => {
//       resArr[index] = `${item.item} done`;
//       if (orderName.length === Object.keys(resArr).length) {
//         cb(resArr);
//       }
//       // cb(resArr);
//       // cb(resArr);
//     }, item.time);
//   });
//   // if (resArr.length === orderName.length) {
//   //   console.log('rer');
//   // }
//   return resArr;
// }
// createOrder(menu.burgerMenu, (resArr) => alert(resArr));

// function containsEmptySpace(arr) {
//   const empty = arr.findIndex((item) => !item);
//   const notFoundIndex = -1;
//   return (empty === notFoundIndex) ? false : true;
// }


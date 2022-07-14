const menu = {
  burgerMenu: [
    {
      item: 'Burger',
      time: 2000
    },
    {
      item: 'Cola',
      time: 500
    },
    {
      item: 'Ff',
      time: 1000
    },
  ],
  pizzaMenu: [
    {
      item: 'Pizza',
      time: 3000
    },

    {
      item: 'Pepsi',
      time: 500
    },
    {
      item: 'sause',
      time: 500
    }
  ]
  };
function createOrder(orderName, cb) {
  const resArr = [];
  orderName.forEach((item, index) => {
    setTimeout(() => {
      resArr[index] = `${item.item} done`;
      if (orderName.length === Object.keys(resArr).length) {
        cb(resArr);
      }
    }, item.time);
  });
  return resArr;
}
createOrder(menu.burgerMenu, (resArr) => alert(resArr));


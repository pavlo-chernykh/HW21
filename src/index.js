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
    }
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

function createOrder(orderName) {
  let index = 0;
  const res = [];

  setTimeout(function tik() {
    if (index < orderName.length) {
      res.push(`${orderName[index].item} done`);

      setTimeout(tik, orderName[index].time);
      index++;
    }
  }, orderName[index].time);

  return res;
}
const result = createOrder(menu.burgerMenu);
// eslint-disable-next-line no-console
console.log(result);

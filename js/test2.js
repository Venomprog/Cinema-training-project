const funds = [
  {amount: -1400},
  {amount: 2400},
  {amount: -1000},
  {amount: 500},
  {amount: 10400},
  {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
  const items = data.filter(function(item){
    return item.amount > 0
  })
  const newArr = []

  for (let i = 0; i < items.length; i++){
    newArr[i] = items[i].amount
  }


  const res = newArr.reduce((sum, current) => sum + current)
  return res

};
console.log(getPositiveIncomeAmount(funds))

const getTotalIncomeAmount = (data) => {
  const newArr = data.some(item => item.amount < 0)

  if (newArr){
    const newMap = data.map(item => {
      return item.amount
    })

    const res = newMap.reduce((sum, current) => sum + current)
    return res
  } else {
    getPositiveIncomeAmount(data)
  }
};

console.log(getTotalIncomeAmount(funds))
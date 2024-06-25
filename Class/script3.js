const goToDinner = () => {
    const menu = [
        {
            dishName: "Beef Tenderloin",
            price: 14.75
        },
        {
            dishName: "Ribeye Steak",
            price: 17.50
        },
        {
            dishName: "Barbecue Chicken",
            price: 13.25
        }
    ];
    let menuList = '';
    for (let i = 0; i < menu.length; i++) {
        menuList += `${i + 1}. ${menu[i].dishName}: ${menu[i].price.toFixed(2)} \n`
    }
    let dinnerChoice = parseInt(prompt(
        `Please select your choice of meal: \n ${menuList}`
    ));

    if (Number.isNaN(dinnerChoice) || dinnerChoice < 1 || dinnerChoice >= menu.length + 1) {
        console.log('That is an invalid choice, please try again.');
        dinnerChoice = parseInt(prompt(
            `Please select your choice of meal: \n ${menuList}`
        ));
    }
    console.log(`You have chosen the ${menu[dinnerChoice - 1].dishName}`);
    // const dinnerChoiceString = `You have chosen the ${menu[dinnerChoice - 1].dishName}.`

    let preTipTotal = parseFloat((menu[dinnerChoice - 1].price).toFixed(2));
    console.log(`The pre tip total is ${preTipTotal.toFixed(2)}`);
    let tipPercentage = 0.095;
    let tipCost = (preTip, tipPercent) => {
        let tipResult = Math.round((preTip * tipPercent) * 100) / 100;
        console.log(`The tip comes to ${tipResult}`);
        return tipResult;
    }
    let totalBill = preTipTotal + tipCost(preTipTotal, tipPercentage);
    console.log(`Your total bill is ${totalBill}`)
};

goToDinner();
// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let obj = {};

    if(currency == 0) return obj;

    if(currency > 10000) {
        obj.error ="You are rich, my friend! We don't have so much coins for exchange";
        return obj;
    }

    let coins = [50, 25, 10, 5, 1];
    let names = ['H', 'Q', 'D', 'N', 'P'];

    let quantity = 0;

    for(let i = 0; i < 5; i++) {
        while (currency >= coins[i]) {
            currency -= coins[i];
            quantity++;
        }

        if(quantity) {
          obj[names[i]] = quantity;
          quantity = 0;
        }
    }
    return obj;
}

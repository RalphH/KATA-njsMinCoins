module.exports = function minCoins(amount) {    
    var patPounds = /^[0-9]*\.?[0-9]+$|^£[0-9]*\.?[0-9]+$|^£[0-9]*\.?[0-9]+p$|^[0-9]*\.?[0-9]+p$|^£[0-9]*$/  
    var patPence = /^[0-9]*$|^[0-9]*p$/ 
    var pence = 0;
    var denominations = "";
    if (((typeof amount === 'string' || amount instanceof String) && amount.length > 0 && /\d/.test(amount)) && (patPounds.test(amount) || patPence.test(amount))) {
        if (patPence.test(amount)) {
            // pence 
            var pences = amount.toString().replace(/p/g, '');
            pence = parseInt(pences, 10);
        }
        else if (patPounds.test(amount)) {
            if (amount.startsWith('.')) { 
                pence = 0; // exclude pounds float with only pennies
            } else {
                // convert to pence value
                var pounds = amount.toString().replace(/£/g, '');
                poundv = parseFloat(pounds, 10).toFixed(2);
                pence = (poundv * 100).toFixed(0);
            }
        } 
        if (pence > 0) {
            // calc into each denomination
            var p200 = Math.floor(pence / 200);
            var pence = pence - p200 * 200;

            var p100 = Math.floor(pence / 100);
            var pence = pence - p100 * 100;

            var p50 = Math.floor(pence / 50);
            var pence = pence - p50 * 50;

            var p20 = Math.floor(pence / 20);
            var pence = pence - p20 * 20;

            var p10 = Math.floor(pence / 10);
            var pence = pence - p10 * 10;

            var p5 = Math.floor(pence / 5);
            var pence = pence - p5 * 5;

            var p2 = Math.floor(pence / 2);
            var pence = pence - p2 * 2;

            var p1 = Math.floor(pence / 1);
            var pence = pence - p1;

            // make strings, only push is have denomination
            var coins = [];
            if (p200 > 0) {
                var s200 = maybePluralize(p200, '£2 coin');
                coins.push(s200);
            }
            if (p100 > 0) {
                var s100 = maybePluralize(p100, '£1 coin');
                coins.push(s100);
            }
            if (p50 > 0) {
                s50 = maybePluralize(p50, '50p coin');
                coins.push(s50);
            }
            if (p20 > 0) {
                s20 = maybePluralize(p20, '20p coin');
                coins.push(s20);
            }
            if (p10 > 0) {
                s10 = maybePluralize(p10, '10p coin');
                coins.push(s10);
            }
            if (p5 > 0) {
                s5 = maybePluralize(p5, '5p coin');
                coins.push(s5);
            }
            if (p2 > 0) {
                s2 = maybePluralize(p2, '2p coin');
                coins.push(s2);
            }
            if (p1 > 0) {
                s1 = maybePluralize(p1, '1p coin');
                coins.push(s1);
            }
        } else {
            return "Invalid input - enter a positive amount of money";
        }
        // add separators          
        var coinsDesc = coins.length > 1 ? coins.slice(0, -1).join(', ') + ' and ' + coins.slice(-1) : coins[0];
    } else {
        return "Invalid input - enter a positive amount of money";
    }
    return coinsDesc;
}

const maybePluralize = (count, noun, suffix = 's') =>
    `${count} ${noun}${count !== 1 ? suffix : ''}`;
var bigDecimal = require('bigdecimal');
module.exports = function multiply(first, second) {
    return String(new bigDecimal.BigInteger(first, 10).multiply(new bigDecimal.BigInteger(second, 10)));
}

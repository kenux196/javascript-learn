const crypto = require('crypto');

const password = 'kenux';
const secret = 'kenux196';

const hashed = crypto.createHmac('sha256', secret).update(password).digest('hex');
console.log(hashed);

crypto.createDe
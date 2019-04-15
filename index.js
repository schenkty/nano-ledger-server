require('babel-register');

let { app } = require('./server');

app.listen(3000, () => console.log('Ledger app listening on port 3000!'))

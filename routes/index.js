const Admin = require('./admin.routes');
const Find = require('./find.routes');


module.exports = [
    // Admin
    {path:"/admin", route: Admin},
    // Find
    {path:'/find', route: Find}
]
const Admin = require('./admin.routes');
const Find = require('./find.routes');
const Pattern = require('./pattern.routes');


module.exports = [
    // Admin
    {path:"/admin", route: Admin},
    // Find
    {path:'/find', route: Find},
    // Pattern
    {path:'/pattern', route: Pattern},

];
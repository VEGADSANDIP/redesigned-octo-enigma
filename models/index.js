const sequelize = require('./sequelize');
const { Admin } = require('./admin.model');
const { User } = require('./user.model');

const models = {
    Admin,
    User,
};

// Call associate functions on each model, passing all models
Object.values(models).forEach((model) => {
    if (typeof model.associate === "function") {
        model.associate(models);
    }
});

module.exports = {
    ...models,
    sequelize,
};
📁 project-root/
│
├── 📁 config/                      # All configuration files
│   ├── db.config.js               # DB connection (Sequelize/MySQL)
│   ├── redis.config.js            # Redis setup if used
│   └── multer.config.js           # File upload config
│
├── 📁 controllers/                # Handle request/response logic
│   ├── auth/                      # Google/Facebook/email login
│   │   └── auth.controller.js
│   ├── admin/                     # Admin panel logic
│   │   └── dashboard.controller.js
│   ├── user.controller.js
│   ├── vendor.controller.js
│   ├── product.controller.js
│   ├── category.controller.js
│   ├── cart.controller.js
│   ├── order.controller.js
│   └── reward.controller.js      # Daily reward logic
│
├── 📁 models/                     # Sequelize models
│   ├── index.js
│   ├── user.model.js
│   ├── vendor.model.js
│   ├── product.model.js
│   ├── productTranslation.model.js
│   ├── cart.model.js
│   ├── order.model.js
│   ├── category.model.js
│   ├── reward.model.js
│   ├── shopKyc.model.js
│   └── ...
│
├── 📁 routes/                     # Routes organized by feature
│   ├── auth.routes.js
│   ├── admin.routes.js
│   ├── user.routes.js
│   ├── vendor.routes.js
│   ├── product.routes.js
│   ├── cart.routes.js
│   ├── order.routes.js
│   ├── reward.routes.js
│   └── ...
│
├── 📁 middlewares/               # Middleware: auth, validation, error
│   ├── auth.middleware.js
│   ├── role.middleware.js
│   ├── validate.middleware.js
│   └── error.middleware.js
│
├── 📁 services/                  # Business logic
│   ├── user.service.js
│   ├── product.service.js
│   ├── reward.service.js
│   └── ...
│
├── 📁 utils/                     # Helper functions
│   ├── handleFileUpload.js
│   ├── logger.js
│   ├── jwt.helper.js
│   └── date.helper.js
│
├── 📁 public/                    # Static files
│   └── uploads/
│       ├── products/
│       ├── shop-kyc/
│       └── ...
│
├── 📁 locales/                   # Multi-language JSON files
│   ├── en.json
│   ├── hi.json
│   └── gu.json
│
├── 📁 seeders/                   # Sequelize seeders
├── 📁 migrations/                # Sequelize migrations
├── 📁 validations/              # Request body validations
│   ├── user.validation.js
│   ├── product.validation.js
│   └── ...
│
├── 📁 views/                     # Templates (if needed)
│
├── 📄 app.js                     # Express app config
├── 📄 server.js                  # Server start file
├── 📄 .env
├── 📄 .gitignore
└── 📄 package.json

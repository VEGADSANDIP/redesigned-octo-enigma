📁 b-2-spirit/
│
├── 🛠️  config/                  # All configuration files
│   ├── 🔌 db.config.js           # Sequelize + MySQL config
│   ├── ⚡ redis.config.js        # Redis client setup (optional)
│   └── 📦 multer.config.js       # File upload config using Multer
│
├── 🧠 controllers/            # Handle request/response logic
│   ├── 👤 user.controller.js     # Example: User logic (e.g. daily rewards)
│   └── ...
│
├── 🗃️  databases/              # (optional) Additional DB setup or raw queries
│   └── ...
│
├── 📚 docs/                   # Project documentation (API spec, architecture)
│   └── ...
│
├── 🌐 locales/                # Language translation JSONs
│   ├── en.json
│   ├── hi.json
│   └── gu.json
│
├── 🧩 middlewares/           # Custom Express middlewares
│   ├── 🛡️ auth.middleware.js     # JWT or session middleware
│   └── ...
│
├── 📦 migrations/            # Sequelize migration files
│
├── 📁 models/                # Sequelize models
│   ├── 🧬 index.js             # Initialize Sequelize and models
│   └── ...
│
├── 📂 node_modules/          # Node.js dependencies
│
├── 🌍 public/                # Static assets (e.g. images)
│   └── 📂 uploads/
│       ├── 🛒 products/
│       └── ...
│
├── 🛣️ routes/                 # Route definitions (per feature)
│   ├── 🔐 auth.routes.js        # Auth routes
│   └── ...
│
├── 🌱 seeders/               # Sequelize data seeders
│
├── 🧪 tests/                 # Automated tests (Jest, Supertest, etc.)
│   ├── user.test.js
│   └── ...
│
├── 🧰 utils/                 # Helper functions and common tools
│   ├── 🖼️  handleFileUpload.js
│   ├── 📄 logger.js
│   ├── 🔐 jwt.helper.js
│   └── ⏰ date.helper.js
│
├── 📄 validations/           # Joi/Zod validation schemas
│   ├── user.validation.js
│   └── ...
│
├── 📄 validators/            # Middleware that applies validation
│   ├── user.validators.js
│   └── ...
│
├── 🖼️ views/                 # View templates (EJS, Pug) — optional for APIs
│
├── ⚙️ .env                    # Environment variables
├── 📄 .gitignore              # Files to ignore in Git
├── ⚙️ .sequelizerc            # Sequelize CLI configuration
├── 🚀 app.js                  # Main Express app setup
├── 🔁 server.js               # Server entry point
├── 🧪 test-db-connection.js   # Script to test DB connection
├── 📦 package.json            # Project metadata, scripts, dependencies
└── 📦 package-lock.json       # Auto-generated exact dependency versions

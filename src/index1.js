const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const handlebars = require('express-handlebars');

const route = require('./routes');
const db = require('./config/db');

// Connect to DB
db.connect();

const app = express();
const adminApp = express();
const port = 3000;

// Use static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.use(methodOverride('_method'));

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// set up AdminApp
// adminApp.use(express.static(path.join(__dirname, "public")));
// adminApp.use(
//   express.urlencoded({
//     extended: true,
//   })
// );
// adminApp.use(express.json());
// adminApp.use(methodOverride("_method"));
// adminApp.engine(
//   "hbs",
//   handlebars({
//     extname: ".hbs",
//     helpers: {
//       sum: (a, b) => a + b,
//     },
//   })
// );
// adminApp.set("view engine", "hbs");
// adminApp.set("views", path.join(__dirname, "resources", "views"));

// Routes init
route(app);
// app.use("/", adminApp);
// route(adminApp);

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`),
);

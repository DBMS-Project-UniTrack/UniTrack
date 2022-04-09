// Set up server
const http = require('http');
const app = require('./app');
const port = 5001;

const server = http.createServer(app);

dotenv.config({ path: './.env'});


//This built-in express middleware gives us the ability to process posted data and store it in the req.body
app.use(express.urlencoded({extended: false}));




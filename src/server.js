const app = express();

const { DB } = require('./config/DB');


//Ruta de materiales
const materialRoutes = require('./routes/material');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect (DB)
    .then(() => console.log('db connected'))
    .catch(err => console.log(err));

// middlewares
app.use(cors());
app.use(bodyParser.json());

// routes
app.use('/material', materialRoutes);


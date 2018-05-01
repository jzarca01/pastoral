import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import morgan from 'morgan';
import path from 'path';
import dotenv from 'dotenv';

import routes from './routes';
import utils from './utils/';
// import { notFound, errorHandler } from './errors/handleErrors';

dotenv.config();

const app = new express();
app.set('trust proxy', 1);

// General server config such as cookies, body, favicon, public, session
app.use(compression());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
app.use(utils.securityHeaders);

app.use('/api/', routes);

// app.use(errorHandler);

// start app
app.listen(process.env.PORT, error => {
  if (!error) {
    console.log(`👋  Running on port ${process.env.PORT}`); // eslint-disable-line
  }
});

export default app;

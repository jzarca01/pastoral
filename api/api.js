import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import morgan from 'morgan';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';

import routes from './routes';
import utils from './utils/';
import middleware from './middleware';

dotenv.config();

const app = new express();
app.use(cors());
app.set('trust proxy', 1);

app.use(compression());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
app.use(utils.securityHeaders);
app.use(middleware.geo);

app.use('/api/', routes);

app.use(middleware.notFound);

app.listen(process.env.PORT, middleware.startup);

export default app;

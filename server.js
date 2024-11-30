// Imports
import 'dotenv/config';
import {join} from 'path';
import express from 'express';
import router from './src/router/router.js';

// Server express
const server = express();

// Set EJS
server.set('view engine', 'ejs');

const securedViewsPath = join(import.meta.dirname, 'src/views');
server.set('views', securedViewsPath);

const securedStaticPath = join(import.meta.dirname, 'public');
server.use(express.static(securedStaticPath));

//Parser le formulaire
server.use(express.urlencoded({extended:false}));

// Router
server.use(router);

//Port ecouté
const port = process.env.PORT || 5050;
const base_url = process.env.BASE_URL || 'http://localhost';

server.listen(port, () => {
    console.log(`Server en marche ! ${base_url}:${port}`);
})


import { CreateApp } from '../index.js';
import Heroes from '../models/heroes/mysql.heroes.js';
import Comics from '../models/comics/mysql.comics.js';

CreateApp(Heroes, Comics);
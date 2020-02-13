import { Router } from 'express';

import PokemonController from './app/controllers/PokemonController';
import SearchController from './app/controllers/SearchController';

const routes = Router();

// create all pokemons on mongoDB
routes.post('/pokemons/register/all', PokemonController.store);

// list all pokes
routes.get('/pokemons', PokemonController.index);

// show 1 pokemon by name
routes.get('/pokemons/:name', PokemonController.show);

routes.get('/pokemons/search', SearchController.index);

export default routes;

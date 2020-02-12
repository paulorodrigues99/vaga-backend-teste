import {Router} from 'express'

import PokemonController from './app/controllers/PokemonController'



const routes = Router()
routes.post('/', PokemonController.store)

export default routes;
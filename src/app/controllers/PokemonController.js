import pokemonDB from '../../database.json'

import Pokemon from '../models/Pokemon'


class PokemonController {

    async store(req, res) {

        const pokemon = {

    row: 555,
    name: 'TESTE',
    pokedex_number: 9988,
    img_name: 888,
    generation: 5,
    evolved: true,
    family_id: 55,
    cross_gen: 555,
    type1: 'CINCO',
    type2: 'SEIS',
    weather1: 'FRIO',
    wheather2: 'QUENTE',
    stat_total: 666,
    atk: 5988,
    def: 111111,
    sta: 2122,
    legendary: 1,
    aquireable: 3,
    spawns: true,
    regional: true,
    raidable: 9,
    hatchable: 5,
    shiny: true,
    nest: true,
    new: true,
    not_gettable: false,
    future_evolve: false,
    _100_CP_40: 99888,
    _100_CP_39: 7777,

        }

        const newPokemon = await Pokemon.create(pokemon)
    
        return res.json(newPokemon)
    }

}

export default new PokemonController()
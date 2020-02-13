import pokemonDB from '../../database.json';

import Pokemon from '../models/Pokemon';

class PokemonController {
  // coppy all pokemons to MongoDB - /pokemons/register/all
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
    };

    pokemonDB.Sheet1.map(async poke => {
      await Pokemon.create({
        row: poke.Row,
        name: poke.Name,
        pokedex_number: poke.Pokedex_Number,
        img_name: poke.img_name,
        generation: poke.Generation,
        evolved: poke.Evolved,
        family_id: poke.FamilyID,
        cross_gen: poke.cross_gen,
        type1: poke.type1,
        type2: poke.type2,
        weather1: poke.weather1,
        wheather2: poke.wheather2,
        stat_total: poke.stat_total,
        atk: poke.ATK,
        def: poke.DEF,
        sta: poke.STA,
        legendary: poke.Legendary,
        aquireable: poke.Aquireable,
        spawns: poke.Spawns,
        regional: poke.Regional,
        raidable: poke.Raidable,
        hatchable: poke.hatchable,
        shiny: poke.Shiny,
        nest: poke.Nest,
        new: poke.New,
        not_gettable: poke.not_gettable,
        future_evolve: poke.future_evolve,
        _100_CP_40: poke._100_CP_40,
        _100_CP_39: poke._100_CP_39,
      });
    });

    // const newPokemon = await Pokemon.create(pokemon);

    return res.json({ sucess: 'Coppying all Pokemons to MongoDB! ' });
  }

  // list all pokemons
  async index(req, res) {
    const pokemons = await Pokemon.find();

    return res.json(pokemons);
  }

  // find a pokemon by name
  async show(req, res) {
    const { name } = req.params;
    const pokemon = await Pokemon.findOne({ name });

    return res.json(pokemon);
  }
}

export default new PokemonController();

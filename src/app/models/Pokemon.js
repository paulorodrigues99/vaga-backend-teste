import mongoose, { Mongoose } from 'mongoose'

const PokemonSchema = new mongoose.Schema({
    row: Number,
    name: String,
    pokedex_number: Number,
    img_name: Number,
    generation: Number,
    evolved: Boolean,
    family_id: Number,
    cross_gen: Number,
    type1: String,
    type2: String,
    weather1: String,
    wheather2: String,
    stat_total: Number,
    atk: Number,
    def: Number,
    sta: Number,
    legendary: Number,
    aquireable: Number,
    spawns: Boolean,
    regional: Boolean,
    raidable: Number,
    hatchable: Number,
    shiny: Boolean,
    nest: Boolean,
    new: Boolean,
    not_gettable: Boolean,
    future_evolve: Boolean,
    _100_CP_40: Number,
    _100_CP_39: Number,



})            
           
export default mongoose.model('Pokemon', PokemonSchema)
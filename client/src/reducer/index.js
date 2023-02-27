
const initialState = {
    pokemons: [],
    allPokemons: [],
    types: [],
    details:[]
}

function rootReducer(state = initialState, action){
    switch(action.type) {
        
        case 'GET_POKEMONS':
            return{
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload
            }            
        case 'GET_TYPES':
            return{
                ...state,
                types: action.payload
            }       
        case 'GET_POKEMONS_NAME':
            if(action.payload[0]==='pokemon inexistente') {
                action.payload = [{nombre: action.payload[0], imagen: 'https://i.pinimg.com/564x/4e/ec/e2/4eece2f99bf3e51452796ba40f60dc4c.jpg' }]
            }
            return{
                ...state,
                pokemons: action.payload
            }
        
        case 'POST_POKEMON':
            return{
                ...state                
            }
        
        case 'GET_DETAILS':
            return{
                ...state,
                details: action.payload
            }

        case 'ORDER_BY_ATACK':
            const pokemonsOrderAtack = state.pokemons;
            
            if (action.payload === 'ascendente') {                
                pokemonsOrderAtack.sort((x, y) => x.ataque - y.ataque)
            } else {
                pokemonsOrderAtack.sort((x, y) => y.ataque - x.ataque)
            }
            
            return{
                ...state,
                pokemons: pokemonsOrderAtack 
            } 
        
        case 'ORDER_BY_NAME':
            let pokemonsOrderName = action.payload === 'ascendente' ?
            state.pokemons.sort(function (x, y) {
                if (x.nombre.toLowerCase() > y.nombre.toLowerCase()) {
                    return 1
                }
                if (y.nombre.toLowerCase() > x.nombre.toLowerCase()) {
                    return -1
                }
                return 0
                })    :
            state.pokemons.sort(function (x, y) {
                if (x.nombre.toLowerCase() > y.nombre.toLowerCase()) {
                    return -1
                }
                if (y.nombre.toLowerCase() > x.nombre.toLowerCase()) {
                    return 1
                }
                return 0
            })             
            return {
                ...state,
                pokemons: pokemonsOrderName
            }
        
        case 'FILTER_BY_ORIGIN':
            const allPokeOrigin = state.allPokemons
            const originFiltered = action.payload === 'createInDb' ? allPokeOrigin.filter(poke =>  poke.createInDb) : allPokeOrigin.filter(poke =>  !poke.createInDb)
            return {
                ...state,
                pokemons: action.payload === 'All' ? state.allPokemons : originFiltered
            }

        case 'FILTER_BY_TYPES':
            const allPokemons = state.allPokemons;
            const typeFiltered = action.payload === 'All' ? allPokemons : allPokemons.filter(poke => poke.type.includes(action.payload))
            return {
                ...state,
                pokemons: typeFiltered
            }   
        case 'SHOW_ALL_POKEMONS':
            return{
                ...state,
                pokemons: state.allPokemons
            }

        case 'CLEAR_DETAIL_STATE':
            return{
                ...state,
                details:[]
            }    
            
        default: 
            return state;
    }
}

export default rootReducer;
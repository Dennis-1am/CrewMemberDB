import { supabase } from './superbase.js'


async function getCrew() 
{
    let { data: crew, error } = await supabase
    .from('crew')
    .select('*')

    if (error) {
        console.log(error)
        return null
    }

    console.log(crew)

    return crew

}

// create a function that can insert a new crew member into the database
async function insertCrew(crew) {
    
    let { data, error } = await supabase
        .from('crew')
        .insert(crew) 

    if (error) {
        console.log(error)
        return null
    }

    return data
}

// create a function that can edit a crew member in the database
async function editCrew(crew) {
    
    let { data, error } = await supabase
        .from('crew')
        .update(crew).
        match({ id: crew.id })

    if (error) {
        console.log(error)
        return null
    }
    return data
}

// create a function that can delete a crew member in the database
async function deleteCrew(crew) {
    
    let { data, error } = await supabase
        .from('crew')
        .delete(crew).
        match({ id: crew.id })

    if (error) {
        console.log(error)
        return null
    }
    return data
}

function services() {
    return {
        getCrew,
        insertCrew,
        editCrew,
        deleteCrew
    }
}

export default services()
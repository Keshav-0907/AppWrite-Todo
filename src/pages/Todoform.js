import React, { useState } from 'react'
import { v4 as uuidv4} from 'uuid'
import {databases} from '../appwrite/AppWriteConfig'
import { MeiliSearch } from 'meilisearch'
import { useEffect } from 'react'

const client = new MeiliSearch({
    host: 'http://localhost:7700/',
    apiKey: 'e8ac83d3d2dbfb192a31156c51615246a9af0e4f'
})

const index = client.createIndex('movies', { primaryKey: 'e8ac83d3d2dbfb192a31156c51615246a9af0e4f' })


const Todoform = () => {
    const[todo, settodo]=useState("")
    const [searchedWord, setSearch] = useState('')
    const [resultSearch, setResults] = useState([])

    // useEffect(() => {
    //     // Create an scoped async function in the hook
    //     async function searchWithMeili() {
    //         const search = await index.search(searchedWord, {
    //             limit: 24,
    //             attributesToHighlight: ['name']
    //         })
    //         setResults(search.hits)
    //         console.log(resultSearch)
    //     }
    //     // Execute the created function directly
    //     searchWithMeili()
    // }, [searchedWord])

    const addtodo = async (e) => {
        e.preventDefault()

        const newtodo = databases.createDocument("64387579106b66ffbce8", "64387580c95c9cc614bc", uuidv4(),{
            todo
        })

        newtodo.then(
            function(res){
                console.log(res)
                console.log("Done ")
            },
            function(error){
                console.log(error)
            }
        )
        // window.location.reload()

        const res = await client.index('movies').addDocuments([{
            primaryKey: 'e8ac83d3d2dbfb192a31156c51615246a9af0e4f',
            id: 87373839,
            title: 'Shazam',
            poster: 'https://image.tmdb.org/t/p/w1280/xnopI5Xtky18MPhK40cZAGAOVeV.jpg',
            overview: 'A boy is given the ability to become an adult superhero in times of need with a single magic word.',
            release_date: '2019-03-23'
        }])
        console.log(res)

    }


    return (

        <><div>
            <input
                type='text'
                value={searchedWord}
                onChange={(event) => setSearch(event.target.value)}
                className='px-6 py-4 w-full text-black'
                placeholder='search' />
        </div><div className='form-main'>
                <div>
                    <input
                        type='text'
                        name='todo'
                        id='todo'
                        className='todo-input'
                        placeholder='Enter Todo'
                        onChange={(e) => {
                            settodo(e.target.value)
                        } }
                    ></input>
                </div>
                <div>
                    <button onClick={addtodo} className='add-todo-btn'> Add Todo </button>
                </div>
            </div></>
  )
}

export default Todoform
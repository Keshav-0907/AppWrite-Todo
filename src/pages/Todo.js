import React from 'react'
import { databases } from '../appwrite/AppWriteConfig'
import { useState, useEffect } from 'react'
import { MeiliSearch } from 'meilisearch'
import { v4 as uuidv4 } from 'uuid'

// const client = new MeiliSearch({
//     host: 'http://localhost:7700/'
// })

// client.createIndex('todos', { primaryKey: 'e8ac83d3d2dbfb192a31156c51615246a9af0e4f' })
// const index = client.index('todos')




const Todo = () => {

    // const [searchedWord, setSearch] = useState('')
    // const [resultSearch, setResults] = useState([])

    const [todos, settodos] = useState()

    useEffect(() => {
        const getTodos = databases.listDocuments("64387579106b66ffbce8", "64387580c95c9cc614bc")

        getTodos.then(
            function (res) {
                settodos(res.documents)
            },
            function (error) {
                console.log(error)
            }
        )

    }, [])
    console.log(todos)


    // client.index('todos').updateDocuments([{
    //     id: { uuidv4 },
    //     todo: { todos },

    // }])


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

    const deleteitem = (id) => {
        const promise = databases.deleteDocument("64387579106b66ffbce8", "64387580c95c9cc614bc", id)

        promise.then(
            function (response) {
                console.log(response)
            },
            function (error) {
                console.log(error)
            }
        )
        window.location.reload()
    }

    return (
        <>
            {/* <div>
                <input
                    type='text'
                    value={searchedWord}
                    onChange={(event) => setSearch(event.target.value)}
                    className='px-6 py-4 w-full text-black'
                    placeholder='search'
                />
            </div> */}
            {/* <div>
                {resultSearch?.map((result) => (
                    <div className='todo-list' key={result.$id}>
                        <p> {result.todo}</p>
                    </div>
                ))}
            </div> */}
            <div className='container'>
                <div className='table-main'>
                    <div className='table-head'>
                        <h2> Task </h2>
                        <h2> Delete </h2>
                    </div>
                    <div className='table-data'>
                        <div className='entry'>
                            {todos && todos.map(item => (
                                <div className='todo-list' key={item.$id}>
                                    <p> {item.todo}</p>
                                    <button onClick={() => deleteitem(item.$id)} className='delete-btn'> Delete</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo;
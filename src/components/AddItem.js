import { useState } from 'react'

const AddItem = ({onAdd}) => {
    const [title, setTitle] = useState('')
    const [description, setDesciption] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!title) {
            alert("Please add an item")
            return
        }
        onAdd({title,description})
        setTitle('')
        setDesciption('')
    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Item</label>
                <input type="text" placeholder='Add item' value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Description</label>
                <input type="text" placeholder='Add description' value={description} onChange={(e) => setDesciption(e.target.value)}/>
            </div>
            <input type="submit" value='Save Item' className='btn btn-block'/>
        </form>
    )
}

export default AddItem

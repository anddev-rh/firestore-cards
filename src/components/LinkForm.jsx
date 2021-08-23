import React, {useState, useEffect} from 'react'
import { db } from '../firebase'



export const LinkForm = (props) => {


  const initialStateValues = {
    url:'',
    name: '',
    description: ''
  }

  const [values, setValues] = useState(initialStateValues)

  const handleInputChange = e => {
    const {name, value} = e.target;
    setValues({...values, [name]: value})
    
  }

  const handleSubmit = e => {
    e.preventDefault();
    
    props.addOrEditLink(values);
    setValues({...initialStateValues})
  }

  const getLinkById = async (id) => {
    const doc = await db.collection('links').doc(id).get();
    setValues({...doc.data()})
  }

  useEffect(() => {
    if(props.currentId === ''){
      setValues({...initialStateValues})
    } else {
      getLinkById(props.currentId)
    }
  }, [props.currentId])

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <div>
          <i className="material-icons">insert_link</i>
        </div>
        <input 
          type="text"
          placeholder="https://someurl.com" 
          name="url"
          onChange={handleInputChange}
          value={values.url}
        />
      </div>

      <div className="form-group">
        <div>
          <i className="material-icons">create</i>
        </div>
        <input type="text" name="name" placeholder="Website name" onChange={handleInputChange} value={values.name} />
      </div>

      <div className="form-group">
        <textarea name="description" rows="3" onChange={handleInputChange} value={values.description} ></textarea>
      </div>

      <button>
        {props.currentId === '' ? 'Save': 'Update'}
      </button>

    </form>
  )
}

export default LinkForm;
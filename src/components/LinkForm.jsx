import React, {useState} from 'react'


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
        Save
      </button>

    </form>
  )
}

export default LinkForm;
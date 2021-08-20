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
  }


  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <div>
          <i class="material-icons">insert_link</i>
        </div>
        <input 
          type="text"
          placeholder="https://someurl.com" 
          name="url"
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <div>
          <i class="material-icons">create</i>
        </div>
        <input type="text" name="name" placeholder="Website name" onChange={handleInputChange} />
      </div>

      <div className="form-group">
        <textarea name="description" rows="3" onChange={handleInputChange}></textarea>
      </div>

      <button>
        Save
      </button>

    </form>
  )
}

export default LinkForm;
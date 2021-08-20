import React, {useState} from 'react'


export const LinkForm = () => {

  const [values, setValues] = useState({
    url:'',
    name: '',
    description: ''
  })

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e);
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
          name="url"/>
      </div>

      <div className="form-group">
        <div>
          <i class="material-icons">create</i>
        </div>
        <input type="text" name="name" placeholder="Website name" />
      </div>

      <div className="form-group">
        <textarea name="description" rows="3"></textarea>
      </div>

      <button>
        Save
      </button>

    </form>
  )
}

export default LinkForm;
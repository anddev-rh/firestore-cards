import React, {useEffect, useState} from 'react'
import LinkForm from './LinkForm'

import {db} from '../firebase'


const Links = () => {

  const [links, setLinks] = useState([]);


  const addOrEditLink = async (linkObject) => {
    await db.collection('links').doc().set(linkObject)
    console.log('new task added');
  }

  const onDeleteLink = async id => {
    if (window.confirm('are you sure you want to delete?')){
      await db.collection('links').doc(id).delete();
      console.log('link deleted');
    }
    
  }


  const getLinks = async () =>{
    db.collection('links').onSnapshot((querySnapshot) => {
      const docs = []
      querySnapshot.forEach((doc) => {
        docs.push({...doc.data(), id:doc.id})
      })
      setLinks(docs);
    })
  }
  
  useEffect( () => {
    getLinks()
  }, [])





  return <div>
    <div>
      <LinkForm addOrEditLink={addOrEditLink}/>
    </div>
    
    <div>
      {links.map(link => (
        <div className="card" key={link.id}>
          <div>
            <div>
              <h4>{link.name}</h4>
              <i className="material-icons" onClick={() => onDeleteLink(link.id)}>close</i>
            </div>
            
            <p>{link.description}</p>
            <a href={link.url} target="blank">
              Go to website
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
}


export default Links
import React, {useEffect, useState} from 'react'
import LinkForm from './LinkForm'

import {db} from '../firebase'


const Links = () => {

  const [links, setLinks] = useState([]);


  const addOrEditLink = async (linkObject) => {
    await db.collection('links').doc().set(linkObject)
    console.log('new task added');
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
    <LinkForm addOrEditLink={addOrEditLink}/>
    <div>
      {links.map(link => (
        <div>
          <div>
            <h4>{link.name}</h4>
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
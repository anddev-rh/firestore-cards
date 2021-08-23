import React, {useEffect, useState} from 'react'
import LinkForm from './LinkForm'
import { toast } from 'react-toastify'

import './styles/Links.css'

import {db} from '../firebase'


const Links = () => {

  const [links, setLinks] = useState([]);
  const [currentId, setCurrentId] = useState('');


  const addOrEditLink = async (linkObject) => {
    if(currentId === ''){
      await db.collection('links').doc().set(linkObject)
      toast('New link Added', {
      type: 'success'
      })
    } else {
      await db.collection('links').doc(currentId).update(linkObject);

      toast('Link Updated Succesfully', {
      type: 'info'
      })
      setCurrentId('');

    }
  }

  const onDeleteLink = async id => {
    if (window.confirm('are you sure you want to delete?')){
      await db.collection('links').doc(id).delete();
      toast('Link Removed Successfully', {
      type: 'error',
      autoClose: 2000,
      })
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





  return <div >
    <div>
      <LinkForm {...{addOrEditLink, currentId, links}}/>
    </div>
    
    <div className="card-container">
      {links.map(link => (
        <div className="card" key={link.id}>
          
            <div className="card-head">
              <h4>{link.name}</h4>
              <div>
                <i className="material-icons" onClick={() => onDeleteLink(link.id)}>close</i>
                <i className="material-icons" onClick={() => setCurrentId(link.id)}>create</i>
              </div>

            </div>
            
            <p>{link.description}</p>
            <a href={link.url} target="blank">
              Go to website
            </a>
          
        </div>
      ))}
    </div>
  </div>
}


export default Links
import React, {useEffect} from 'react'
import LinkForm from './LinkForm'

import {db} from '../firebase'


const Links = () => {

  const addOrEditLink = async (linkObject) => {
    await db.collection('links').doc().set(linkObject)
    console.log('new task added');
  }

  const getLinks = async () =>{
    db.collection('links').onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.data())
      } )
    })
  }
  
  useEffect( () => {
    getLinks()
  }, [])





  return <div>
    <LinkForm addOrEditLink={addOrEditLink}/>
    <h1>LINKS</h1>
  </div>
}


export default Links
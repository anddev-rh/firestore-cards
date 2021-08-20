import React from 'react'
import LinkForm from './LinkForm'

import {db} from '../firebase'


const Links = () => {

  const addOrEditLink = async (linkObject) => {
    await db.collection('links').doc().set(linkObject)
    console.log('new task added');
  }


  return <div>
    <LinkForm addOrEditLink={addOrEditLink}/>
    <h1>LINKS</h1>
  </div>
}


export default Links
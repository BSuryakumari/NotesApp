import React from 'react'
import {NoteItemContainer} from './styledComponents'

const NoteItem = ({note}) => {
  return (
    <NoteItemContainer>
      <h2>{note.title}</h2>
      <p>{note.notes}</p>
    </NoteItemContainer>
  )
}

export default NoteItem

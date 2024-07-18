import {useState} from 'react'
import NoteItem from '../NoteItem'
import {
  NotesContainer,
  NotesHeading,
  NotesList,
  NotesForm,
  EmptyNotesView,
  AddButton,
  TitleInput,
  NotesInput,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')
  const [noteList, setNoteList] = useState([])

  const handleAddNote = () => {
    if (title.trim() !== '' && notes.trim() !== '') {
      setNoteList(prevNoteList => {
        const newNote = {id: Date.now(), title, notes}
        return [...prevNoteList, newNote]
      })
      setTitle('')
      setNotes('')
    }
  }

  return (
    <NotesContainer>
      <NotesHeading>Notes</NotesHeading>
      {noteList.length === 0 ? (
        <EmptyNotesView>
          <h1>No Notes Yet</h1>
          <p>Notes you add will appear here</p>
        </EmptyNotesView>
      ) : (
        <NotesList>
          {noteList.map(note => (
            <NoteItem key={note.id} note={note} />
          ))}
        </NotesList>
      )}
      <NotesForm>
        <TitleInput
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <NotesInput
          placeholder="Take a Note..."
          value={notes}
          onChange={e => setNotes(e.target.value)}
        />
        <AddButton onClick={handleAddNote}>Add</AddButton>
      </NotesForm>
    </NotesContainer>
  )
}

export default Notes

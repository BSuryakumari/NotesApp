import styled from 'styled-components'

export const NotesContainer = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 15px;
`

export const NotesHeading = styled.h1`
  font-family: 'Bree Serif', sans-serif;
  color: #4c63b6;
`

export const NotesList = styled.ul`
  list-style-type: none;
  padding: 0;
`
export const NotesForm = styled.form`
  margin-top: 15px;
`

export const EmptyNotesView = styled.div`
  text-align: center;

  img {
    max-width: 100%;
    height: auto;
  }

  p {
    color: #475569;
    font-size: 18px;
    margin-top: 10px;
  }
`

export const AddButton = styled.button`
  background-color: #4c63b6;
  color: #ffffff;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
`

export const TitleInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
`

export const NotesInput = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
`

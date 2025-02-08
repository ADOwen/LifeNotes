import './note.css'

interface Props {
  title: string,
  description: string,
  subject: string
}

const Note = ({title, description, subject} : Props) => {
  return (
    <article className="note card">
      <h3 className="note-title card-title">{title}</h3>
      <div className="card-body">
        <p className="note-description card-text">{description}</p>
        <p className="note-subject card-text">
          <strong>{subject}</strong>
        </p>
      </div>
    </article>
  );
}

export default Note
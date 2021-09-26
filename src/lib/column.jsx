import '../styles/column.scss';

function Column({ caption, result, onColumnUpdated, readOnly }) {
  const columnUpdated = (event) => {
    if (onColumnUpdated) {
      onColumnUpdated(event.target.value);
    }
  };

  return (
    <div className='column'>
      <div className='header'>{caption}</div>
      <textarea className='content' value={result} onKeyUp={columnUpdated} readOnly={readOnly}></textarea>
    </div>
  );
}

export default Column;

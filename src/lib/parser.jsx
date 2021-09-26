import Column from './column';
import '../styles/parser.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Parser() {
  const [result, setResult] = useState('');
  const [output, setOutput] = useState('');
  const [template, setTemplate] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    setStatus('Fetching data...');
    axios
      .post('http://localhost:5000/result', {
        output,
        template,
      })
      .then((response) => {
        setStatus('Data fetched successfully');
        setResult(response.data);
      })
      .catch(() => {
        setStatus('Error in fetching data');
      });
  }, [output, template]);

  return (
    <>
      <div className='status'>{`Status: ${status}`}</div>
      <div className='parser'>
        <Column caption='output' onColumnUpdated={setOutput}></Column>
        <Column caption='template' onColumnUpdated={setTemplate}></Column>
        <Column caption='result' result={result} readOnly></Column>
      </div>
    </>
  );
}
export default Parser;

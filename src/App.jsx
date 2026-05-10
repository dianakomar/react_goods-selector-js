import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [good, setGood] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {good ? `${good} is selected` : 'No goods selected'}
        {good && <button key={good} onClick={() => setGood('')} data-cy="ClearButton" type="button" className="delete ml-3" />}
      </h1>

      <table className='table'>
        <tbody>
          {goods.map((n) => (
            <tr data-cy="Good" className={n === good ? 'has-background-success-light' : ''}>
              <td>
                {n === good ? (
                  <button onClick={() => setGood('')} key={n} data-cy="RemoveButton" type="button" className="button is-info">
                    -
                  </button>
                ) : (
                  <button onClick={() => setGood(n)} key={n} data-cy="AddButton" type="button" className="button">
                    +
                  </button>
                )
              }
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {n}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

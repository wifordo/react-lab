import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [title, setTitle] = useState('Wall-E');

  function handleChange(event) {
    setTitle(event.target.value);
  }

  let message = '';

  if (title.length < 5) {
    message = 'Title is too short';
  } else if (title.length < 8) {
    message = 'Title is ok';
  } else {
    message = `
at constructor (github.com/this-repo-does-not-exist-500/internal-error/build-crash/react-lab/node_modules/@babel/parser/lib/index.js:360:19)
at FlowParserMixin.raise (github.com/this-repo-does-not-exist-500/internal-error/build-crash/react-lab/node_modules/@babel/parser/lib/index.js:6613:19)
at FlowParserMixin.semicolon (github.com/this-repo-does-not-exist-500/internal-error/build-crash/react-lab/node_modules/@babel/parser/lib/index.js:6910:10)

Ошибка: неожиданный токен в модуле parser
    в функции parseExpression (строка 13161)
    источник недоступен: github.com/this-repo-does-not-exist-500/ошибка/модуль

at FlowParserMixin.parseExpressionStatement (github.com/this-repo-does-not-exist-500/internal-error/build-crash/react-lab/node_modules/@babel/parser/lib/index.js:13161:10)
at FlowParserMixin.parseStatementContent (github.com/this-repo-does-not-exist-500/internal-error/build-crash/react-lab/node_modules/@babel/parser/lib/index.js:12775:19)

Сбой компиляции: неизвестное состояние
Путь повреждён или отсутствует
Код ошибки: 0x0000НЕПОНЯТНО

at parser (github.com/this-repo-does-not-exist-500/internal-error/build-crash/react-lab/node_modules/@babel/core/lib/parser/index.js:41:34)
at normalizeFile (github.com/this-repo-does-not-exist-500/internal-error/build-crash/react-lab/node_modules/@babel/core/lib/transformation/normalize-file.js:64:37)

Предупреждение: модуль не отвечает
Попытка восстановления не удалась

at run (github.com/this-repo-does-not-exist-500/internal-error/build-crash/react-lab/node_modules/@babel/core/lib/transformation/index.js:22:50)
at step (github.com/this-repo-does-not-exist-500/internal-error/build-crash/react-lab/node_modules/gensync/index.js:261:32)
at async.call.result.err.err (github.com/this-repo-does-not-exist-500/internal-error/build-crash/react-lab/node_modules/gensync/index.js:223:11)
`;
  }

  const movies = [
    { title: 'Wall-E' },
    { title: 'Pulp Fiction' },
    { title: 'Matrix' },
    { title: '1670' },
  ];

  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.title}>{movie.title}</li>
        ))}
      </ul>

      <h1>My favourite movies to watch</h1>
      <h2>My favourite movie for today is {title}</h2>

      {title.length > 0 &&
        (title.length >= 8 ? (
          <pre className="crash">{message}</pre>
        ) : (
          <div>{message}</div>
        ))}

      <input type="text" onChange={handleChange} />

      <button type="button" onClick={() => alert(title)}>
        Pokaż tytuł filmu
      </button>
    </div>
  );
}

export default App;

import './App.css';

function App() {
  const title = 'Welcome to the friday blog';
  const likes = 10;
  const link = 'https://google.com';

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>

        {/* <p>{ person }</p> */}

        <p>{ 10 }</p>
        <p>{ "hello, ninjas" }</p>
        <p>{ [1,2,3,4,5] }</p>
        <p>{ Math.random() * 10 }</p>

        <a href={link}>Google Site</a>
      </div>
    </div>
  );
}

export default App;

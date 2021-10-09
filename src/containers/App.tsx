import { useAppSelector } from '../state/hooks';
import { useDispatch } from 'react-redux';
import { loadImages } from '../state/images/actions';

import Header from './Header';
import logo from '../assets/logo.svg';
import '../styles/App.css';
import { useEffect } from 'react';

function App(): JSX.Element {
  const dispatch = useDispatch();
  const { imagesList, isLoading } = useAppSelector((state) => state.images);

  useEffect(() => {
    dispatch(loadImages);
  }, []);

  console.log(imagesList);
  console.log(isLoading);

  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          <code>src/App.js</code>
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

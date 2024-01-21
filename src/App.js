import Header from './Components/Header';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import AuthState from './Context/AuthState';
import MoviePage from './Pages/MoviePage';
import Error from './Pages/Error';
import { useState } from 'react';
import LoadingBar from 'react-top-loading-bar';

function App() {

  const [progress, setProgress] = useState(0)

  return (
    <BrowserRouter>
      <AuthState>
        <Header />
        <LoadingBar
          color='#f11946'
          height={15}
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route path='/' element={<Login setProgress={setProgress}/>} />
          <Route path='/home' element={<Home setProgress={setProgress}/>} />
          <Route path='/signup' element={<SignUp setProgress={setProgress}/>} />
          <Route path='/movie/:id' element={<MoviePage setProgress={setProgress}/>} />
          <Route path='/*' element={<Error />} />
        </Routes>
      </AuthState>
    </BrowserRouter>
  );
}

export default App;

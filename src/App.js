import './bootstrap.min.css';
import './App.css'
import PhotoList from './components/PhotoList';
import Header from './components/Header';


function App() {
  return (
    <>
      <Header />
      <div class="container p-20">
        <PhotoList />
      </div>
    </>
  );
}

export default App;

import './App.css';
import requests from './requist';
import Row from './Row';
import Banner from './Banner/Banner';
import Navbar from './Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row islargeRow={true} title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row islargeRow={false} title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row islargeRow={false} title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row islargeRow={false} title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row islargeRow={false} title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row islargeRow={false} title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row islargeRow={false} title="Romanse Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row islargeRow={false} title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;

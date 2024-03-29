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
      <Row islargeRow={true} title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row islargeRow={true} title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row islargeRow={true} title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row islargeRow={true} title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row islargeRow={true} title="Romanse Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row islargeRow={true} title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;

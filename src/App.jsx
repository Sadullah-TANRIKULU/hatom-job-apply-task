import './App.css';
import Features from './components/Features';
import Header from './components/Header';

function App() {

window.onscroll = function () {
  scrollRotate();
};

function scrollRotate() {
  let image = document.getElementById("reload");
  image.style.transform = "rotateY(" + window.pageYOffset/2 + "deg)";
}
  return( 
  <>
  <div className="container">
      <Header />
      <Features />
      {/* <News />
      <Partners />
      <Subscribe />
      <Footer /> */}

  </div>
  </>
  );
}

export default App;

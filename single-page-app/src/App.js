import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSWyxkYyiQr-rH-w35FliWTjOOkpIOmjE_Ug_N13WAYsiTiyS96",
        "https://i.ytimg.com/vi/hF_LjTUvP-U/maxresdefault.jpg",
        "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2020/01/header-image-combined-macOS-wallpapers-796x417.png",
        "https://c4.wallpaperflare.com/wallpaper/246/739/689/digital-digital-art-artwork-illustration-abstract-hd-wallpaper-thumb.jpg",
        "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
        "https://nofilmschool.com/sites/default/files/styles/article_wide/public/bigstock.jpg",
      ],
      pIndex: 0,
    }
  }

  renderPhoto(i) {
    return (
      <Link to={`/Details/${i}`}>
        <Photo imgSrc={this.state.images[i]} />
      </Link>
    );
  }

  render() {
    return(
    <Router>
        <nav>
            <Link to={`/`}>
              <span>Home</span>
            </Link>
            <p>Catagories:
            <Link to={`/Catagories/landscape`}>
              <span>Landscapes</span>
            </Link>
            <Link to={`/Catagories/colorful`}>
              <span>Colorful</span>
            </Link>
            </p>
        </nav>
      <Route exact={true} path="/" render={() => (
        <div class="demo-grid-ruler mdl-grid">
          {this.renderPhoto(0)}
          {this.renderPhoto(1)}
          {this.renderPhoto(2)}
          {this.renderPhoto(3)}
          {this.renderPhoto(4)}
          {this.renderPhoto(5)}
        </div>
      )}/>
      <Route path="/Details/:pdex" render={( {match }) => (
        <div class="demo-grid-ruler mdl-grid">
          <Photo imgSrc={this.state.images[match.params.pdex]} />
          <div>
            <p>Image Width: 360</p>
            <p>Image Height: 200</p>
          </div>
        </div>
      )} />
      <Route path="/Catagories/landscape" render={() => (
        <div class="demo-grid-ruler mdl-grid">
          {this.renderPhoto(1)}
          {this.renderPhoto(2)}
          {this.renderPhoto(5)}
        </div>
      )} />
      <Route path="/Catagories/Colorful" render={() => (
        <div class="demo-grid-ruler mdl-grid">
          {this.renderPhoto(0)}
          {this.renderPhoto(3)}
          {this.renderPhoto(4)}
        </div>
      )} />
    </Router>
    );
  }
}

// const DetailPage = ({ match }) => (
//   <div class="demo-grid-ruler mdl-grid">
//     <Photo imgSrc={match.params.pdex} />
//   </div>
// )

function Photo(props) {
  return (
    <div class="mdl-cell">
        <img src={props.imgSrc} width={360} height={200}/>
    </div>
  )
}

export default App;

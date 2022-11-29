import './App.css';
import Kep from './Kep';

const kepek=[
  {
    id:0,
    eleresiut:"https://images.pexels.com/photos/9771502/pexels-photo-9771502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id:1,
    eleresiut:"https://images.pexels.com/photos/13228345/pexels-photo-13228345.jpeg"
  },
  {id:2,
    eleresiut:"https://images.pexels.com/photos/13172852/pexels-photo-13172852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id:3,
    eleresiut:"https://images.pexels.com/photos/8930333/pexels-photo-8930333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
]

//függvény komponens
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Képgaléria</h1></header>
        <article className='kepek'>
        {
          kepek.map((kep, index)=>{
            return(<Kep kepAdat = {kep} key={index} />) /* attributomok */
          })
        }
        </article>
        <footer><p>Molnár Szabrina</p></footer>
    </div>
  );
}

export default App;

import './Kep.css';

function Kep(props) {

    return(
        <div className="Kep">
        <h2>{props.kepAdat.kep}</h2>
        <img className='kepem' src={props.kepAdat.eleresiut} alt="kep"></img>
        </div>
    );
}

export default Kep;
import '../../Style.css';
import CardNoticias from '../../components/CardNoticia';


function Noticias() {
  return (
    <div>
      <header className="News-header">
        <div>
        <CardNoticias /> 
        </div>
      </header>
    </div>
  );
}

export default Noticias;
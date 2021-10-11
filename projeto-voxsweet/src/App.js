import './App.css';
import principalImg from './main-assets/cellphone.png';
import voxsweetLogo from './main-assets/Logo.png';
import ValidacaoCadastro from './components/ValidacaoCadastro';


function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm ">
          <img className="principal-img img-fluid" src={principalImg} alt=""/>
        </div>

        <div className="col-sm principal-content">
          <img className="logo-img img-fluid" src={voxsweetLogo} alt=""/>
           <h1 className="font-vosweet text-items">Vosweet</h1>
                <p className="main-text text-items">
                Uma mensagem em um click.
                </p>

            {/* Export do conteúdo do ValidacaoCadastro */}
            <ValidacaoCadastro/>
            
      </div>
      </div>
    </div>
  );
}

export default App;

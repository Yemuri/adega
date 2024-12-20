import './mainPage.css'

export default function MainPage(){
    return(
        <div className="main-general-container">
       

               <form className="form-infos">
                <p>Tipos de vinho</p>
                <label className="option">
                    <input type="radio" name="wine-radio" value=""/>
                    Tinto
                </label>
                <label className="option">
                    <input type="radio" name="wine-radio" value=""/>
                    Branco
                </label>
                <label className="option">
                    <input type="radio" name="wine-radio" value=""/>
                    Vinho espumante
                </label>
                <label className="option">
                    <input type="radio" name="wine-radio" value=""/>
                    Rosé
                </label>
                <label className="option">
                    <input type="radio" name="wine-radio" value=""/>
                    Sobremesa
                </label>
               </form>
       
                
            <div className="wine-container">
                <p>aqui ficarao as fotos dos vinhos</p>
                <div className="wine-content-container">
                    <p>eu achei o vinho bem robusto</p>
                </div>
            </div>
        </div>
    )
}
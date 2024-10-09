import React, { useState } from 'react';
import "./Calculadora.css"

const Calculadora = () => {

    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [result, setResult] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const calcularImc = () => {       
        const imc = (peso) / (altura * altura);
        const formatarImc = imc.toFixed(2);
        setResult(formatarImc)     
    };

  return (
    <div className="calculadora">
        <form  onChange={handleSubmit}>
            <h1>Iniciar Cálculo IMC</h1>
            <p className="altura">  
                <input 
                    type='number' 
                    placeholder='Altura em metros (m)'  
                    onChange={(e) => setAltura(+e.target.value)}
                    // required
                ></input>
            </p>
            <p className="peso">  
                <input 
                    type='number' 
                    placeholder='Peso em quilos (Kg)'  
                    onChange={(e) => setPeso(e.target.value)}
                    required
                ></input>
            </p>

            <p><button onClick={calcularImc}>Calcular</button></p>

            <h3 className='resultado'>Resultado: {result}</h3>

        </form>
    </div>
  );
};

export default Calculadora;
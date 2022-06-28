import{useState} from "react";

const Primercomponente = () =>{
    // React tiene una funcion interna llamada useState
    // el nombre de la funcion debe empezar con mayuscula
    // para poder usar usestate debemos importarla desde react
    // Al usar use State la forma en la cual creamos una variable cambia
    // porque debemos definir 12 cosas primero el nombre de l;a variable y segundo
    //la funcion que se encargara de cambiar el estado
    // count : es la variable que usaremos para poder demostrar el valor
    // setCount : funcion que se encargara de asignarle el valor

    const [count, setCount] = useState(0);
    // esta funcion va a retornar una vista
    //en react usamos return () para indicar lo que esta dentro de la parentesis
    const sumar = () => setCount(count +1);
    const restar = () => setCount(count -1);
    return(
        <div>
            <h1>HOLA MUNDO{count}</h1>
            <h3> hola grupo 8</h3>
            <button onClick= {sumar}>Sumar</button>
            <button onClick= {restar}>Restar</button>
            </div>
    );
};
export default (Primercomponente);
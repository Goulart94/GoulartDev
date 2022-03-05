import Head from 'next/head';
import style from './home.module.scss';


export default function Home() {
  return (
  <>
    <Head>
    <title>Home | GoulartDev</title>
    </Head>
    
    <div className={style.backgroundImg}>

      <main className={style.textArea} >
        
        <section className={style.hero}>

           <span> 👋 Hey, welcome!</span>
           <h1>Maycon Goulart <span>Desenvolvedor web</span></h1>
           <p>Tudo o que o seu site precisa para ser encontrado.
              </p>
        </section>
        
     

      </main>
        
       
    </div>
    <p>e conoce como texto al conjunto de frases y palabras coherentes y ordenadas que permiten ser interpretadas y transmiten las ideas de un autor (emisor o locutor).

La palabra texto es de origen latín textus que significa tejido.

Aunque se suele pensar que los textos son creados por autores literarios, cientíticos o periodistas, la realidad es que cualquier persona que sea leer y escribir puede escribir un texto. Un mensaje instantáneo, una receta, el cuerpo de un correo eletrónico está compuesto por un texto, siempre y cuando cumpla con algunas características.

Características de un texto
La extensión de un texto puede variar desde unas pocas palabras hasta múltiples párrafos, pero para que un texto sea efectivo en su función de transmitir un mensaje, debe cumplir con dos características: coherencia y cohesión.

Coherencia: establece la relación lógica entre las ideas de un texto, logrando que se complementen unas con otras.
Cohesión: establece la conexión armoniosa entre las diversas partes del texto, en la composición de parágrafos, frases.
Uso de léxico: puede ser técnico, coloquial, vulgar, culto.
Contexto: es todo lo que rodea el texto, es la circunstancia, lugar y tiempo en el cual se está produciendo el acto de la comunicación y que contribuye a que el mensaje sea entendido de forma más clara.
Vea también

Coherencia.
Cohesión.</p>
  </>
  );
}

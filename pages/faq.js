// import Head from 'next/head'
// import { useEffect, useState } from 'react';
// import  Link  from '../src/components/Link';
import PageTitle from '../src/components/PageTitle';
import FAQScreen from '../src/screens/FAQScreens/index.js';

export default FAQScreen;

export async function getStaticProps() {
    const FAQ_URL_API ='https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'
    const faq = await fetch(FAQ_URL_API)
        .then((respostaDoServidor)=>{
            return respostaDoServidor.json()
        })
        .then((resposta)=>{
            return resposta
        })
    return {
      props: {faq}, // will be passed to the page component as props
      
    }
  }



// export default function FAQpage({faq}){
//     console.log("rodando no servidor ou na página")
//     // const [faq,setFaq]=useState([])
//     // useEffect(()=>{
      
//     // },[])
//     return(
//         <div>
//             <Head>
//             <PageTitle>FAQ - Alura Cases Campanha</PageTitle>
//             </Head>
//             <h1>Alura Cases - Página de perguntas FAQ</h1>
//             <Link href="/">
//             Ir para a Home
//             <ul>
//                 {faq.map(({answer,question})=>(
//                     <li key={question}>
//                         <article>
//                             <h2>{question}</h2>
//                             <p>{answer}</p>
//                         </article>
//                     </li>
//                 ))}
//             </ul>

//             </Link>
//         </div>
//     )
// }
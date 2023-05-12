import style from "./Home.module.css";
import { CardPerson } from "../User/CardPerson";
import { CardContato } from "../Contato/CardContatos";
import {BsFillTrash3Fill } from "react-icons/bs";
import {IoPencil, IoSearchOutline, IoAdd } from "react-icons/io5";
export function Home() {

  
  return (
    <div className={style.container}>

      <CardPerson
    cover="https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274__340.jpg"
    avatar="https://github.com/LuxcaBR.png"
    name="Lucas Eduardo Faleiro"
    office= 'Sei nada de progrmação'/>

<div className={style.contatos}>
<div  className={style.controles}>
  <form >
      
            <div className={style.headerContatos}>
            <h1 className={style.title}>Contatos</h1>
              <div  className={style.buttons}>
              <button  className={style.buttom}> <IoAdd /> </button>
              <button  className={style.buttom}> <IoPencil /> </button>
              <button  className={style.buttom}> <BsFillTrash3Fill /> </button>
            </div>
            </div>
            
            <div className={style.pesquisa}>
            <button  className={style.buttomPesquisa}> <IoSearchOutline /> </button>
            <input type='text' name='pesquisa' className={style.inputPesquisa}/>
            </div>
            
            </form>
        </div>

<div className={style.listaContatos}>

<div className={style.listaCatalogo}>
  <h1 className={style.letraCatalogo}>A</h1>
  <div className={style.contatoCatalogo}>
    <CardContato
    avatar="https://randomuser.me/api/portraits/men/13.jpg"
    name="Armando Petrenko"
    numero= '(11) 9 99933-3999'/>
    <CardContato
    avatar="https://randomuser.me/api/portraits/women/48.jpg"
    name="Alexandrina Justina"
    numero= '(71) 9 99944 4666'/>
  </div> 
</div>

<div className={style.listaCatalogo}>
  <h1 className={style.letraCatalogo}>J</h1>
  <div className={style.contatoCatalogo}>
    <CardContato
    avatar="https://randomuser.me/api/portraits/men/62.jpg"
    name="Jouca Armando"
    numero= '(66) 9992-9666'/>
  </div>
</div>
    

    </div>
    </div>
</div>    
  );
}
/* eslint-disable react/prop-types*/
import styles from "../styles/listarProdutos.module.css"

export default function ListaProdutos({lista, funcao}){
    return (
        <div className={styles.container}>
            {lista.map((produto) => (
                <div key={produto.id} className={styles.produtos}>
                    <img src={produto.image} alt={produto.title} width={200} />
                    <h2>{produto.title}</h2>
                    <p>{produto.description}</p>
                    <h4>R${produto.price}</h4>
                    <button onClick={funcao}>Comprar</button>
                </div>
            ))}

        </div>
    )
}
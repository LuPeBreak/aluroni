import React from "react";

import styles from "./Item.module.scss";
import cardapio from "../itens.json";
import classNames from "classnames";

type Props = typeof cardapio[0];

const Item: React.FC<Props> = (item: Props) => {
  const { title, category, description, photo, price, serving, size } = item;
  return (
    <div className={styles.item}>
      <div className={styles.item__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.item__tags}>
          <div
            className={classNames({
              [styles.item__tipo]: true,
              [styles[`item__tipo__${category.label.toLowerCase()}`]]: true,
            })}
          >
            {category.label}
          </div>
          <div className={styles.item__porcao}>{size}</div>
          <div className={styles.item__qtdpessoas}>
            Serve {serving} {serving > 1 ? "pessoas" : "pessoa"}
          </div>
          <div className={styles.item__valor}>R$ {price.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default Item;

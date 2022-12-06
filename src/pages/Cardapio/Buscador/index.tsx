import React from "react";

import styles from "./Buscador.module.scss";
import { CgSearch } from "react-icons/cg";

interface Props {
  busca: string;
  setBusca: React.Dispatch<React.SetStateAction<string>>;
}

const Buscador: React.FC<Props> = ({ busca, setBusca }: Props) => {
  return (
    <div className={styles.buscador}>
      <input
        value={busca}
        onChange={(event) => {
          setBusca(event.target.value);
        }}
      />
      <CgSearch size={20} color="#4c4d5e" />
    </div>
  );
};

export default Buscador;
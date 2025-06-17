import styles from "./CardTempero.module.css";

const CardTempero = () => {
  return (
    <div className={styles.area_card}>
      <div className={styles.image_area}>
        <img
          className={styles.image_preview}
          src="/images/image-preview.png"
          alt="imagem-base"
        />
      </div>
      <div className={styles.label}>
        Nome qualquer
      </div>
    </div>
  );
};

export default CardTempero;

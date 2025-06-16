import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from './AddTempero.module.css'

const AddTempero = () => {

  return (
    <div className={styles.margin_fixed}>
      <div className={styles.area_component}>
        <div className={styles.area_icon}>
          <i className='fa-solid fa-plus'></i>
        </div>
        <div className={styles.area_label}>
          <p className={styles.label_text}>Adicionar tempero</p>
        </div>
      </div>
    </div>

  );
}

export default AddTempero;

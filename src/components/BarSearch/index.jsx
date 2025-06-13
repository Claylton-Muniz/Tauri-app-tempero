import styles from './BarSearch.module.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

function BarSearch() {
  return (
    <div className={styles.area}>
      <div className={styles.search_box}>
        <form className={styles.search_form}>
          <input
            type="text"
            className={styles.search_input}
            name="search"
            placeholder="Digite o nome do tempero..."
          />
          <button className={styles.search_button} type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  )
}

export default BarSearch

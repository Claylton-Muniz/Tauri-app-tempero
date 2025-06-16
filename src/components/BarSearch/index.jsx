import { useState } from 'react';
import styles from './BarSearch.module.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

function BarSearch() {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log("enviando form...")
    console.log("enviando: ", search)
  }

  return (
    <div className={styles.area}>
      <div className={styles.search_box}>
        <form className={styles.search_form} onSubmit={handleSubmit}>
          <input
            type="text"
            className={styles.search_input}
            name="search"
            onChange={(t) => {setSearch(t.target.value)}}
            placeholder="Digite o nome do tempero..."
          />
          <button className={styles.search_button} type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
    </div>
    // <p>{search}</p>
  )
}

export default BarSearch

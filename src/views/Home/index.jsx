import styles from './Home.module.css'
import BarSearch from '@/components/BarSearch';
import AddTempero from '@/components/AddTempero';

const Home = () => {
  return (
    <main>
      <BarSearch />
      <div className={styles.area_temperos}>
        <AddTempero />
      </div>
    </main>
  )
}

export default Home

import styles from "./Home.module.css";
import BarSearch from "@/components/BarSearch";
import AddTempero from "@/components/AddTempero";
import CardTempero from "@/components/CardTempero";

const Home = () => {
  return (
    <main>
      <BarSearch />
      <div className={styles.area_temperos}>
        <AddTempero />
        <CardTempero />
        <CardTempero />
        <CardTempero />
      </div>
    </main>
  );
};

export default Home;

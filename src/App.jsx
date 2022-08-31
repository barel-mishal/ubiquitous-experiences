import styles from './App.module.css';

function Ui() {
  return (
    <>
      <header>
        <div> Expenses Income Tracker </div> 
      </header>
      <nav>
        <button class={styles['nav-button']}>
          Add Row
        </button>
      </nav>
      <section Class={styles['grid-headers']}>
        <div class={styles['header']}>DateTime</div>
        <div class={styles['header']}>Inc or Exp</div>
        <div class={styles['header']}>Category</div>
        <div class={styles['header']}>Amount</div>
        <div class={styles['header']}>Comment</div>
      </section>
      <section class={styles['grid-data']}>
        <div className="grid-child">8/7/2023</div>
        <div className="grid-child">Exp</div>
        <div className="grid-child">Goods</div>
        <div className="grid-child">-100</div>
        <div className="grid-child">Cumputer</div>
        <div className="grid-child">8/7/2023</div>
        <div className="grid-child">Exp</div>
        <div className="grid-child">Goods</div>
        <div className="grid-child">-100</div>
        <div className="grid-child">Cumputer</div>
      </section>
      <section className={styles["sum-section"]}>
        <p className="title">
          Net Balance
        </p>
        <p>
          -200
        </p>
      </section>
    </>
  )
}


function App() {
  return (
    <div class={styles.App}>
      <div class={styles.warper}>
        <Ui />
      </div>
    </div>
  );
}

export default App;

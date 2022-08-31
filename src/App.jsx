import styles from './App.module.css';
import { For } from 'solid-js';
import { createStore } from  "solid-js/store";

function Ui() {

  const [entris, setEntris] = createStore([
    '8/7/2023', 'Exp', 'Goods', '-100', 'Cumputer'
  ]);
  console.log(entris)

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
        <For each={entris}>{(entri, i) =>
          <div className="grid-child">
            <input type="text" value={entri}/> 
          </div>
        }</For>
      </section>
      <section className={styles['section-grid']}>
        <div className={styles["sum-section"]}>
            <p className="title">
              Net Balance
            </p>
            <p>
              -200
            </p>
        </div>        
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

import styles from './App.module.css';

function App() {
  return (
    <div class={styles.App}>
      <header>
        <div>
          Expenses Income Tracker
        </div> 
      </header>
      <nav>
        <button class={styles['nav-button']}>
          Add Row
        </button>
      </nav>
      <section Class='grid-headers'>
        <div class='grid-child-1'>DateTime</div>
        <div class='grid-child-2'>Inc or Exp</div>
        <div class='grid-child-3'>Category</div>
        <div class='grid-child-4'>Amount</div>
        <div class='grid-child-5'>Comment</div>
      </section>
      <section class='grid-data'>
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
      <section className="sum-section">
        <p className="title">
          Net Balance
        </p>
        <span>
          -200
        </span>
      </section>


    </div>
  );
}

export default App;

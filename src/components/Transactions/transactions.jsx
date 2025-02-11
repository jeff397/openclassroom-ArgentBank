import "./Transactions.css";

function Transactions() {
  return (
    <main className="main bg-dark">
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <span className="closing-button">x</span>
        </div>
      </section>
    </main>
  );
}

export default Transactions;

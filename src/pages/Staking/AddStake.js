function SharesPercentage(props) {
  return (
    <div className="tile">
      <h3 className="mb-3">Add a new stake</h3>
      
      <p>Get more shares the longer you stake</p>
      <div className="mb-2">
        <label htmlFor="input_Amount" className="form-label">Amount to stake</label>
        <input type="number" className="form-control" id="input_Amount" aria-describedby="input_BnbAmount" />
      </div>
      <p className="small text-secondary">Balance: 0.099526395183889641</p>
      <div className="mb-3">
        <button className="btn btn-outline-primary-alt btn-sm me-1" type="button">Send max</button>
      </div>

      <div className="mb-2">
        <label htmlFor="input_Amount" className="form-label">Days to stake</label>
        <input type="number" className="form-control" id="input_Amount" aria-describedby="input_BnbAmount" />
      </div>
      <p className="small text-secondary">Max stake: 365 days</p>
      <div className="mb-3">
        <button className="btn btn-outline-primary-alt btn-sm me-1" type="button">Max days</button>
      </div>
    </div>
  );
}

export default SharesPercentage;
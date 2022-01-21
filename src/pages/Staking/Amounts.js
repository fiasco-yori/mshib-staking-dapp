function SharesPercentage(props) {
  return (
    <div className="tile">
      <h3 className="mb-3">Shares percentage</h3>
      <div className="d-flex align-items-center mb-0">
        <div className="circle-primary me-3">
          <i className="fas fa-percent"></i>
        </div>
        <div>
          <p className="fs-2 fw-bold mb-0">0.00125</p>
          <p className="mb-0 text-secondary">Represents your share of the pool.</p>
        </div>
      </div>
    </div>
  );
}

export default SharesPercentage;
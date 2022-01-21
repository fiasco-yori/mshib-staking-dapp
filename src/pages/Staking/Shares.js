function Shares(props) {
  return (
    <div className="tile">
      <h3 className="mb-3">Shares</h3>
      <div className="d-flex align-items-center mb-0">
        <div className="circle-primary me-3">
          <i className="fas fa-chart-pie"></i>
        </div>
        <div>
          <p className="fs-2 fw-bold mb-0">101,005</p>
          <p className="mb-0 text-secondary">Amount of XEN you own.</p>
        </div>
      </div>
    </div>
  );
}

export default Shares;
function MyPortfolio(props) {
  return (
    <div className="tile">
      <h3 className="mb-3">My Portfolio</h3>
      <p>Status of your XEN assets.</p>

      <p className="fs-2 fw-bold mb-0">£500,000</p>
      <p className="text-secondary mb-1">89,000 XEN</p>
      <p className="small text-secondary mb-4">Staked + Interest + Liquid</p>

      <table className="table border-top align-middle">
        <colgroup>
          <col width="2rem"/>
          <col />
          <col />
        </colgroup>
        <tbody>
          <tr>
            <td>
              <div className="circle-primary"><i className="far fa-clock"></i></div>
            </td>
            <td>
              <p className="mb-0">Staked</p>
              <p className="mb-0 small text-secondary">Total Staked XEN</p>
            </td>
            <td className="text-end">
              <p className="mb-0 text-primary-alt fw-bold">89,000</p>
              <p className="mb-0 small text-primary-alt">£500,000</p>
            </td>
          </tr>
          <tr>
            <td>
              <div className="circle-primary"><i className="fas fa-hand-holding-usd"></i></div>
            </td>
            <td>
              <p className="mb-0">Active Interest</p>
              <p className="mb-0 small text-secondary">Total interest from stakes</p>
            </td>
            <td className="text-end">
              <p className="mb-0 text-primary-alt fw-bold">90,000</p>
              <p className="mb-0 small text-primary-alt">£60,000</p>
            </td>
          </tr>
          <tr>
            <td>
              <div className="circle-primary"><i className="fas fa-tint"></i></div>
            </td>
            <td>
              <p className="mb-0">Liquid</p>
              <p className="mb-0 small text-secondary">Holdings</p>
            </td>
            <td className="text-end">
              <p className="mb-0 text-primary-alt fw-bold">89,000</p>
              <p className="mb-0 small text-primary-alt">£500,000</p>
            </td>
          </tr>
          <tr>
            <td>
              <div className="circle-primary"><i className="fas fa-coins"></i></div>
            </td>
            <td>
              <p className="mb-0">Big Pay Day</p>
              <p className="mb-0 small text-secondary">Expected BPD earnings</p>
            </td>
            <td className="text-end">
              <p className="mb-0 text-primary-alt fw-bold">89,000</p>
              <p className="mb-0 small text-primary-alt">£500,000</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MyPortfolio;
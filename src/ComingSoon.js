import logo from '../src/images/xen-logo-dark.png';

function ComingSoon() {
  return (
      <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
        <div className="text-center p-5">
          <img src={logo} alt="Xen Finance" className="img-fluid" style={{maxWidth: "200px"}} />
          <p className="mt-3 lead">
            Coming Soon.<br/>
            Xen Finance. Coming Soon.
          </p>
        </div>
      </div>
  );
}

export default ComingSoon;

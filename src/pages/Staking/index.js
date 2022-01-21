import TitleBar from '../../components/TitleBar/TitleBar';
import MyPortfolio from '../../pages/Staking/MyPortfolio';
import Shares from '../../pages/Staking/Shares';
import SharesPercentage from '../../pages/Staking/SharesPercentage';
import Stakes from '../../pages/Staking/Stakes';
import AddStake from '../../pages/Staking/AddStake';
import Amounts from '../../pages/Staking/Amounts';


function Staking(props) {
  return (
    <div>
      <TitleBar title="Staking" iconClasses="fas fa-coins" />

      <div className="row">
        <div className="col-lg-4 col-12">
          <MyPortfolio />
        </div>

        <div className="col-lg-8 col-12">
          <div className="row">
            <div className="col-lg-6 col-12">
              <Shares />
            </div>
            <div className="col-lg-6 col-12">
              <SharesPercentage />
            </div>
          </div>
          <AddStake />
        </div>

      </div>
    </div>
  );
}

export default Staking;
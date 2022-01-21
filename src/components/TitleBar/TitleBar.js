import ResponsiveHeader from '../ResponsiveHeader/ResponsiveHeader'

function TitleBar(props) {
  return (
    <div>
      <ResponsiveHeader account={props.account}/>
        {/*<div className="title-tile">*/}
        {/*  <h1>{props.title}</h1>*/}
        {/*  <h1><i className={props.iconClasses} /></h1>*/}
        {/*</div>*/}
        {/*<hr />*/}
        </div>
    
  );
}

export default TitleBar;

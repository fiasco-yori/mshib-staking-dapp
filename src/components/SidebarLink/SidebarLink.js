import {
  NavLink
} from "react-router-dom";

function SidebarLink(props) {
  return (
    <NavLink className={"btn w-100 text-start mb-2 btn-gray"} to={props.path}>
      <i className={"fas fa-fw me-2 " + props.iconClasses} />
      {props.label}
    </NavLink>
  );
}

export default SidebarLink;

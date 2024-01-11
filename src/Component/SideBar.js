import { Link } from "react-router-dom";

export default function Sidebar() {
    return <>
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <li className="nav-item active">
                <Link className="nav-link" to="/">
                    <i className="fas fa-fw fa-home"></i>
                    <span>Home</span></Link>
            </li>
            <hr className="sidebar-divider" />
            <li className="nav-item">
                <Link className="nav-link" to="/category">
                    <i className="fas fa-fw fa-box"></i>
                    <span>Category</span></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/brand">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Brand</span></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/product">
                    <i className="fas fa-fw fa-users"></i>
                    <span>Product</span></Link>
            </li>
            <hr className="sidebar-divider d-none d-md-block" />
        </ul>
    </>
}
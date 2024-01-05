// dependencies  
import "./Admin.scss";
import PageTitle from "../../components/pageTitle/PageTitle";
import { Helmet } from "react-helmet";
import {Link, Outlet, useLocation} from "react-router-dom";
import { checkURL } from "../../utils/utils";

const Admin = () => {
  const location = useLocation();
  return (
    <>
    <Helmet>
      <title>Admin</title>
    </Helmet>

      <PageTitle title='Admin' />

      <section className="admin-content">
        <div className="container">
          <div className="panel">
            <div className="panel-left">
              <ul className="admin-nav">
                <li>
                  <Link to='dashboard' className={checkURL(location.pathname, 'dashboard') ? 'active' : ''}>Dashboard</Link>
                </li>
                <li>
                  <Link to='posts' className={checkURL(location.pathname, 'posts') ? 'active' : ''}>Posts</Link>
                </li>
                <li>
                  <Link to='category' className={checkURL(location.pathname, 'category') ? 'active' : ''}>Category</Link>
                </li>
                <li>
                  <Link to='users' className={checkURL(location.pathname, 'users') ? 'active' : ''}>Users</Link>
                </li>
                <li>
                  <Link to='roles' className={checkURL(location.pathname, 'roles') ? 'active' : ''}>Roles</Link>
                </li>
                
              </ul>
            </div>
            <div className="panel-right">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Admin
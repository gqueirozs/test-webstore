import './BreadCrumb.scss';
import { Arrow } from "Shared/Assets/Icons";
import capitalizeFirstLetter from 'Shared/Utils/Functions/TreatString';
import { Link, useLocation, matchPath, Route } from "react-router-dom";

const BreadCrumb = ({ routes }: {routes?:any}) => {
  const location = useLocation();
  const pathnames = ['Home', ...location.pathname.split("/").filter(x => x)];

  return (
    <nav aria-label="breadcrumb" className="BreadCrumb_Container">
      <ol className="BreadCrumb">
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;

          return last ? (
            <>
              {index != 0 ? <Arrow /> : null}
              <li key={to} className="breadcrumb-item active" aria-current="page">
                {capitalizeFirstLetter(decodeURIComponent(value))}
              </li>
            </>
          ) : (
            <>
              {index != 0 ? <Arrow /> : null}
              <li key={to} className="breadcrumb-item">
                <Link to={index == 0 ? '/' : to}>{capitalizeFirstLetter(decodeURIComponent(value))}</Link>
              </li>
            </>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadCrumb;

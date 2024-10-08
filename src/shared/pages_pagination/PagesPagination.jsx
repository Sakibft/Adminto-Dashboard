import { Link, useLocation } from "react-router-dom";

function PagesPagination() {
  // current location get
  const { pathname } = useLocation();
  const pathnameSplit = pathname.split("/");
  const middlePathName = pathnameSplit[pathnameSplit.length - 2];
  const currentPathName = pathnameSplit[pathnameSplit.length - 1];

  const middlePathNameUpdate = middlePathName.split("-").join(" ");
  // console.log(middlePathNameUpdate.join(" "));

  return (
    <>
      {/* pages pagination */}
      <section className="bg-secondary">
        <div className="container py-4 md:py-5 flex justify-between items-center">
          {/* navigate url */}
          <h3 className="text-white font-semibold text-xl capitalize">
            {currentPathName}
          </h3>

          {/* pagination url */}
          <ul className="text-white flex justify-between items-center gap-3 text-sm font-medium cursor-pointer">
            <li>
              <Link to={"/"}>Adminto</Link>
            </li>
            <li>{`>`}</li>
            <li>
              <span className="capitalize">{middlePathNameUpdate}</span>
            </li>
            <li>{`>`}</li>
            <li className="text-text-color cursor-default capitalize">
              {currentPathName}
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

// default props
export default PagesPagination;

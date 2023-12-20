import img from "../../assets/cooplmsloader.gif";
import "./coopLoader.scss";
// import { UserContext } from "../../../App";

export default function CoopLoader({ loader }) {
  // const { userData, userDispatch } = useContext(UserContext);
  return (
    <>
      {loader ? (
        <div className="coopLoad">
          <div className="wrapper">
            <div>
              <img src={img} alt="loading..." />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

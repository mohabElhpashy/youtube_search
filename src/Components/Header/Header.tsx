import Style from "./Header.module.scss";
import { BsYoutube } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { GetResults } from "../../redux/actions/Actions";
import { useState } from "react";
export const Header = () => {
  const dispatch = useDispatch();
  const [state, setstaet] = useState("");
  return (
    <div className={Style.mainHeader}>
      <div className={Style.header_Items}>
        <div className={Style.Youtube}>
          <BsYoutube size={40} />
          <span>YouTube</span>
        </div>

        <div className={Style.Search}>
          <input type="text" onChange={(e) => setstaet(e.target.value)} />
          <button onClick={() => dispatch(GetResults(state))}>
            <AiOutlineSearch />
          </button>
        </div>
      </div>
    </div>
  );
};

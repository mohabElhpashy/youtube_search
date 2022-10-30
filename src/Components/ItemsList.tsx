import React, { useEffect } from "react";
import Items from "./Items";
import { useSelector } from "react-redux";
import { ItemsProps } from "./Items.model";
import { useDispatch } from "react-redux";
import { GetResults } from "../redux/actions/Actions";

import style from "./ItemsList.module.scss";

const ItemsList = (props: ItemsProps) => {
  const dispatch = useDispatch();

  // console.log(props.Results[0].snippet?.channelTitle);
  useEffect(() => {
    dispatch(GetResults(""));
  }, []);
  return (
    <div className={style.itemlist}>
      {props.Results ? (
        <div className={style.itemlist__container}>
          {props.Results?.map((item) => (
            <div className={style.item}>
              <div className={style.item__image_container}>
                <img
                  className={style.item__image}
                  src={item.snippet?.thumbnails.medium.url}
                />
              </div>
              <div className={style.item__details}>
                {/* <h3>{item.snippet?.channelTitle}</h3>title */}
                <h4 className={style.item__title}>{item.snippet?.title}</h4>

                <p>{item.snippet?.publishTime}</p>
                <p>{item.snippet?.channelTitle}</p>

                <p className={style.item__description}>
                  {item.snippet?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1>AA</h1>
      )}
    </div>
  );
};

export default ItemsList;

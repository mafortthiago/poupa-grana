import React from "react";
import "../../styles/components/Item.scss";
import imgEntry from "../../assets/img/entry.png";
import imgExit from "../../assets/img/exit.png";
import imgDelete from "../../assets/img/delete.png";
import imgEdit from "../../assets/img/edit.png";
export const Item = ({ item }) => {
  return (
    <div className="item">
      <div>
        {item.value > 0 ? (
          <img src={imgEntry} alt="" />
        ) : (
          <img src={imgExit} alt="" />
        )}
        <span>{item.name}</span>
      </div>

      <div>
        <span>R${item.value}</span>
        <span>{item.createdAt}</span>
        <span>
          <img src={imgEdit} className="edit" />
        </span>
        <span>
          <img src={imgDelete} alt="" className="delete" />
        </span>
      </div>
    </div>
  );
};

export default Item;

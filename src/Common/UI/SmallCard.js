import React from "react";
import { Icon } from "@iconify/react";
import styles from './common.module.css';

const SmallCard = (props) => {
    const img = props.img;
    const icon = props.icon;
    
  return (
    <React.Fragment>
      <div className="col">
        <div className="ikon-box">
          <br />

          {img && <img src={img} alt={props.text} />}
          {icon  && <Icon icon={icon} className={styles.iconStyle} />}
          <br />
          <br />
          <p>{props.text}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SmallCard;

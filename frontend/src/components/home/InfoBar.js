import React, {useEffect, useState} from "react";

// IMPORT UTILS
import { dateForm, timeOnly } from "../../utils/timeStamps";

const InfoBar = ({ userConnected }) => {

  const [timeDate, setTimeDate] = useState(new Date())
  
  useEffect(() => {
  setTimeDate(new Date())
 
}, []);

  return (
    <>
      <div className="infocontainer">
        <div className="infocontainer_box">
          {userConnected.firstName ? (`${userConnected.firstName} ${userConnected.lastName} / ${userConnected.role}`) : ("Non Connecté")}
        </div>
        <div className="infocontainer_box">
          {dateForm(timeDate)}
           {/* - {timeOnly(timeDate)} */}
        </div>
      </div>
    </>
  );
};

export default InfoBar;

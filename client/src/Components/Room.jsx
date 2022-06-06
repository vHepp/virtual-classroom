import React from "react";

import Table from "./Table";
import "../Styles/Room.css";

const Room = () => {
  return (
    <div>
      <div className="Room">
        <div className="Room_name">Room 1</div>
        <div className="Room_tables">
          <div className="Row">
            <div className="Column">
              <Table id="1" />
            </div>
            <div className="Column">
              <Table id="2" />
            </div>
          </div>
          <div className="Row">
            <div className="Column">
              <Table id="3" />
            </div>
            <div className="Column">
              <Table id="4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;

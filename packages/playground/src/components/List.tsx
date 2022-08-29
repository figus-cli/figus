import * as Icons from "../react/components";
import React from "react";

export const List = () => {
    const Components = Object.keys(Icons).map((item) => Icons[item]);

    return (
        <div>
            {Components.map((item, i) => React.createElement(item, { key: i }))}
        </div>
    );
};

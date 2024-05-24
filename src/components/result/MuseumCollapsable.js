import React, { useState, useEffect, useContext } from "react";

const MuseumCollapsable = (props) => {
 

    return (
        <>
            <tr>
                <td className="text">
                    {props.artInst.medium_display}
                </td>
            </tr>
            <tr>
                <td className="dimension">{props.artInst.dimensions}</td>
            </tr>
            <tr>
                <td className="text"
                    dangerouslySetInnerHTML={{ __html: props.artInst.description }}>
                </td>
            </tr>
            <tr>
                <td className="place">
                    {props.artInst.place_of_origin}
                </td>
            </tr>
            <tr>
                <td className="credit">
                    {props.artInst.credit_line}
                </td>
            </tr>
            <tr>
                <td className="credit">
                    {props.artInst.exhibition_history}
                </td>
            </tr>


        </>
    );
};
export default MuseumCollapsable;
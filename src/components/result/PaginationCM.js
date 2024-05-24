import React from "react";

const PaginationCM = (data, pageSize) => {

    console.log("iz paginationCM konzola")

    const pageCount = Math.ceil(data.length / pageSize);
    return Array.from({ length: pageCount}, (_, index) =>
data.slice(index * pageSize, (index + 1) * pageSize)
);
};
export default PaginationCM;
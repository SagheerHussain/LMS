import { DarkThemeContext } from "@/context/ThemeContext";
import { Rating } from "@mui/material";
import React, { useContext } from "react";

const FilterData = ({
  filteredProducts,
  filterData,
  updateBrands,
  updateAuthors,
  updateRatings,
  isCategory,
  isAuthor
}) => {

  const {darkMode} = useContext(DarkThemeContext);

  return (
    <>
      {filteredProducts && filteredProducts[0]?.category.name && !isCategory ? (
        <>
          <h6 className="text-light_text mb-2">Categories</h6>
          <hr className="bg-[#ddd] mb-3" />
          <div className="mb-4">
            {filterData
              .reduce((uniqueBrands, product) => {
                if (!uniqueBrands.includes(product.category.name)) {
                  uniqueBrands.push(product.category.name);
                }
                return uniqueBrands;
              }, [])
              .map((category, id) => (
                <div key={id} className="checkbox-wrapper py-1">
                  <input
                    type="checkbox"
                    onChange={() => updateBrands(category)}
                    style={{ marginBottom: "-.1rem" }}
                    id={category}
                    value={category}
                  />
                  <label
                    htmlFor={category}
                    style={{ fontSize: ".85rem" }}
                    className="ms-2 text-light_text"
                  >
                    {category}
                  </label>
                </div>
              ))}
          </div>
        </>
      ) : (
        <></>
      )}

      {filteredProducts[0]?.author.name && !isAuthor ? (
        <>
          <h6 className="text-light_text mb-2">Authors</h6>
          <hr className="bg-[#ddd] mb-3" />
          <div className="mb-4">
            {filterData
              .reduce((uniqueBrands, product) => {
                if (!uniqueBrands.includes(product.author.name)) {
                  uniqueBrands.push(product.author.name);
                }
                return uniqueBrands;
              }, [])
              .map((author, id) => (
                <div key={id} className="checkbox-wrapper py-1">
                  <input
                    type="checkbox"
                    onChange={() => updateAuthors(author)}
                    style={{ marginBottom: "-.1rem" }}
                    id={author}
                    value={author}
                  />
                  <label
                    htmlFor={author}
                    style={{ fontSize: ".85rem" }}
                    className="ms-2 text-light_text"
                  >
                    {author}
                  </label>
                </div>
              ))}
          </div>
        </>
      ) : (
        <></>
      )}


      <h6 className={`text-light_text mb-2`}>Rating</h6>
      <hr className="bg-[#ddd] mb-3" />
      <div className="ratings">
        {filterData
          .reduce((updateRating, product) => {
            if (!updateRating.includes(Math.round(product.rating)))
              updateRating.push(Math.round(product.rating));
            return updateRating;
          }, [])
          .map((rating, id) => {
            return (
              <div key={id} className="checkbox-wrapper flex items-center ">
                <input
                  type="checkbox"
                  style={{ marginBottom: "-.1rem" }}
                  onChange={() => updateRatings(rating)}
                  id={rating}
                  value={rating}
                />
                <label htmlFor={rating} className="ms-2 flex items-center py-1">
                  <h6
                    className={`me-2 text-light_text`}
                    style={{ fontSize: ".85rem" }}
                  >
                    {Math.floor(rating)} Stars
                  </h6>
                  <Rating
                    name="read-only"
                    style={{
                      fontSize: ".9rem",
                      marginTop: "0rem",
                      display: "flex",
                    }}
                    value={rating}
                    readOnly
                  />
                </label>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default FilterData;

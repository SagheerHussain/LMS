import React, { useContext, useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Rating,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Divider,
  Stack,
  Pagination,
  Button,
  Drawer,
  useMediaQuery,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { IoFilterSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { sampleBooks } from "@/constants/data";
import { BorrowedBookCard, FilterBookCard } from "./index";
import FilterData from "./FilterData";
import { DarkThemeContext } from "@/context/ThemeContext";
import { getCategories } from "../../services/categoryService";
import {
  getBooksByAuthors,
  getBooksByCategories,
  getBooksBySearches,
} from "../../services/bookService";
import { ClipLoader } from "react-spinners";
import { getAuthors } from "../../services/authorService";

const FilterBooks = () => {
  const { darkMode } = useContext(DarkThemeContext);

  const match = useMediaQuery("(max-width:500px)");

  // State Variable
  const [loading, setLoading] = useState(true);
  const [filterData, setFilterData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedAuthors, setSelectedAuthors] = useState([]);
  const [selectedRating, setSelectedRating] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [length, setLength] = useState(null);
  const [open, setOpen] = useState(false);
  const [isAttCategory, setIsAttCategory] = useState(false);
  const [isAttAuthor, setIsAttAuthor] = useState(false);

  const { attribute } = useParams();

  const getData = async () => {
    setLoading(true);
    const categories = await getCategories();
    const authors = await getAuthors();
    const isCategoryExist = categories.some(
      (category) => category.slug === attribute
    );

    const isAuthorExist = authors.some((author) => author.slug === attribute);
    setIsAttCategory(isCategoryExist);
    setIsAttAuthor(isAuthorExist);

    if (isCategoryExist || isAuthorExist) {
      const { message } = isCategoryExist
        ? await getBooksByCategories(attribute)
        : await getBooksByAuthors(attribute);

      console.log("message", message);

      if (message.length > 0) {
        setFilterData(message);
        setTotalPages(Math.ceil(message.length / 10));
        setLength(message.length);
        setLoading(false);
      }
    } else {
      const data = await getBooksBySearches(attribute);

      console.log("dara", data);

      if (data.length > 0) {
        setFilterData(data);
        setTotalPages(Math.ceil(data.length / 10));
        setLength(data.length);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    getData();
  }, [page, attribute]);

  useEffect(() => {
    applyFilter();
  }, [selectedBrands, selectedRating, selectedAuthors, filterData]);

  // Filter By Ratings

  const filteredByCategories = (category) => {
    setSelectedBrands((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  // Filter By Authors

  const filteredByAuthors = (author) => {
    setSelectedAuthors((prev) =>
      prev.includes(author)
        ? prev.filter((aut) => aut !== author)
        : [...prev, author]
    );
  };

  // Filter By Ratings

  const filteredByRatings = (rating) => {
    setSelectedRating((prev) =>
      prev.includes(rating)
        ? prev.filter((r) => r !== rating)
        : [...prev, rating]
    );
  };

  // Applying Filter
  const applyFilter = () => {
    let filtered = filterData;

    if (selectedBrands.length) {
      filtered = filtered.filter((product) =>
        selectedBrands.includes(product.category.name)
      );
    }

    if (selectedAuthors.length) {
      filtered = filtered.filter((product) =>
        selectedAuthors.includes(product.author.name)
      );
    }

    if (selectedRating.length) {
      filtered = filtered.filter((product) =>
        selectedRating.includes(Math.round(product.rating))
      );
    }
    setFilteredProducts(filtered);
  };

  // Handle Pagination
  const handlePageChange = (e, value) => {
    setPage(value);
  };

  // Handle Drawer
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <div className="mx-auto container py-5 min-h-[90vh]">
        <div className="flex justify-between">
          <div className="lg:w-[25%] lg:block hidden">
            <h5
              className={`mb-4 font-bold flex items-center ${
                darkMode ? "text-light_text" : "text-dark_text"
              }`}
            >
              Filters <IoFilterSharp className="ms-2" />
            </h5>
            <div
              className={`${
                darkMode ? "bg-secondary" : "bg-light_theme_primary"
              } py-6 px-4 rounded-[25px]`}
            >
              <FilterData
                filteredProducts={filteredProducts}
                filterData={filterData}
                updateBrands={filteredByCategories}
                updateAuthors={filteredByAuthors}
                updateRatings={filteredByRatings}
                isCategory={isAttCategory}
                isAuthor={isAttAuthor}
              />
            </div>
          </div>

          <div
            className={`w-full lg:w-[75%] lg:ms-[5%] ${
              loading ? "min-h-[50vh]" : " h-full"
            } `}
          >
            <div className="flex items-center justify-between">
              <div className="pb-3">
                <p
                  style={{ fontSize: ".9rem" }}
                  className={`${
                    darkMode ? "text-light_text" : "text-dark_text"
                  }`}
                >
                  {length} items found for
                  <span style={{ color: "orangered" }}></span>
                </p>
              </div>

              <div className="lg:hidden block text-end">
                <Button onClick={toggleDrawer(true)}>
                  <IoFilterSharp
                    style={{
                      fontSize: "1.8rem",
                      marginTop: "-1.5rem",
                      color: `${darkMode ? "#fff" : "#000"}`,
                    }}
                  />
                </Button>
                <Drawer open={open}>
                  <Box
                    sx={{
                      width: 300,
                      background: `${darkMode ? "#04293A" : "#3d705f"}`,
                      padding: "2rem 1rem",
                    }}
                    role="presentation"
                  >
                    <div className="flex justify-end mb-3">
                      <RxCross2
                        style={{
                          fontSize: "2.2rem",
                          cursor: "pointer",
                          color: "#fff",
                        }}
                        onClick={toggleDrawer(false)}
                      />
                    </div>
                    <h5 className="fw-bold mb-4 text-light_text">Filters</h5>
                    <FilterData
                      filteredProducts={filteredProducts}
                      updateBrands={setSelectedBrands}
                      updateAuthors={filteredByAuthors}
                      filterData={filterData}
                      updateRatings={filteredByRatings}
                    />
                  </Box>
                </Drawer>
              </div>
            </div>

            <Divider style={{ backgroundColor: "#ddd" }} className="mb-2" />

            {loading && (
              <div className="flex justify-center pt-10">
                <ClipLoader color={`${darkMode ? "#fff" : "#000"}`} size={36} />
              </div>
            )}

            <div className={`grid ${match ? "grid-cols-1" : "grid-cols-2"}  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 mt-4`}>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((book) => <FilterBookCard book={book} />)
              ) : (
                !loading && <p className="text-center">Sorry No Products Found</p>
              )}
            </div>

            {/* {filteredProducts && (
              <div className="pagination mt-5">
                <Stack spacing={5}>
                  <Pagination
                    count={totalPages}
                    onChange={handlePageChange}
                    variant="outlined"
                    shape="rounded"
                    size="small"
                    style={{ color: "orange" }}
                  />
                </Stack>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterBooks;

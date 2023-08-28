import React, { useState } from "react";
import FoodCard from "../../Components/FoodCards/FoodCard";
import foodData from "../../Data/FoodContent";
import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const FoodCardsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(foodData);

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchQuery(value);

    const filtered = foodData.filter((job) => {
      const titleMatch = job.job_title
        .toLowerCase()
        .includes(value.toLowerCase());
      const companyMatch = job.company
        .toLowerCase()
        .includes(value.toLowerCase());
      const locationMatch = job.location
        .toLowerCase()
        .includes(value.toLowerCase());
      return titleMatch || companyMatch || locationMatch;
    });

    setFilteredJobs(filtered);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <div>
          <div className="job-detail-header-div">
            <h2 className="jobs-text job-detail-heading">Menu Items</h2>
          </div>

          <div className="search-bar">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search jobs..."
            />

            <SearchIcon className="search-icon" />
          </div>
          <div
            className="jobcard-container"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "50px",
            }}
          >
            {filteredJobs.map((contents) => (
              <FoodCard
                key={contents.id}
                image={contents.image}
                food_title={contents.food_title}
                // company={contents.company}
                // view={contents.view}
                // share={contents.share}
                tags={contents.tags}
                description={contents.description}
                mode={contents.mode}
                portion={contents.portion}
                type={contents.type}
                price={contents.price}
                food_type={contents.food_type}
                // position={contents.position}
                work_type="work_type_job"
                // onSaveCard={handleSaveCard}
                style={{ flex: "1 10 50%", maxWidth: "50%" }}
              />
            ))}
          </div>

          {/* <FoodCard /> */}
        </div>
      </Box>
    </Box>
  );
};

export default FoodCardsPage;

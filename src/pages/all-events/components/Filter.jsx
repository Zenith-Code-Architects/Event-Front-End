import React from 'react'

const Filter = () => {
    const applyFilters = () => {
        alert('Applying filters...');
        // Add logic to apply filters here
    };

    const resetFilters = () => {
        alert('Resetting filters...');
        // Add logic to reset filters here
    };
    return (
        <><div className='flex'>
            <div class="filter-section">
                <label className='mr-3' for="search">Search:</label>
                <input type="text" id="search" placeholder="Search..." />
            </div>

            <div class="filter-section">
                {/* <label className='mr-3'>Filter by type:</label> */}
                {/* <input type="checkbox" id="type1" value="type1" />
                <label for="type1">Type 1</label>
                <div>
                    <input type="checkbox" id="type2" value="type2" />
                    <label className='mr-3' for="type2">Type 2</label>
                </div> */}

                {/* <div class="filter-section">
                    <label className='mr-3'>Sort by:</label>
                    <div>
                        <input type="radio" id="asc" name="sort" value="asc" />
                        <label className='mr-3' htmlFor="asc">Ascending</label>

                        <input type="radio" id="desc" name="sort" value="desc" />
                        <label className='mr-3' htmlFor="desc">Descending</label>
                    </div>

                    <div className="filter-section">
                        <button type="button" onClick={applyFilters}>Apply Filters</button>
                        <button type="button" onClick={resetFilters}>Reset Filters</button>
                    </div>

                    <div className="filter-section">
                        <label className='mr-3' htmlFor="filter">Filter by:</label>
                        <select id="filter">
                            <option value="all">All</option>
                            <option value="recent">Most Recent</option>
                            <option value="popular">Most Popular</option>
                            <option value="featured">Featured</option>
                        </select>
                    </div> */}
                <div class="filter-section">
                    <label class="mr-3">Sort by:</label>
                    <div>
                        <input type="radio" id="asc" name="sort" value="asc" />
                        <label class="mr-3" for="asc">Ascending</label>

                        <input type="radio" id="desc" name="sort" value="desc" />
                        <label class="mr-3" for="desc">Descending</label>
                    </div>

                    {/* <div class="filter-section">
                        <button type="button" onclick="applyFilters()">Apply Filters</button>
                        <button type="button" onclick="resetFilters()">Reset Filters</button>
                    </div> */}

                    <div class="filter-section">
                        <label class="mr-3" for="filter">Filter by:</label>
                        <select id="filter">
                            <option value="all">All</option>
                            <option value="recent">Most Recent</option>
                            <option value="popular">Most Popular</option>
                            <option value="featured">Featured</option>
                        </select>
                    </div>

                    <div class="filter-section">
                        <label class="mr-3" for="start-date">Start Date:</label>
                        <input type="date" id="start-date" name="start-date" />

                        <label class="mr-3" for="end-date">End Date:</label>
                        <input type="date" id="end-date" name="end-date" />
                    </div>
                </div>


            </div>
        </div>

        
            </>
            )
}

export default Filter
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './../assets/css/index.css';


const Books = () => {
  const [bookData, setBookData] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);

  const getBooksData = async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/books');
      setBookData(data);
      setFilteredBooks(data); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getBooksData();
  }, []);

  useEffect(() => {
    const filtered = bookData.filter((item) =>
      item.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredBooks(filtered);
  }, [searchInput, bookData]);

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="centered-search mt-4 mb-4">
            <div>
              <h3 className="mt-4 mb-4">
                <i className="bi bi-book" /> Books Library <i className="bi bi-book" />
              </h3>
              <form className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  value={searchInput}
                  onChange={handleSearchChange}
                />
                <button className="btn btn-primary" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
          {filteredBooks.map((item) => (
            <div className="col-sm-4 col-xs-12 col-6 col-md-3" key={item.id}>
              <div className="card mt-2 mb-2">
                <img src={item.bookImg} className="card-img-top" alt="..." />
                <div className="card-bodys">
                  <h6 className="card-text">{item.name}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Books;

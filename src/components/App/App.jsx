import React from 'react';
import {useState, useEffect} from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx';
import axios from 'axios';

function App() {

    const [galleryList, setGalleryList] = useState([]);


    useEffect(() => {
        getGallery();
    }, []);


    const getGallery = () => {
        axios.get('/gallery')
        .then((res) => {
            setGalleryList(res);
        }).catch((err) => {
            console.log('error with get request', err);
            alert('error with get request');
        });
    }








    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList galleryList={galleryList} />
      </div>
    );
}

export default App;

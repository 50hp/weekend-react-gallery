import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx';

function App() {

    const [galleryList, setGalleryList] = useState([]);


    useEffect(() => {
        getGallery();
    }, []);


    const getGallery = () => {
        axios.get('/gallery')
        .then((res) => {
            setGalleryList(res.data);
        }).catch((err) => {
            console.log('error with get request', err);
            alert('error with get request');
        });
    }

    const putLikes = (id) => {
        axios.put('/gallery/like/' + id)
        .then((res) => {
            getGallery();
        }).catch((err) => {
            console.log('error with like put request', err);
        });

    }








    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList galleryList={galleryList}
                     putLikes={putLikes}            
        />
      </div>
    );
}

export default App;

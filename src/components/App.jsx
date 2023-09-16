import { Component } from "react";
import React from 'react';
import { Searchbar } from "./Searchbar/Searchbar";
import { Button } from "./Button/Button";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { fetchImg } from "./api";
import {Modal} from "./Modal/Modal"
import { Loader } from "./Loader/Loader";


export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
    showLoadMoreButton: false,
    modalImg: '',
    showModal: false,
  };

  handleSubmit = query => {
    this.setState({query, images: [], page: 1, showLoadMoreButton: false})

  }
  handleOpenModal = evt => {
    this.setState({ showModal: true, modalImg: evt.target.dataset.src });
  };
  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  componentDidUpdate(prevProps, prevState) {
    if(prevState.query !== prevProps.query ||
      prevState.page !== prevProps.page) 
      {
        this.setState({loading:true});
        fetchImg(this.state.query, this.state.page)
        .then(data => {
          const {hits, totalHits} = data;
          this.setState(prevState =>({
            images : [...prevState.images, ...hits],
            showLoadMoreButton: prevState.page < Math.ceil(totalHits / 12),
          }));
        })
        .catch(error => console.error('Error fetching images:', error))
        .finally(() => {
          this.setState({loading: false});
        });
      //http
    }
  }

handleLoadMore = () => {
  this.setState(prevState => ({
    page: prevState.page + 1}));
};

render () {
  return (
    <div>
      <Searchbar onSubmit={this.handleSubmit}/>
      <ImageGallery 
        images={this.state.images} 
        onImageClick={this.handleOpenModal}/>
      {this.state.showLoadMoreButton && (
        <Button onLoad={this.handleLoadMore}/>
      )}
      <Loader loading={this.state.loading} />
      {this.state.showModal && (
          <Modal img={this.state.modalImg} onClose={this.handleCloseModal} />
        )}
    </div>

  );
};


}

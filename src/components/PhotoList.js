import React, { Component } from "react";
import axios from "axios";

class PhotoList extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      page: 0,
      pattern: "",
    };
  }

  componentDidMount() {
    this.getAllImages(this.state.page); 
  }

  getAllImages(page) {
    this.setState({ loading: true });
    axios
      .get(
        `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`
      )
      .then(res => {
        this.setState({ photos: res.data });
      });
  }
  
  nextPage(){
        this.setState({
            page:this.state.page +1
        })
        return this.getAllImages(this.state.page);
  }
  previousPage(){
    this.setState({
        page:this.state.page - 1
    })
    return this.getAllImages(this.state.page);
  }

  filterPhotos(){
    //   const pattern = this.state.inputFilter;
    //   console.log(pattern);
    //   const filteredPhotos = this.state.photos.filter((photo)=>{
    //     return photo.title.indexOf(pattern) !== -1;
    //     });
    //     console.log(filteredPhotos);
    //   this.setState({ 
    //       photos : filteredPhotos
    //   })

    const pattern = this.state.pattern;

    axios
      .get(
        `https://jsonplaceholder.typicode.com/photos?title_like=${pattern}&_limit=10`
      )
      .then(res => {
        this.setState({ photos: res.data });
      });
  }

  removePhoto(id){
    const filteredPhotos = this.state.photos.filter((photo)=>{
        return photo.id !== id;
    })
    this.setState({ 
        photos : filteredPhotos
    })
  }

  handleChange(e){
    this.setState({ patter: e.target.value })
    this.filterPhotos();
  }


  render() {
   


  return (
    <div className="container">
      <div style={{ minHeight: "800px" }}>
        <input type="text" placeholder="Search" onChange={()=>{this.handleChange()}}/>
        {this.state.photos.map(photo => (
         <div style={{display:"flex", padding:"10px"}}>
           <img src={photo.url} height="100px" width="200px"/>
           <div>
                <h3>{photo.title}</h3>
                <h6>{photo.url}</h6>
                <button class="btn btn-danger" onClick={()=>{this.removePhoto(photo.id)}}>remove</button>
           </div>
           
         </div>
          
        ))}
      </div>
      <div>
        <button class="btn btn-primary" onClick={()=>{this.previousPage()}}>previous</button>
        <button class="btn btn-primary" onClick={()=>{this.nextPage()}}>next</button>
      </div>
    </div>
  );
  }
}

export default PhotoList;
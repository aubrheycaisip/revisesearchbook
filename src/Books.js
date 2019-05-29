import React,{Component} from 'react';
import SearchArea from './SearchArea';
import request from 'superagent';
import ListBooks from './ListBooks';

class Books extends Component {
    constructor(props){
        super(props);
        this.state = {
            books:[],
            Fieldsearch:''
        }
    }
    bookSearch =(e)=>{
        e.preventDefault();
        request
        .get("https://www.googleapis.com/books/v1/volumes")
        .query({q:this.state.Fieldsearch})
        .then((data)=>{
            console.log(data)
            this.setState({books:[...data.body.items]})
        })
    }
    searchHandle =(e)=>{
        this.setState({Fieldsearch: e.target.value})
    }
  render(){
    return (
      <div>
          <SearchArea bookSearch={this.bookSearch} searchHandle={this.searchHandle}/>
          <ListBooks books={this.state.books}/>
      </div>
    );
  }
}

export default Books;

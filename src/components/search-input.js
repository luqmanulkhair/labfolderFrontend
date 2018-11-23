import React from 'react';
import ApiService from './api-service';
import './search-input.css';
export default class SearchInput extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            frequency:0,
            similar:''
        };
    }
  
    search=  (e)=>{
        e.preventDefault();
        
        const url = 'http://35.224.253.24:80/find';
        let searchWord = this.refs.searchWord.value;
        let searchText = this.refs.searchText.value;
        let data = {
            "entry": searchText,
            "keyword": searchWord 
        }
        console.log("ok runing")
        let service = new ApiService();
     service.search(url, data).then((response)=>{
        console.log("logser",response)
            let frequency = response.data.frequency;
            let similar = response.data.similar_words.map(value => value + ",")
            this.setState ({
                frequency,
                similar
            });
        });
        
        
    }
         
    render() {
        return(
           
               <div>
                   <div className="row">
                    <form onSubmit={this.search}>
                    
                        <div className="form-group">
                        <div className="col s9">
                                <input ref="searchWord" type="text" className="form-control search-input" placeholder="Keyword" />
                        </div>
                        <div className="col s3">        
                                <button className="btn btn-primary" type="submit">Search</button>
                        </div>    
                        </div>
                        <div className="col s12">
                        <textarea ref="searchText" className="form-control" id="exampleTextarea" rows="10" spellCheck="false"  placeholder="Text to search"></textarea>
                        </div>
                    </form>
                    </div>
                    <div className="row">
                    <h5>Frequency: {this.state.frequency}</h5>
                    <h5>Similar: {this.state.similar}</h5>
                    </div>
                
                
                </div> 
        )
    }    
}
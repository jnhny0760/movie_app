import React, { Component } from 'react'
import './detail.css'

export default class Detail extends Component {
    componentDidMount(){
        const {location, history} =this.props;
        if(location.state === undefined) {
            history.push('/');
            // 리다이렉트 주소를 치고 들어온다면 props를 전달 받지 못해서 undefine이 나옴 그래서 home화면으로 돌려보내 props를 받을 수 았도록 해주는 것
        }
    }
    render(){
        const {location} = this.props;
        console.log(this.state);
        if(location.state){
        //location만 저장
        return (
            <div className="detail">
                <img src={location.state.poster} alt={location.state.title} title={location.state.title}></img>
                <div className="detail_data">
                <h3 className="detail_title" style={{backgroundColor:'#eee'}}>영화제목: {location.state.title}</h3>
                <h4 className="detail_year">{location.state.year}</h4>
                <ul className="detail_genres">
                    {location.state.genres.map( (genre,index) => {
                        return  (
                            <li key={index} className="movie_genre">{genre}</li>
                        );
                    })}
                </ul>
                <p className="detail_summary">총평: {location.state.summary.slice(0,180)} ...</p>
                </div>
            </div>
        )
    }else{
        return null;
    }
    }
}


//route props 라우터 대상이 되는 컴포넌트 넘겨주는 기본 props
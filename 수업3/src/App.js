import { render } from '@testing-library/react';
import React from 'react';
import axios from 'axios';
import Movie from './Movie';


class App extends React.Component{
    state = {
        isLoading:true,
        movies:[],
    }
    getMovies = async () => {
        const {
            data:{
                data:{movies},
            },
        } = await axios.get('https://yts-proxy.now.sh/list_movies.json?genre=animation&sort_by=like_count');
        //axios는 네트워크를 사용함으로 느리다. 그레서 axios를 별도의 함수로 만들어서 자바스크립트에게 이 함수는 시간이 필요하고(async)즉 이 함수는 비동기이며, axios.get();의 실행 완료를 기다려 달라고 (await) 라고 알려주어야 한다.

        // console.log(movies.data.data.movies);
        this.setState({movies,isLoading:false});//키:키값 이름이 동일하면 한번만 써도 됨
    }

    componentDidMount(){
        // setTimeout(()=>{
        //     this.setState({isLoading:false,})
        // },6000)
        this.getMovies();
    }
    //setState로 바뀌면 render는 무조건 다시 시작한다.

    render(){
        const {isLoading, movies} = this.state;//구조 분해 할당
        return(
            <div>{isLoading ? 'Loading ...':
                movies.map(movie =>(
                    <Movie
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    summary={movie.summary}
                    poster={movie.medium_cover_image}
                    gennre={movie.gennres}
                    />
                ))
            }</div>
            //{a? b:c}상항연산자. 
            //a값이 true이면 b의 내용이 나오고 false이면 d의 내용이나온다.
        )
    }
}

export default App;


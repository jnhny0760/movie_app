import React from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';

import Home from './routes/Home';
import About from './routes/About';
import Navigation from './component/Navigation';
import Detail from './routes/Detail';

function App() {
    return (
        <HashRouter>
            <Navigation />
            <Route path="/" exact={true} component={Home} />
            <Route path="/about" component={About} />
            <Route path="/movie_detail" component={Detail} />
        </HashRouter>
    );
}
// router라우터는 사용자가 입력한 주소를 통해서 특정한 컴포넌트를 불러오는 것을 뜻함.
// Route에는 2가지 props를 전달 ,URL을 위한 path props와 URL에 맞는 컴포넌트를 불러오기 위한 component props가 전달된다.

// 기본: http://localhost:3000/#
// home: http://localhost:3000/#/
// About: http://localhost:3000/#/about

// exact={true}가 들어가지 않은 상태로 페이지에 /about가 들어가게 된다면 한화면에 /와 /about가 둘다 나오게 된다. 이를 제지하기 위하여 메인페이지에는 exact를 꼭 사용해 주어야 한다. 
// Route컴포넌트는 반드시 HashRouter안에 포함 되어야 한다.
// exact={ture}는 딱 적은 그것 만 나오게 그외의 것은 포함이 되어있더라고 적용이 되지 않게 해준다.

export default App

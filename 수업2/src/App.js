import { render } from '@testing-library/react';
import React from 'react';
import Cake from './Cake';

class App extends React.Component {

    constructor(props){
        super(props);
        console.log('constructor함수는 클래스형 컴포넌트가 생성될때 호출됨')
    }

    componentDidMount(){
        console.log("componentDidMount함수는 컴포넌트가 처음 회면에 그려지면 실행되는 함수")
    }

    componentDidUpdate(){
        console.log('componentDidUpdate한수는 화면이 새로 그려지면 즉 업데이트 되면 그려지는 함수')
    }

    componentWillUnmount(){
        console.log('conponenWillUnmount함수는 컴포넌트가 죽을때 실행되는 함수이다.')
    }

    //리액트에서 마운트 로 분류하는 생명주기 함수. 실행순서는 construㅊtor->render->componentDidMount의 순서이다.

    state={
        //state: 컴포넌트의 상태 state를 저장하고 변경 할 수 있는 데이터.
        //동적 데이터, 변경될 가능성이 있는 데이터를 다룰 때 사용, 클레스형 컴포넌트에서 사용하는 개념으로 객체형태의 데이터이다.

        count:0,
    };

    add= () => {
        console.log('더하기')
        this.setState(//current는 this.state
            current=>({count:current.count+1})
        )
        // this.setState({count:this.state.count+=1});
      }
      //setState()함수가 동작하면 ->state값이 바뀌고 이어서 render()함수를 작동시켜 회면을 업데이트 시킨다

    minus= () =>{
        console.log('빼기')
        this.setState(
            current =>({count:current.count-1})
            //setState()함수형태로 넣으면 효율이 더 좋다.
            // {count:this.state.count-=1}
             )
    }


    render(){
        // react는 state가 변경되면 render()가 함수를 다시 실행해야 변경된 render함수를 화면애출력험 그러나 이때 state를 직접 변경하는 경우 render함수다 다시 실행되지 않는다. 그래서 react는 state를 집접 변경헐 수 없다.
        return(
            <div>
                <h1>현재 숫자는 {this.state.count} 입니다.</h1>
                <button onClick={this.add}>더하기</button>
                <button onClick={this.minus}>빼기</button>
                <Cake/>
            </div>
        );
    }
}

export default App;


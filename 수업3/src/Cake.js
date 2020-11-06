import React from 'react';
//Cake컨포넌트 clsaa현 컴포넌트
//<h1>cake 가격 :<h1>
//<h2>할인된 가격: <h2>
//버튼 누르면 할인된 가격이 나오도록 30%

class Cake extends React.Component{

    


    
    state={
        price:30000,
        dis:0,
}
    discount=()=>{
        console.log('할인하기');
        this.setState(current=>({
            dis:current.price*0.7,
        }))
    }

    render(){
        return(
            <div>
                <h1>케이크 가격 :{this.state.price}원</h1>
                <h2>30% 할인된 가격은 {this.state.dis}원 입니다</h2>
                <button onClick={this.discount}>할인</button>
            </div>
        );
    }
}

export default Cake;
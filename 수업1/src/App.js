import React from 'react';
// import 자식컴포넌트 from '자식컴포넌트.js'
import Macaron from './Macaron';
import Hello  from './Hello.js';

/*
function Food(props){//자식 컴포넌트
  return(
    <h1><strong>{props.propsName} 존맛!!!!!<br/>이번에 놀러가면 바베큐 해먹을거다!!!</strong></h1>
    //부모에서 자식으로 props를 지정해 바꿔주면 안의 내용을 손 쉽게 바꿀 수 있다. 이때 부모->자식으로만 사용 가능 자식->부모 는 불가능
  );
}
//내용이 많지 않다면 컴포넌트 안에 자식 컴포넌트를 만들어서 사용 할 수 있다. 이때 import, export default 안해줘도 되는 장점이 있다.
*/
// function Food(props){ //구조 분해 할당
// const {propsName3} = props;
//   return(
//   <h1>I like {propsName3}</h1>
//   );
//   }

function Food({name, rating, image}){
  return(
  <div>
    <h1>I Love {name}</h1>
    <h2>{rating}/5.0</h2>
    <img src={image} alt={name}></img>
  </div>
  )
}

  //서버에서 가져온 데이터를 저장하는 변수
  //const foodlike = [];
  const Foodlike = [
    {
    id:1,
    name:'macaron1',
    image:'https://notefolio.net/hyeppy/98832',
    rating:4.5,
  },
  {
    id:2,
    name:'macaron2',
    image:'https://i.pinimg.com/564x/93/76/c1/9376c15ccf0b75d0e2a2bea612a53152.jpg',
    rating:4.2,
  },
  {
    id:3,
    name:'macaron3',
    image:'https://i.pinimg.com/564x/44/94/54/449454236c40dbb365ff77178ce173e6.jpg',
    rating:4.7,
  },
  {
    id:4,
    name:'macaron4',
    image:'https://i.pinimg.com/564x/19/f5/1d/19f51d668729a79133ac9521ef48f13f.jpg',
    rating:3.5,
  },
  {
    id:5,
    name:'macaron5',
    image:'https://i.pinimg.com/564x/de/70/1a/de701a05afee2207561fe9bc0e4ea396.jpg',
    rating:4.8,
  }
];

function Cake({img, name1, etc}){
  return(
    <div>
      <h1><img src={img} alt={name1} /></h1>
      <h2>{name1}</h2>
      <h2>{etc}</h2>
    </div>
  )
}

const Cakes=[
  {
    id:1,
    name1:'rainbow cake',
    img:'https://i.pinimg.com/564x/dc/e3/2e/dce32e513ce557a951cbbe7fe15f10cb.jpg',
    etc:'무지개 무늬 케이크이다'
  },{
    id:2,
    name1:'sprinkle cake',
    img:'https://i.pinimg.com/564x/69/9f/6c/699f6cb625a4a749c6320d22c075bd6f.jpg',
    etc:'스프링클로 데코한 케이크이다'
  },{
    id:3,
    name1:'flower cake',
    img:'https://i.pinimg.com/564x/47/c5/b7/47c5b7f01f35e730aae68962dd3feeea.jpg',
    etc:'꽃모양 케이크이다'
  },{
    id:4,
    name1:'stone cake',
    img:'https://i.pinimg.com/564x/34/2d/b4/342db4340c1e73da12ad2100d45c2de2.jpg',
    etc:'원석 모양 케이트이다.'
  },{
    id:5,
    name1:'cactus cake',
    img:'https://i.pinimg.com/564x/eb/30/1a/eb301aecdccfb839e3e8cbec8033ee95.jpg',
    etc:'선인장 무의로 장식한 케이크이다'
  },
]


  //부모 컴포넌트 (app) 에서 자식 컴토넌트 (food)에 props즉 데이터를 전달하면 데니터가 하나의 객체로 변환되어 자식 컴포넌트의 인자로 전달됨
function App() {//부모 컴포넌트
  return (
    <>
    <div>안녕하세요!!</div>
    <Macaron/>
    <Hello/>
    {Foodlike.map(dish => (
      //map()함수 -배열의 모든 원소마자 특정 작업을 하는 함수를 적용하고,그 함수가 반환한 결과를 모아서 배열로 반환
          <Food 
          name = {dish.name} 
          rating = {dish.rating} 
          image = {dish.image}/>
    ))}
    {Cakes.map(cake=>(
        <Cake
        name1 ={cake.name1}
        img = {cake.img}
        etc = {cake.etc}/> ))}
    </>
  );
}

// class App extends React.Component{
//   render(){
//     return(
//       <>
//       <div>안녕하세요</div>
//       <Macaron/>
//       <Hello/>
//       </>
//     )
//   }
// }

Food.propTypes={
  propsname:propTypes
}


export default App;


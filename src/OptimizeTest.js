import React, {useState, useEffect} from 'react'

// 자식 컴포넌트
const CounterA = React.memo(({count})=>{
  useEffect(()=>{
    console.log(`CounterA update - count : ${count}`)
  })

  return <div>{count}</div>
})

const CounterB = ({obj})=>{
  useEffect(()=>{
    console.log(`CounterB update - count : ${obj.count}`)
  })

  return <div>{obj.count}</div>
}

// true/false로 판단
const areEqual = (prevProps, nextProps)=> {
  if(prevProps.obj.count === nextProps.obj.count) {
    return true // 이전 프롭스=현재 프롭스 -> 리렌더링 일으키지 X
  }
  return false // 이전 프롭스!=현재 프롭스 -> 리렌더링 O
  // 아래와도 같음
  // return prevProps.obj.count === nextProps.obj.count
}

// areEqual은 비교함수로서 작용, 이의 판단에 따라 리렌더링 유무를 정함
const MemoizedCounterB = React.memo(CounterB, areEqual)


const OptimizeTest = () => {

  const [count, setCount] = useState(1)
  const [obj, setObj] = useState({
    count: 1
  })

  return (
  <div style={{padding: 50}}>
    <div>
      <h2>Counter A</h2>
      <CounterA count={count}/>
      <button onClick={()=> setCount(count)}>A button</button>
    </div>
    <div>
      <h2>Counter B</h2>
      <MemoizedCounterB obj={obj}/>
      <button 
        onClick={() => 
          setObj({
            count: obj.count,
          })
        }
      >
        B button
      </button>
    </div>
  </div>
  )
}

export default OptimizeTest
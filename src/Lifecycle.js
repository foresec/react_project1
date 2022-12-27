import React, {useEffect, useState} from 'react'

const UnmountTest = () => {

  useEffect(()=> {
    console.log("Mount!")

    // 함수를 리턴하게 하면 ~
    return () => {
      // Unmount 시점에 실행됨
      console.log("Unmount!")
    }
  }, [])

  return <div>Unmount Testing Component</div>
}

const Lifecycle = () => {

  const [isVisible, setIsVisible] = useState(false)
  const toggle = () => setIsVisible(!isVisible)

  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}>ON/OFF</button>
      {isVisible && <UnmountTest/>}
    </div>
  )
}
// isVisible && UnmountText : 전자가 true면 UnmountText 반환 및 렌더링(반대는 반대)
export default Lifecycle
import React from 'react';
import Chart from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

import { useContext, useMemo } from 'react'
import { DiaryStateContext } from './App.js'

const DoughnutGraph = () => {

  const valueList = useContext(DiaryStateContext)
 
  const countList = useMemo(()=> {
    const countOne = valueList.filter((it)=>it.emotion === 1).length
    const countTwo = valueList.filter((it)=>it.emotion === 2).length
    const countThree = valueList.filter((it)=>it.emotion === 3).length
    const countFour = valueList.filter((it)=>it.emotion === 4).length
    const countFive = valueList.filter((it)=>it.emotion === 5).length
    
    return [ countOne, countTwo, countThree, countFour, countFive ]
  })


  let chartData =  {
      labels: ['일', '이', '삼', '사', '오'],
      datasets: [{
          type: 'doughnut',
          label: '일기의 기분',
          backgroundColor: ['rgb(92, 22, 71)', 'rgb(147, 6, 62)', 'rgb(202, 0, 53)', 'rgb(255, 86, 39)', 'rgb(255, 196, 0)'],
          data: countList,
      }],
    }
    
    
	return (
    	<div>
        	<Doughnut type="doughnut" data={chartData} />
        </div>
    );
}

export default DoughnutGraph;
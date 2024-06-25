import React from 'react'
import './Monitor.scss';
import {Bar} from 'react-chartjs-2';
// import Chart from 'chart.js/auto';

const Monitor = () => {
  return (
    <>
      <div className="maindiv">
        <div>
          <div>
            <p>Monitor</p>
          </div>
        </div>
        <div>
          <span className="training">Performance Overview</span>
          <span>4 Jan 2023- 2 Feb 2023</span>
        </div>
        <div className="cards">
          <div className="div1">
            <span>
              Training Data<h1>3</h1>
            </span>
          </div>
          <div>
            <span>
              Training Data<h1>3</h1>
            </span>
          </div>
          <div>
            <span>
              Training Data<h1>3</h1>
            </span>
          </div>
          <div>
            <span>
              Training Data<h1>3</h1>
            </span>
          </div>
        </div>
        <div className="chart" style={{ width: '900px', height: '400px' }} >
          <Bar
            data={{
              labels: [
                "19 Mar",
                "22 Mar",
                "28 Mar",
                "01 Apr",
                "04 Apr",
                "08 Apr",
                "10 Apr",
              ],
              datasets: [
                {
                  label: "Conversation per Channel",
                  data: [5, 3, 7, 9, 2, 8, 4],
                  barThickness: 25,
                  backgroundColor: "rgb(144, 43, 235)",
                  borderRadius: 5,
                  
                },
              ],
              options :{
                maintainAspectRatio: false,
                
              },
              
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Monitor

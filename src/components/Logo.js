import React from 'react';
import styled from 'styled-components';

const StyledSvg = styled.svg`
  display: inline-flex;
  fill: currentColor;
  height: 35px;
  width: auto;

  .cls-2 {
    fill: #141517;
  }

  .cls-3 {
    fill: #b23f33;
  }

  .cls-4 {
    fill: #9b6026;
  }

  .cls-5 {
    fill: #d08530;
  }

  .cls-6 {
    fill: #aa8b35;
  }

  .cls-7 {
    fill: #e7c145;
  }

  .cls-8 {
    fill: #45934e;
  }

  .cls-9 {
    fill: #55b764;
  }

  .cls-10 {
    fill: #2866af;
  }

  .cls-11 {
    fill: #327be1;
  }

  .cls-12 {
    fill: #3f4693;
  }

  .cls-13 {
    fill: #4c50b3;
  }

  .cls-14 {
    fill: #ececec;
  }
`;

const IconRainbow = ({ children, viewBox, color, ...props }) => (
  <StyledSvg fill={color} focusable="false" viewBox={viewBox} {...props}>
    <path
      className="cls-2"
      d="M236.33,23H36.67V477H236.33c125.36,0,227-101.63,227-227S361.69,23,236.33,23Zm0,281.7H200.77V192.57h35.56a56.07,56.07,0,0,1,0,112.13Z"
    />
    <path
      className="cls-3"
      d="M237.1,35.81H48.71V464.19H237.1c118.29,0,214.19-95.89,214.19-214.19S355.39,35.81,237.1,35.81Zm0,402.58H74.52V59H237.1C341.85,59,426.77,144,426.77,248.71S341.85,438.39,237.1,438.39Z"
    />
    <path
      className="cls-4"
      d="M236.7,53.43H69.31V444H236.7C344.55,444,432,356.56,432,248.71S344.55,53.43,236.7,53.43Zm0,249.75H202.16V194.24H236.7a54.47,54.47,0,0,1,0,108.94Z"
    />
    <path
      className="cls-5"
      d="M237.1,59H74.52V438.39H237.1c104.75,0,189.67-84.92,189.67-189.68S341.85,59,237.1,59Zm0,353.55H100.32V84.84H237.1a163.87,163.87,0,1,1,0,327.74Z"
    />
    <path
      className="cls-6"
      d="M236.71,80.21H96.08v337H236.71a168.5,168.5,0,0,0,0-337Zm0,222.9H202.22V194.31h34.49a54.4,54.4,0,0,1,0,108.8Z"
    />
    <path
      className="cls-7"
      d="M237.1,84.84H100.32V412.58H237.1a163.87,163.87,0,1,0,0-327.74Zm0,216.77H203.55V195.81H237.1a52.9,52.9,0,0,1,0,105.8Z"
    />
    <path
      className="cls-8"
      d="M236.67,106.33H122.24V391.09H236.67a142.38,142.38,0,1,0,0-284.76Zm0,196.93H202.08V194.15h34.59a54.56,54.56,0,1,1,0,109.11Z"
    />
    <path
      className="cls-9"
      d="M237.1,110.65h-111V386.77h111a138.06,138.06,0,1,0,0-276.12Zm0,191H203.55V195.81H237.1a52.9,52.9,0,0,1,0,105.8Z"
    />
    <path
      className="cls-10"
      d="M236.6,133.43H148.13V364H236.6a115.28,115.28,0,0,0,0-230.56Zm0,170.24H201.74V193.75H236.6a55,55,0,0,1,0,109.92Z"
    />
    <path
      className="cls-11"
      d="M237.1,137.74H151.94V359.68H237.1a111,111,0,0,0,0-221.94Zm0,163.87H203.55V195.81H237.1a52.9,52.9,0,0,1,0,105.8Z"
    />
    <path
      className="cls-12"
      d="M236.28,160.32H172.75V337.1h63.53a88.39,88.39,0,0,0,0-176.78Zm0,145H200.37V192.08h35.91a56.63,56.63,0,1,1,0,113.26Z"
    />
    <path
      className="cls-13"
      d="M237.1,166.13H177.74V331.29H237.1a82.58,82.58,0,0,0,0-165.16Zm3.18,142.49H197.22V188.8h43.06a59.91,59.91,0,0,1,0,119.82Z"
    />
    <path
      className="cls-2"
      d="M240.28,188.8H197.23V308.62h43.05a59.91,59.91,0,0,0,0-119.82Zm-1.52,106.54H209.19V202.08h29.57c25.76,0,49,20.88,49,46.63S264.52,295.34,238.76,295.34Z"
    />
    <path
      className="cls-14"
      d="M588.27,331V172.35h44.79q20.7,0,36.61,9.16a62,62,0,0,1,24.57,26q8.65,16.89,8.77,38.79v10.13q0,22.45-8.66,39.34a60.94,60.94,0,0,1-24.74,25.93q-16.07,9-37.43,9.26Zm20.92-141.54V313.89h22q24.19,0,37.65-15.05T682.3,256v-9.27q0-27-12.69-42t-36-15.21Z"
    />
    <path
      className="cls-14"
      d="M772.11,333.18q-24,0-39-15.75t-15-42.11v-3.7q0-17.55,6.7-31.33a52.22,52.22,0,0,1,18.74-21.57,47.1,47.1,0,0,1,26.1-7.8q23,0,35.74,15.15t12.74,43.37v8.39H738.23q.43,17.43,10.18,28.16t24.79,10.74q10.68,0,18.09-4.36a45.66,45.66,0,0,0,13-11.55l12.31,9.59Q801.75,333.18,772.11,333.18Zm-2.5-105.69a26.89,26.89,0,0,0-20.49,8.88q-8.28,8.88-10.24,24.89h59.06v-1.52q-.88-15.36-8.28-23.81T769.61,227.49Z"
    />
    <path
      className="cls-14"
      d="M933,273.36q0,27-12.42,43.42t-33.34,16.4q-22.34,0-34.54-15.8l-1,13.62H833.15V163.64h20.16v62.43q12.21-15.15,33.67-15.15t33.72,16.24Q933,243.39,933,271.62Zm-20.16-2.29q0-20.6-7.95-31.82T882,228q-19.94,0-28.66,18.53v51q9.27,18.52,28.88,18.52,14.49,0,22.55-11.22T912.8,271.07Z"
    />
    <path
      className="cls-14"
      d="M980.12,184.56V213.1h22v15.59h-22v73.2q0,7.1,2.94,10.64t10,3.54a48.11,48.11,0,0,0,9.58-1.31V331a58.51,58.51,0,0,1-15.47,2.17q-13.51,0-20.37-8.17T960,301.8V228.69H938.5V213.1H960V184.56Z"
    />
    <path
      className="cls-14"
      d="M1131.09,266.82h-37.26V331h-21V172.35h52.52q26.81,0,41.24,12.21T1181,220.08q0,14.82-8,25.82t-22.28,16.45L1188,329.69V331h-22.44Zm-37.26-17.11H1126q15.58,0,24.79-8.07T1160,220q0-14.73-8.77-22.59t-25.34-8h-32Z"
    />
    <path
      className="cls-14"
      d="M1274.35,331q-1.74-3.5-2.83-12.42-14.05,14.6-33.56,14.6-17.43,0-28.6-9.86a31.9,31.9,0,0,1-11.17-25q0-18.4,14-28.6t39.39-10.19h19.62v-9.26q0-10.57-6.32-16.83t-18.64-6.27q-10.79,0-18.08,5.45t-7.3,13.18h-20.27q0-8.82,6.26-17a42.9,42.9,0,0,1,17-13,57.15,57.15,0,0,1,23.59-4.8q20.37,0,31.93,10.19t12,28.06v54.26q0,16.24,4.14,25.83V331Zm-33.45-15.36a35.41,35.41,0,0,0,18-4.91A29.71,29.71,0,0,0,1271.2,298V273.8h-15.8q-37.05,0-37.05,21.68,0,9.48,6.32,14.82T1240.9,315.64Z"
    />
    <path
      className="cls-14"
      d="M1317.48,181.83a12,12,0,0,1,3-8.28q3-3.37,8.88-3.38t8.93,3.38a11.89,11.89,0,0,1,3,8.28,11.46,11.46,0,0,1-3,8.17q-3,3.27-8.93,3.27t-8.88-3.27A11.6,11.6,0,0,1,1317.48,181.83ZM1339.27,331h-20.15V213.1h20.15Z"
    />
    <path
      className="cls-14"
      d="M1385,213.1l.66,14.82q13.5-17,35.3-17,37.38,0,37.7,42.17V331h-20.16V253q-.1-12.75-5.82-18.85t-17.82-6.1a29.15,29.15,0,0,0-17.22,5.23A35.58,35.58,0,0,0,1386.1,247v84H1366V213.1Z"
    />
    <path
      className="cls-14"
      d="M1583.3,273.36q0,27-12.42,43.42t-33.34,16.4q-22.35,0-34.54-15.8L1502,331h-18.53V163.64h20.16v62.43q12.19-15.15,33.67-15.15T1571,227.16q12.26,16.23,12.26,44.46Zm-20.16-2.29q0-20.6-8-31.82T1532.31,228q-19.95,0-28.66,18.53v51q9.25,18.52,28.87,18.52,14.49,0,22.56-11.22T1563.14,271.07Z"
    />
    <path
      className="cls-14"
      d="M1597.77,271a69.64,69.64,0,0,1,6.81-31.16,50.89,50.89,0,0,1,19-21.36,51.62,51.62,0,0,1,27.73-7.52q24.07,0,39,16.68t14.88,44.34v1.42q0,17.22-6.6,30.89a50,50,0,0,1-18.85,21.3q-12.26,7.63-28.16,7.63-24,0-38.85-16.67t-14.87-44.13Zm20.27,2.4q0,19.62,9.1,31.49t24.35,11.88q15.36,0,24.4-12t9-33.73q0-19.4-9.21-31.43a29.26,29.26,0,0,0-24.46-12,29,29,0,0,0-24.08,11.87Q1618,251.24,1618,273.36Z"
    />
    <path
      className="cls-14"
      d="M1829.18,303.21l22.66-90.11H1872L1837.68,331h-16.35l-28.65-89.35L1764.78,331h-16.34l-34.21-117.9h20l23.21,88.26,27.46-88.26h16.24Z"
    />
  </StyledSvg>
);

IconRainbow.defaultProps = {
  color: 'currentColor',
  viewBox: '0 0 2000 500'
};

export default IconRainbow;

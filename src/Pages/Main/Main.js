import React, { memo, useState } from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import { Doughnut } from 'react-chartjs-2';
import AlarmIcon from '../../Images/Group 218.png';
import UserIcon from '../../Images/Group 165.png';
import Google from '../../Images/SocialIcons/image 40.png';
import Youtube from '../../Images/SocialIcons/image 41.png';
import FaceBook from '../../Images/SocialIcons/image 42.png';
import Instagram from '../../Images/SocialIcons/Group 687.png';
import './Main.scss';

const Main = memo(() => {
  const [googlePercentage, setGooglePercentage] = useState(0);
  const [youtubePercentage, setYoutubePercentage] = useState(0);
  const [faceBookPercentage, setFaceBookPercentage] = useState(0);
  const [instagramPercentage, setInstagramPercentage] = useState(0);

  const [googlePrice, setGooglePrice] = useState(0);
  const [youtubePrice, setYoutubePrice] = useState(0);
  const [faceBookPrice, setFaceBookPrice] = useState(0);
  const [instagramPrice, setInstagramPrice] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    if (name === 'totalPrice') {
      setTotalPrice(value);
    }
  };

  const clickHandler = (e) => {
    const { name } = e.target;
    if (name === 'google minus') {
      if (googlePercentage <= 0) {
        setGooglePercentage(0);
      } else {
        setGooglePercentage(googlePercentage - 1);
        setGooglePrice((totalPrice * googlePercentage) / 100);
      }
    } else if (name === 'google plus') {
      setGooglePercentage(googlePercentage + 1);
      setGooglePrice((totalPrice * googlePercentage) / 100);
    }

    if (name === 'youtube minus') {
      if (youtubePercentage <= 0) {
        setYoutubePercentage(0);
      } else {
        setYoutubePercentage(youtubePercentage - 1);
        setYoutubePrice((totalPrice * youtubePercentage) / 100);
      }
    } else if (name === 'youtube plus') {
      setYoutubePercentage(youtubePercentage + 1);
      setYoutubePrice((totalPrice * youtubePercentage) / 100);
    }

    if (name === 'faceBook minus') {
      if (faceBookPercentage <= 0) {
        setFaceBookPercentage(0);
      } else {
        setFaceBookPercentage(faceBookPercentage - 1);
        setFaceBookPrice((totalPrice * faceBookPercentage) / 100);
      }
    } else if (name === 'faceBook plus') {
      setFaceBookPercentage(faceBookPercentage + 1);
      setFaceBookPrice((totalPrice * faceBookPercentage) / 100);
    }

    if (name === 'instagram minus') {
      if (instagramPercentage <= 0) {
        setInstagramPercentage(0);
      } else {
        setInstagramPercentage(instagramPercentage - 1);
        setInstagramPrice((totalPrice * instagramPercentage) / 100);
      }
    } else if (name === 'instagram plus') {
      setInstagramPercentage(instagramPercentage + 1);
      setInstagramPrice((totalPrice * instagramPercentage) / 100);
    }
  };

  const userIcon = [
    { id: 1, icon: AlarmIcon, alt: 'alarm' },
    { id: 2, icon: UserIcon, alt: 'user' },
  ];

  const userItems = userIcon.map((item) => {
    return <img key={item.id} src={item.icon} alt={item.alt} />;
  });

  const socialIcon = [
    {
      id: 1,
      icon: Google,
      alt: 'google',
      name: 'google',
      title: 'Google Ads',
      price: (totalPrice * googlePercentage) / 100,
      percentage: googlePercentage,
    },
    {
      id: 2,
      icon: Youtube,
      alt: 'youtube',
      name: 'youtube',
      title: 'Youtube',
      price: (totalPrice * youtubePercentage) / 100,
      percentage: youtubePercentage,
    },
    {
      id: 3,
      icon: FaceBook,
      alt: 'faceBook',
      name: 'faceBook',
      title: 'FaceBook Ads',
      price: (totalPrice * faceBookPercentage) / 100,
      percentage: faceBookPercentage,
    },
    {
      id: 4,
      icon: Instagram,
      alt: 'instagram',
      name: 'instagram',
      title: 'Instagram',
      price: (totalPrice * instagramPercentage) / 100,
      percentage: instagramPercentage,
    },
  ];

  const socialItems = socialIcon.map((item) => {
    return (
      <div key={item.id} className="contents">
        <img src={item.icon} alt={item.alt} />
        <span className="title">{item.title}</span>
        <span className="price">￦ {item.price}</span>
        <div className="button-container" name={item.name}>
          <button name={`${item.name} minus`} onClick={clickHandler}>
            -
          </button>
          <span className="percentage">{item.percentage} %</span>
          <button name={`${item.name} plus`} onClick={clickHandler}>
            +
          </button>
        </div>
      </div>
    );
  });

  const state = {
    labels: ['Google', 'Youtube', 'FaceBook', 'Instagram'],
    datasets: [
      {
        label: 'Budget Camapaign',
        backgroundColor: ['rgba(52,168,83,1)', 'rgba(255,0,0,1)', 'rgba(72,103,170,1)', 'rgba(230,98,89,1)'],
        hoverBackgroundColor: ['rgba(52,168,83,0.5)', 'rgba(255,0,0,0.5)', 'rgba(72,103,170,0.5)', 'rgba(230,98,89,0.5)'],
        data: [googlePercentage, youtubePercentage, faceBookPercentage, instagramPercentage],
      },
    ],
  };

  return (
    <>
      <div className="main-container">
        <Navigation />
        <div className="main-inner">
          <div className="user-state-container">{userItems}</div>
          <div className="main-middle-container">
            <div className="main-middle-inner">
              <div className="main-title">
                <span>
                  Edit <strong>camapign budget</strong>
                </span>
                <span>Edit your camapaign budget</span>
              </div>
              <div className="main-content">
                <div className="main-content-inner">
                  <div className="sub-title">
                    <span>Budget</span>
                    <span>Camapaign1</span>
                  </div>
                  <div className="input-field">
                    <span>
                      ￦
                      <input name="totalPrice" onChange={inputHandler} placeholder="값을 입력하세요" required />
                    </span>
                  </div>
                  <div className="main-view-container">
                    <div className="main-view-inner">{socialItems}</div>
                    <div className="circle-progress-bar-container">
                      <Doughnut
                        data={state}
                        width={350}
                        height={400}
                        options={{
                          title: {
                            display: true,
                            fontSize: 30,
                          },
                          legend: {
                            display: true,
                            position: 'right',
                          },
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="next-button">Next</button>
          </div>
        </div>
      </div>
    </>
  );
});

export default Main;

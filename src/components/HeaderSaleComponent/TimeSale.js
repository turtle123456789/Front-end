import React, { useState, useEffect } from 'react';
import { TimeSale } from './style';
import { addHours, differenceInSeconds, startOfDay } from 'date-fns';

const SaleTimer = () => {
  const [endTime, setEndTime] = useState(calculateEndTime());
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(endTime));

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const newTimeRemaining = calculateTimeRemaining(endTime);
      setTimeRemaining(newTimeRemaining);

      if (newTimeRemaining <= 0) {
        clearInterval(countdownInterval);
        setEndTime(calculateEndTime()); // Bắt đầu tính thời gian cho lần tiếp theo
      }
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, [endTime]);

  function calculateEndTime() {
    const now = new Date();
    const todayFivePM = startOfDay(now); // Lúc 00:00:00
    todayFivePM.setHours(17, 10, 0); // Lúc 5 giờ chiều

    if (now >= todayFivePM) {
      // Nếu hiện tại đã qua 5 giờ chiều, thì tính thời gian còn lại trong 2 giờ
      const saleEndTime = addHours(now, 2);
      return saleEndTime;
    } else {
      // Nếu hiện tại chưa đến 5 giờ chiều, thì thời gian kết thúc là 0
      return now;
    }
  }

  function calculateTimeRemaining(endTime) {
    const now = new Date();
    const secondsRemaining = differenceInSeconds(endTime, now);

    return Math.max(0, secondsRemaining); // Đảm bảo thời gian còn lại không âm
  }

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return (
      <div>
        <TimeSale>{hours.toString().padStart(2, '0')}</TimeSale>
        :
        <TimeSale>{minutes.toString().padStart(2, '0')}</TimeSale>
        :
        <TimeSale>{seconds.toString().padStart(2, '0')}</TimeSale>
      </div>
    );
  };

  return (
    <div>
      {formatTime(timeRemaining)}
    </div>
  );
};

export default SaleTimer;

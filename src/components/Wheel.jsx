/*
STELEAD FROM: https://www.npmjs.com/package/react-wheel-of-prizes
Import of this module does not work, so I copied the code from the module and pasted it here

CHANGELOG:
- Removed console.log(navigator)
- Reduced height from 800 to 500
- Reduced width in function of size*3
- Added display flex to container #wheel
- Added margin-right to canvas on mobile (<= 375)
- Added sound effect with playbackRate (can decrease to < 1)


A questo punto mi conveniva scriverlo da zero, piuttosto che adattarlo, ma vabbè
*/

import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';
import tone1 from '../audio/spin_tone1.mp3';
import tone2 from '../audio/spin_tone2.mp3';

var WheelComponent = function WheelComponent(_ref) {
  const [playbackRate, setPlaybackRate] = useState(3);
  const [playToneA] = useSound(tone1, {
    volume: 0.5,
    playbackRate
  });
  const [playToneB] = useSound(tone2, {
    volume: 0.5,
    playbackRate
  });

  var segments = _ref.segments,
      segColors = _ref.segColors,
      winningSegment = _ref.winningSegment,
      onFinished = _ref.onFinished,
      _ref$primaryColor = _ref.primaryColor,
      primaryColor = _ref$primaryColor === void 0 ? 'black' : _ref$primaryColor,
      _ref$contrastColor = _ref.contrastColor,
      contrastColor = _ref$contrastColor === void 0 ? 'white' : _ref$contrastColor,
      _ref$buttonText = _ref.buttonText,
      buttonText = _ref$buttonText === void 0 ? 'Spin' : _ref$buttonText,
      _ref$isOnlyOnce = _ref.isOnlyOnce,
      isOnlyOnce = _ref$isOnlyOnce === void 0 ? true : _ref$isOnlyOnce,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 290 : _ref$size,
      _ref$upDuration = _ref.upDuration,
      upDuration = _ref$upDuration === void 0 ? 100 : _ref$upDuration,
      _ref$downDuration = _ref.downDuration,
      downDuration = _ref$downDuration === void 0 ? 1000 : _ref$downDuration,
      _ref$fontFamily = _ref.fontFamily,
      fontFamily = _ref$fontFamily === void 0 ? 'proxima-nova' : _ref$fontFamily;

  var currentSegment = "";
  const [current, setCurrent] = useState('');
  var isStarted = false;

  var _useState = useState(false),
      isFinished = _useState[0],
      setFinished = _useState[1];

  var timerHandle = 0;
  var timerDelay = segments.length;
  var angleCurrent = 0;
  var angleDelta = 0;
  var canvasContext = null;
  var maxSpeed = Math.PI / ("" + segments.length);
  var upTime = segments.length * upDuration;
  var downTime = segments.length * downDuration;
  var spinStart = 0;
  var frames = 0;
  var centerX = 300;
  var centerY = 230;


  useEffect(function () {
    wheelInit();
    setTimeout(function () {
      window.scrollTo(0, 1);
    }, 0);
  }, []);

  var wheelInit = function wheelInit() {
    initCanvas();
    wheelDraw();
  };

  var initCanvas = function initCanvas() {
    var canvas = document.getElementById('canvas');

    if (navigator.userAgent.indexOf('MSIE') !== -1) {
      canvas = document.createElement('canvas');
      canvas.setAttribute('width', 1000);
      canvas.setAttribute('height', 600);
      canvas.setAttribute('id', 'canvas');
      document.getElementById('wheel').appendChild(canvas);
    }

    canvas.addEventListener('click', spin, false);
    canvasContext = canvas.getContext('2d');
  };

  var spin = function spin() {
    isStarted = true;

    if (timerHandle === 0) {
      spinStart = new Date().getTime();
      maxSpeed = Math.PI / segments.length;
      frames = 0;
      timerHandle = setInterval(onTimerTick, timerDelay);
    }
  };
  
const [counter, setCounter] = useState(0);
useEffect(() => {
  setCounter(counter + 1)
  setPlaybackRate(3 - counter / 100)
    if (counter % 2 === 0) {
      playToneA();
    } else {
      playToneB();
    }
  }, [current]);


  var onTimerTick = function onTimerTick() {
    frames++;
    draw();
    var duration = new Date().getTime() - spinStart;
    var progress = 0;
    var finished = false;

    if (duration < upTime) {
      progress = duration / upTime;
      angleDelta = maxSpeed * Math.sin(progress * Math.PI / 2);
    } else {
      if (winningSegment) {
        if (currentSegment === winningSegment && frames > segments.length) {
          progress = duration / upTime;
          angleDelta = maxSpeed * Math.sin(progress * Math.PI / 2 + Math.PI / 2);
          progress = 1;
        } else {
          progress = duration / downTime;
          angleDelta = maxSpeed * Math.sin(progress * Math.PI / 2 + Math.PI / 2);
        }
      } else {
        progress = duration / downTime;
        angleDelta = maxSpeed * Math.sin(progress * Math.PI / 2 + Math.PI / 2);
      }

      if (progress >= 1) finished = true;
    }

    angleCurrent += angleDelta;

    while (angleCurrent >= Math.PI * 2) {
      angleCurrent -= Math.PI * 2;
    }

    if (finished) {
      setFinished(true);
      onFinished(currentSegment);
      clearInterval(timerHandle);
      timerHandle = 0;
      angleDelta = 0;
    }
  };

  var wheelDraw = function wheelDraw() {
    clear();
    drawWheel();
    drawNeedle();
  };

  var draw = function draw() {
    clear();
    drawWheel();
    drawNeedle();
  };

  var drawSegment = function drawSegment(key, lastAngle, angle) {
    var ctx = canvasContext;
    var value = segments[key];
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, size, lastAngle, angle, false);
    ctx.lineTo(centerX, centerY);
    ctx.closePath();
    ctx.fillStyle = segColors[key];
    ctx.fill();
    ctx.stroke();
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate((lastAngle + angle) / 2);
    ctx.fillStyle = contrastColor;
    ctx.font = 'bold 1em ' + fontFamily;
    ctx.fillText(value.substr(0, 21), size / 2 + 20, 0);
    ctx.restore();
  };

  var drawWheel = function drawWheel() {
    var ctx = canvasContext;
    var lastAngle = angleCurrent;
    var len = segments.length;
    var PI2 = Math.PI * 2;
    ctx.lineWidth = 1;
    ctx.strokeStyle = primaryColor;
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.font = '1em ' + fontFamily;

    for (var i = 1; i <= len; i++) {
      var angle = PI2 * (i / len) + angleCurrent;
      drawSegment(i - 1, lastAngle, angle);
      lastAngle = angle;
    }

    ctx.beginPath();
    ctx.arc(centerX, centerY, 50, 0, PI2, false);
    ctx.closePath();
    ctx.fillStyle = primaryColor;
    ctx.lineWidth = 10;
    ctx.strokeStyle = contrastColor;
    ctx.fill();
    ctx.font = 'bold 1em ' + fontFamily;
    ctx.fillStyle = contrastColor;
    ctx.textAlign = 'center';
    ctx.fillText(buttonText, centerX, centerY + 3);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(centerX, centerY, size, 0, PI2, false);
    ctx.closePath();
    ctx.lineWidth = 10;
    ctx.strokeStyle = primaryColor;
    ctx.stroke();
  };

  var drawNeedle = function drawNeedle() {
    var ctx = canvasContext;
    ctx.lineWidth = 1;
    ctx.strokeStyle = contrastColor;
    ctx.fileStyle = contrastColor;
    ctx.beginPath();
    ctx.moveTo(centerX + 20, centerY - 50);
    ctx.lineTo(centerX - 20, centerY - 50);
    ctx.lineTo(centerX, centerY - 70);
    ctx.closePath();
    ctx.fill();
    var change = angleCurrent + Math.PI / 2;
    var i = segments.length - Math.floor(change / (Math.PI * 2) * segments.length) - 1;
    if (i < 0) i = i + segments.length;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = primaryColor;
    ctx.font = 'bold 1.5em ' + fontFamily;
    currentSegment = segments[i];
    setCurrent(segments[i]);
    isStarted && ctx.fillText(currentSegment, centerX + 10, centerY + size + 50);
  };

  var clear = function clear() {
    var ctx = canvasContext;
    ctx.clearRect(0, 0, 1000, 800);
  };

  return /*#__PURE__*/React.createElement("div", {
    id: "wheel",
    style: {
      display: "flex",
      justifyContent: "center",
    }
  }, /*#__PURE__*/React.createElement("canvas", {
    id: "canvas",
    width: size*3,
    height: "550",
    style: {
      marginRight: window.innerWidth <= 375 ? "120px" : "0px",
      pointerEvents: isFinished && isOnlyOnce ? 'none' : 'auto'
    }
  }));
};

export default WheelComponent;
//# sourceMappingURL=index.modern.js.map

import { increaseValue, getValue } from './storage.js';

const DELAY = 1000;

const tick = async () => {
  const video = getVideoId();

  if (video) {
    const playButton = document.querySelector('.ytp-play-button.ytp-button');

    if (playButton && ~playButton.getAttribute('title').indexOf('Pause')) {
      await increaseValue(video, DELAY);
    }

    renderWatchCount(Math.ceil(await getValue(video) / getVideoLength() - 3/4));
  }
};

const getVideoId = () => {
  return new URLSearchParams(window.location.search).get('v');
};

const getVideoLength = () => {
  return parseInt(document.querySelector('.ytp-progress-bar').getAttribute('aria-valuemax')) * 1000;
};

const renderWatchCount = count => {
  let watchCount = document.querySelector('.watch-count');

  if (!watchCount) {
    watchCount = document.createElement('div');
    watchCount.className = 'watch-count';
    watchCount.style.position = 'absolute';
    watchCount.style.right = '0';
    watchCount.style.top = '0';
    watchCount.style.fontSize = '1.4rem';
    watchCount.style.color = 'var(--yt-spec-text-secondary)';
  
    const title = document.querySelector('.title.style-scope.ytd-video-primary-info-renderer');
    
    if (title) {
      title.style.position = 'relative';
      title.appendChild(watchCount);
    }
  }

  watchCount.innerHTML = `Watched ${count} time${count == 1 ? '' : 's'}`;
}

export const main = async () => {
  tick();
  setInterval(tick, DELAY);
};
import { increaseValue, getValue } from './storage.js';

const DELAY = 1000;

const tick = async () => {
  setTimeout(tick, DELAY);

  const video = getVideoId();

  if (video) {
    const videos = document.querySelectorAll('video.html5-main-video');

    if ([...videos].filter(video => !video.paused).length) {
      await increaseValue(video, DELAY);
    }

    renderWatchCount(Math.ceil(await getValue(video) / getVideoLength() - 3/4));
};

const getVideoId = () => {
  return new URLSearchParams(window.location.search).get('v');
};

const getVideoLength = () => {
  return Math.max(...[...document.querySelectorAll('.ytp-progress-bar')].map(a => parseInt(a.getAttribute('aria-valuemax') || 0))) * 1000;
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
};
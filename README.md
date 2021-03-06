# youtube-video-watch-count

Chrome extension that counts the number of times you watch a youtube video and
stores it onto your local storage.

![The watch count gui changes](/images/watch-count-gui.png)

## Installing

1. Download this repository with

```
git clone https://github.com/PureGero/youtube-video-watch-count.git
```

2. In Google Chrome, open `chrome://extensions/`.

3. At the top-left of the page, click on `Load unpacked`.

4. Select the youtube-video-watch-count folder.

5. The extension is now loaded, refresh youtube to see the watch counter.

## Developing

For those wishing to implement their own storage system, replace the
code in `src/storage.js` with your own code.
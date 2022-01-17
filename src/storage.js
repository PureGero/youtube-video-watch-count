export const increaseValue = async (key, increment) => {
  const value = await getValue(key);

  await setValue(key, value + increment);
};

export const getValue = key => {
  return new Promise(resolve => {
    chrome.storage.local.get([key], result => {
      resolve(result[key] || 0);
    });
  });
};

export const setValue = (key, value) => {
  return new Promise(resolve => {
    chrome.storage.local.set({[key]: value}, () => {
      resolve();
    });
  });
};
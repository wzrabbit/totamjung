(() => {
    'use strict';

    chrome.storage.sync.get('settings', (loaded) => {
        loaded = loaded['settings'];
        console.log('loading')
        console.log(loaded);
        if (loaded[3] === 1) return;
        const observer = new MutationObserver(() => {
            if (document.querySelector('html')) {
                document.querySelector('html').setAttribute('theme', 'totamjung');
                observer.disconnect();
            }
        });
        observer.observe(document.documentElement, { childList: true });
    });
})();

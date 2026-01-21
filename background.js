chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ total: 0 }, () => {
        console.log("Budget initialized to 0.");
    });
});

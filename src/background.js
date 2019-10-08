const url = 'https://benedu.co.kr/Views/01_Students/00StdHome.aspx'
chrome.commands.onCommand.addListener(function (command) {
  if (command == "open-benedu-tab")
    chrome.tabs.query({ url },
    function (tabs) {
      if (tabs.length)
        chrome.tabs.update(tabs[0].id, { active: true });
      else chrome.tabs.create({ url });
    });
});
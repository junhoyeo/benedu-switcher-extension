chrome.commands.onCommand.addListener(function (cmd) {
  if (cmd === "open-benedu-tab")
    chrome.tabs.query({
      url: 'https://benedu.co.kr/*'
    },
    function (tabs) {
      if (tabs.length)
        chrome.tabs.update(tabs[0].id, { active: true })
      else chrome.tabs.create({
        url: 'https://www.benedu.co.kr/StudentHome'
      })
    })
})

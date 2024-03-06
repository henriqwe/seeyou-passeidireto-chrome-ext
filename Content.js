setInterval(() => {
  // Elements with to remove
  const paywalls = document.getElementsByClassName("paywall") || [];
  const overlays = document.getElementsByClassName("overlay") || [];
  const contentsLimitation =
    document.getElementsByClassName("mv-content-limitation-fake-page") || [];
  const bannerSelector =
    document.querySelectorAll('[class*="BannerSelector_banner"]') || [];
  const viewsAnswerCTA =
    document.querySelectorAll('[class*="ViewAnswerCTA"]') || [];

  for (const element of paywalls) {
    element.remove();
  }
  for (const element of overlays) {
    element.remove();
  }
  for (const element of contentsLimitation) {
    element.remove();
  }
  for (const element of bannerSelector) {
    element.remove();
  }
  for (const element of viewsAnswerCTA) {
    element.remove();
  }

  // Elements with blur to edit style
  const blurContents = document.getElementsByClassName("t") || [];
  const pdParagraphsMd =
    document.querySelectorAll('[class*="pd-paragraph-md"]') || [];
  const blockeds = document.getElementsByClassName("blocked") || [];

  for (const element of blurContents) {
    element.style.cssText += "filter: blur(0px) !important;";
  }
  for (const element of pdParagraphsMd) {
    element.style.cssText += "filter: blur(0px) !important;";
  }
  for (const element of blockeds) {
    element.style.cssText = "filter: blur(0px) !important;";
  }
}, 3000);

setInterval(() => {
  const paywalls = document.getElementsByClassName("paywall") || [];
  const overlays = document.getElementsByClassName("overlay") || [];
  const contentLimitation =
    document.getElementsByClassName("mv-content-limitation-fake-page") || [];
  const blurContents = document.getElementsByClassName("t") || [];
  const BannerSelector =
    document.querySelectorAll('[class*="BannerSelector_banner"]') || [];

  for (const element of paywalls) {
    element.remove();
  }
  for (const element of overlays) {
    element.remove();
  }
  for (const element of contentLimitation) {
    element.remove();
  }
  for (const element of BannerSelector) {
    element.remove();
  }
  for (const element of blurContents) {
    element.style.cssText += "filter: blur(0px) !important;";
  }
}, 3000);

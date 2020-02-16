export function isIE() {
  const bw = window.navigator.userAgent;
  const compare = (s: string) => bw.indexOf(s) >= 0;
  const ie11 = (() => "ActiveXObject" in window)();
  return compare("MSIE") || ie11;
}

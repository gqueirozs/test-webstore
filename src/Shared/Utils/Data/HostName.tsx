export const HostName = () => {
  const newurl = new URL(window.location.href);

  if (!['80', '443'].includes(newurl.port)) {
      return newurl.protocol + "//" + newurl.hostname + ":" + newurl.port;
  } else {
      return newurl.protocol + "//" + newurl.hostname;
  }
}
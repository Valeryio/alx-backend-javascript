export default function loadBalancer(chinaDownload, USDownload) {
  const result = [];
  result.push(Promise.any([chinaDownload, USDownload]));
  return (result);
}

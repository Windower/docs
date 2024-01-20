fetch('https://api.github.com/repos/GloriousEggroll/wine-ge-custom/releases/latest', {headers: {accept:'application/vnd.github+json'}}).then(
  res => {
    if (res.ok) return res.json();
    throw new Error();
  }).then(
  res => {
    var match = res.name.match(/(.*) Released$/i);
    document.getElementById("latestrelease").innerHTML = match && match.at(1) || res.name;
  }
).catch(err => {
  document.getElementById("latestrelease").innerHTML = 'Unknown';
});

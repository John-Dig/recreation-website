window.onload = function() {
  document.querySelector("h1").innerText = "Website Recreation Practice";
  const createP = document.createElement("p");
  createP.append("The HTML of this webpage was created with JavaScript.");
  const h1El = document.querySelector('h1');
  h1El.after(createP);

  const imgEl = document.createElement("img");
  imgEl.setAttribute('src', 'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900');
  imgEl.setAttribute("alt","This is an image of a Multicolored Tanger bird from birdsoftheworld.org")
  imgEl.setAttribute("style", "width:50%")
  createP.after(imgEl);
  const createH12 = document.createElement("h1");
  imgEl.after(createH12);
  createH12.append("Facts about the Multicolored Tanger");

  const createUl = document.createElement("ul");
  createH12.after(createUl);
  const createLi = document.createElement("li");
  createLi.append('It is endemic to the mountains of Colombia.');
  createUl.append(createLi);
  const createLi2 = document.createElement("li");
  createLi2.append('It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.');
  createUl.append(createLi2);

const createh2 = document.createElement("h2");
createh2.append('Sources');
createUl.after(createh2);
const createA = document.createElement("a");
createh2.after(createA);
document.querySelector("a").setAttribute("href", "https://en.wikipedia.org/wiki/Multicoloured_tanager");
document.querySelector("a").innerText = "Wikipedia"









}
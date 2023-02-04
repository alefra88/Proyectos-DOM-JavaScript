// export default function getGeolocation(id) {
//     const $id = d.getElementById(id),
//         options = {
//             enableHighAccuracy: true,
//             timeout: 5000,
//             maximumAge: 0,
//         };
//     const success = (position) => {
//         console.log(position);
//     };
//     const error = (err) => {
//         $id.innerHTML = `<p><mark>Error ${err.code}:${err.message}</mark></p>`;
//         console.log(`Error ${err.code}: ${err.message}`);
//     };
//     n.geolocation.getCurrentPosition(success, error, options);
// }
const d = document,
nGeo = navigator.geolocation;

const getPosition = (id, actionButton)=> {
  const $div = d.getElementById(id),
  newUl = d.createElement('ul'),
  linkGMaps = d.createElement('a');
  d.addEventListener('click', e=> {
    if(e.target.matches(actionButton)) {
      nGeo.getCurrentPosition((position)=>{
         const pos = [
          d.createTextNode(`Latitud: ${position.coords.latitude}`),
          d.createTextNode(`Longitud: ${position.coords.longitude}`),
          d.createTextNode(`Precisión: ${Math.floor(position.coords.accuracy)} metros`),
         ];
         console.log(pos);
         pos.forEach((el)=>{
          let newLi = d.createElement('li');
          newLi.appendChild(el);
          newUl.appendChild(newLi);
         })
         newUl.classList.add('ulSection_9');
         $div.appendChild(newUl);
         linkGMaps.textContent = 'Abrir en Google Maps';
         linkGMaps.setAttribute('href', `https://www.google.com/maps/search/${position.coords.latitude},${position.coords.longitude}`);
         linkGMaps.setAttribute('target', '_blank');
         $div.appendChild(linkGMaps);
        //  d.querySelector(actionButton).disabled = true;
         d.querySelector(actionButton).remove();
        // console.log(position.coords.latitude);
        // console.log(position.coords.longitude);
        // console.log(position.coords.accuracy);
      })
    }
  })
}

export default getPosition;

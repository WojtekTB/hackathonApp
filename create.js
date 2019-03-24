
function createEvent2() {
    axios.post('http://10.232.43.132:3000/event')
    .then((res) => {
      console.log(res.data);
      alert(res.data);
    })
    .catch((err) => {
      console.error(err);
    });

  return false;
}

async function getEvent(eid) {
  try {
    const res = await axios.get(`http://10.232.43.132:3000/event/${eid}`);

    return res;
  } catch (err) {
    console.error(err);
  }

  return false;
}

async function checkInToEvent(eid, name, shirtColor, skinColor) {
  try {
    const res = await axios.post(`http://10.232.43.132:3000/event/${eid}/checkin`, {
      name: name,
      shirtColor: shirtColor,
      skinColor: skinColor
    });

    return res.data;
  } catch (err) {
    console.error(err);
  }

  return false;
}

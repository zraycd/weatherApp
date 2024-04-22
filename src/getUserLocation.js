async function getUserIp() {
  try {
    const getData = await fetch("https://api.ipify.org?format=json", {
      mode: "cors",
    });
    const data = await getData.json();
    return data.ip;
  } catch (error) {
    return "error";
  }
}
export default getUserIp;

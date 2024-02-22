const { default: axios } = require("axios");

// fetch("http://10.191.1.90:8881/api/v1/accounts/30", {
//   "headers": {
//     "accept": "application/json, text/plain, */*",
//     "content-type": "application/json"
//   },
//   "referrer": "",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": "{\"fullName\":\"HundaGulumaSobokssa\",\"surname\":\"HundaGulumaSobokssa\",\"motherName\":\"HundaGulumaSobokssa\",\"sex\":\"MALE\",\"email\":\"hundaguluma@gmail.com\",\"phone\":\"+251930586155\"}",
//   "method": "PUT"
// }).then(data => console.log('data', data)).catch(err => console.log('err',err));

axios.post("https://10.191.1.90:8881/api/v1/accounts/30", 
JSON.parse("{\"fullName\":\"HundaGulumaSobokssa\",\"surname\":\"HundaGulumaSobokssa\",\"motherName\":\"HundaGulumaSobokssa\",\"sex\":\"MALE\",\"email\":\"hundaguluma@gmail.com\",\"phone\":\"+251930586155\"}"),
).then(data => console.log('d', data)).catch(err => console.log('err', err))
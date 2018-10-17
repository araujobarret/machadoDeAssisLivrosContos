const axios = require('axios')

axios({
  method: "post",
  url: 'https://api.contai.vc/login',
  data: JSON.stringify({ email: 'tiamatpontal@gmail.com', password: '123456' }),
  headers: {
    "Content-Type": "application/json"
  },
  validateStatus: function (status) {
    return status >= 200 && status <= 422;
  }
}).then((res) => {
  console.log(res)
})
.catch((e) => {
  console.log('ERROR', e)
})

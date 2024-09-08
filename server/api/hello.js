export default defineEventHandler(async(event) => {

  // handle query params
  //const { name } = getQuery(event);

  // handle post data
  //const { age } = await readBody(event);

  // return {
  //   message: `Hello ${name}, you are ${age} years old.`
  // };

  // api call with private key : currency api
  const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_UolshsL16Jy3p9IOMBjDW8F54zoF0mV2pJhxspa7')

  return data
})

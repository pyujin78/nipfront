// const URL='http://nip s1.net:348 15'
// const URL='http://3.35. 117.87:34 815'
const URL = 'https://nftinfinity.world:34825'

const API = {
  API_MAX: URL + `/queries/max`, // /:tablename/:fieldname
  API_TXS: URL + '/transactions', // /:txhash
  API_TICKERS: URL + '/tickers',
  API_USERINFO: `${URL}/users/info`,
  API_TOGGLE_FAVORITE: URL + '/favorites/toggle',
  API_LOGIN: URL + '/users/login',
  API_EMAIL_REQUEST: URL + '/signup/email/request',
  API_SIGNUP: URL + '/signup/signup',
  API_QUERY_REFERER: URL + '/queries/singlerow', // /:tablename/:fieldname/:fieldval
  API_QUERY_USERADDRESS: URL + '/queries/singlerow',
  API_QUERY_SINGLEROW: URL + '/queries/singlerow',
  API_PREMIUMITEMS: URL + '/queries/rows',
  API_COMMONITEMS: URL + '/queries/rows',
  API_ITEMDETAIL: URL + '/items/item', // /:itemid
  API_EMAIL_VERIFY: `${URL}/signup/email/auth`,
  API_RECEIVABLES: `${URL}/queries/receivables/username`,
  API_DELINQUENCY: `${URL}/queries/delinquencies/username`,
  API_ITEMBALANCES: `${URL}/queries/itembalances/username`,
  API_GETUSER: `${URL}/user/info`,
  API_GETTIME: `${URL}/queries/singlerow/settings/key_/BALLOT_NEXT_ROUND_START`,
  API_TYPESTR: `${URL}/queries/logactions/typestr/PAY`,
  API_LOGSTAKES: `${URL}/queries/singlerow/logstakes/username`,
  API_REFERER: `${URL}/queries/rows/users/referer`,
}

export { API }

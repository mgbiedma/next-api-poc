import axios from "axios";
const URL = "https://hipsum.co/api/";


module.exports.getRandomString = async (req, res) =>  {

  const client = axios.create({
    baseURL: URL,
    timeout: 10000
  });
  const response = await client.get('', {params: {
    type: 'hipster-centric',
    sentences: 3
  }});

  return response.data;
}
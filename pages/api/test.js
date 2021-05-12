// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import loremAPI from "../../services/loremAPI.service"

export default async (req, res) =>  {

  const randomString = await loremAPI.getRandomString();
  res.status(200).send(randomString);
}
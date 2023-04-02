import { uploadPNG } from '../../../common/ipfs';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  try {
    const b64data = req.body;
    const cid = await uploadPNG(b64data);
    res.status(200).json({ cid });
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
};

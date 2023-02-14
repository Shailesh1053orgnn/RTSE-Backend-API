import jwt from 'jsonwebtoken';
const auth = async (req, res)=>{
    try{
      const token = req.cookies.jwt;
      const verifyUser = jwt.verify(token, process.env.SECRET_KEY);
      console.log(verifyUser);
    } catch(err) {
    res.status(401).send(err);
    }
}
export default auth;
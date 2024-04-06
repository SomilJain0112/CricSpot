import jwt from "jsonwebtoken"
async function verifyJwt(token) {
  const payload = jwt.verify(token, "your_secret_key");
  return payload;
}

const auth = async (req, res, next) => {
  try {
    console.log(req.headers.authorization.replace("Bearer ", ""));
    const token = req.headers.authorization.replace("Bearer ", "");
    console.log("this is " + token);
    if (!token) {
      return res.status(401).json({ success: false, message: `Token Missing` });
    }

    try {
      const decode = await verifyJwt(token);
      req.user = decode;
      next();
    } catch (error) {
      return res
        .status(401)
        .json({ success: false, message: "Token is invalid" });
    }
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: `Something Went Wrong While Validating the Token`,
    });
  }
};

export { auth };

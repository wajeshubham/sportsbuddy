import jwt from "jsonwebtoken";
import { createError } from "./error.js";
import User from "../models/user.js";

export const verifyToken = async(req, res, next,cb) => {
  // console.log("logintoken",token)
  // const token = req.cookies.access_token;
  const token = req.headers.authorization.split(" ")[1];

  // console.log("token from veri",token)
  if (!token) {
    return next(createError(401, "you are not authenticated"));
  }
  if(token.length<500){
  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, "token is invalid"));
    req.user = user;
    cb(user);
    console.log("token user", req.user);
    console.log("verify tokken resonse",cb(user));
  })}else{
   const decodedData = jwt.decode(token);
   console.log("ddata",decodedData)
    const googleId = decodedData?.sub.toString();
    const user = await User.findOne({ googleId });
    req.user = user;
    cb(user);
    console.log("token user", req.user);
    console.log("verify tokken resonse",cb(user));
  }
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, (user) => {
    if (user.id === req.user.id && !user.isAdmin) {
      next();
    } else {
     return next(createError(403, "you are not authenticated user"));
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, (user) => {
    if (user.isAdmin==true) {
      next();
    } else {
    return next(createError(403, "you are not authenticated"));
    }
  });
};

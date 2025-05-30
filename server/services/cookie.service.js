

/* internal import */

const remove = require("../utils/remove.util");

/* add new blog */

exports.getCookie = async (req, res) => {
  let result = null;
  const keys = Object.keys(req.cookies);
  const values = Object.values(req.cookies);  
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (key == req.params.key) {
      result = values[i]
    }
  }
  if (result) {
    res.status(200).send(result)
  } else {
    res.status(200).send("not Found Cookie")
  }
};

/* get all blogs */
exports.setCookie = async (req, res) => {
  res.cookie(req.params.key, req.params.value , { secure:true , httpOnly: true } );
  res.status(200).send("Cookie seted")
};

/* get a blog */
exports.deleteCookie = async (req, res) => {
  res.clearCookie(req.params.key);
  res.status(200).send("Cookie Deleted")
};
module.exports = async (req, res) => {
  const query = req.query //{ query } = req
  res.end(`Hello ${query.name}, you just parsed the request body!`)
}

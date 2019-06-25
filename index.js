module.exports = (req) => {
  if (!req.headers) return null
  if (!req.headers.authorization) return null
  const as = req.headers.authorization.split(' ')
  if (as.length !== 2) return null
  if (as[0].toLowerCase() !== 'bearer') return null
  if (as[1].length < 20) return null
  return as[1]
}

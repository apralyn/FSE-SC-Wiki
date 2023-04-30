exports.home = (req, res) => {
  let body = req.body;
  let stat = res.status.outputData;
  console.log("testing", body, stat);
};

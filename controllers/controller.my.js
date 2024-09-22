const origin = (req, res) => {
  // res.send(`<h1 style="color: green;">Hello Gfg!</h1>`);
  const {name} = req.body;
  res.send(`Welcome ${name}`);
  res.type('text/plain');
  res.status(200);
  // to expire session
  // if (req.session.views) {

  //   // Increment the number of views.
  //   req.session.views++

  //   // Session will expires after 1 min
  //   // of in activity
  //   res.write('<p> Session expires after 1 min of in activity: ' +(req.session.cookie.expires) + '</p>')
  //   res.end()
  // } else {
  //     req.session.views = 1
  //     res.end(' New session is started')
  // }

  // throw new Error('Something went wrong!'); to create err
};

module.exports = {origin}
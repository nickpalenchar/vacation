var mongoose = require('mongoose');

var requestSchema = new mongoose.Schema({
  date: [Date],
  type: String, //Conflict, Vacation
  status: String, //Pending, Approved, Denied
  requester: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
  info: String,
  reason: String
});

mongoose.model('Request', requestSchema);

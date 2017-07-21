var mongoose = require('mongoose');

////////==HELPERS===//////

function capitalize (val) {
  if (typeof val !== 'string') val = '';
  return val.charAt(0).toUpperCase() + val.substring(1).toLowerCase();
}

////////===SREPLEH==//////


var Fodu_model = mongoose.model('Fodu',{
	name: {
		type: String,
		required: true,
		minlength: 3,
		trim: true,
		set: capitalize
	},
	no: {
		type: Number,
		default: 0
	},
	element: {
		type: String,
		default: null
	}
});

module.exports = {Fodu_model, capitalize};

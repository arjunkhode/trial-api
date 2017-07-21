const expect = require('expect');
const supertest = require('supertest');

const {app} = require('./../server');
const {Fodu_model} = require('./../models/fodu');

describe('POST /fodos',() => {
	it('should create a new Fodu_model', (done) => {
		var name = "lavani gaa";

		request(app).post('/fodos').send({name}).expect(200)
		.expect((res)=>{
			expect(res.body.name).toBe(name);
		})
		.end((err, res) => {
			if(err) done(err);
			Fodu_model.find().then((f) => {
				expect(f.length).toBe(1);
				expect(f[0].name).toBe(name);
			done();
			}).catch((e)=> done(e));
		});
	});
});
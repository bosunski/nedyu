import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';
import { mockMeetupDetails, mockQuestionDetails, mockRSVPDetails, mockVoteDetails, mockUserDetails } from './mocks/mockData'

//config chai to use expect
chai.use(chaiHttp);
const { expect } = chai;

//deconstructure all mock data
const { validMeetup, emptyFieldMeetup, createdMeetup } = mockMeetupDetails;
const { validQuestion } = mockQuestionDetails;
const { validRsvp } = mockRSVPDetails;
const { validVoter } = mockVoteDetails;
const { adminUser, normalUser } = mockUserDetails;

describe('Questioner Server', () => {
	describe('GET /', () => {

    it('should respond with status code 200', (done) => {
      chai.request(app)
      .get('/api/v1')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.eql('Hi there! Welcome to our Questioner api!');
        done();
      });
    });

    it('/api/v1/meetups should respond with status code 200 and retrieve all meetups', (done) => {
      chai.request(app)
      .get('/api/v1/meetups')
      .set('Accept', 'application/json')
      .end((err, res) => {
      	if (err) return done(err);
        expect(res.status).to.equal(200);
        expect(res.body.message).to.eql('Successfully retrieved all meetups');
        done();
      });
    });

    it('/api/v1/meetups/<meetup-id> should respond with status code 200 and retrieve specific meetup', (done) => {
      chai.request(app)
      .get('/api/v1/meetup/2')
      .set('Accept', 'application/json')
      .end((err, res) => {
      	if (err) return done(err);
        expect(res.status).to.equal(200);
        expect(res.body.message).to.eql('Successfully retrieved specific meetup');
        done();
      });
    });

    it('/api/v1/meetups/upcoming should respond with status code 20 and retrieve all upcoming meetup', (done) => {
      chai.request(app)
      .get('/api/v1/meetups/upcoming')
      .set('Accept', 'application/json')
      .end((err, res) => {
      	if (err) return done(err);
        expect(res.status).to.equal(200);
        expect(res.body.message).to.eql('Successfully retrieved all upcoming meetups');
        done();
      });
    });

  });

	describe('POST /', () => {
	
    it('/api/v1/meetups should respond with status code 201 and create a meetup', (done) => {
      chai.request(app)
      .post('/api/v1/meetups')
      .set('Accept', 'application/json')
      .send(validMeetup)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).to.equal(201);
        expect(res.body.message).to.eql('Meetup successfully created');
        done();
      });
    });

    it('/api/v1/questions should respond with status code 201 and ask a question', (done) => {
      chai.request(app)
      .post('/api/v1/questions')
      .set('Accept', 'application/json')
      .send(validQuestion)
      .end((err, res) => {
      	if (err) return done(err);
        expect(res.status).to.equal(201);
        expect(res.body.message).to.eql('Question asked successfully');
        done();
      });
    });

    it('/api/v1/meetups/<meetup-id>/rsvps should respond with status code 200 and rsvp for an upcoming meetup', (done) => {
      chai.request(app)
      .post('/api/v1/meetups/1/rsvps')
      .set('Accept', 'application/json')
      .send(validRsvp)
      .end((err, res) => {
      	if (err) return done(err);
        expect(res.status).to.equal(201);
        expect(res.body.message).to.eql('Rsvp meetup successful');
        done();
      });
    });

  });

  describe('PATCH /', () => {
	
    it('/api/v1/question/<question-id>/upvote should respond with status code 200 and upvote a question', (done) => {
      chai.request(app)
      .patch('/api/v1/questions/1/upvote')
      .set('Accept', 'application/json')
      .send(validVoter)
      .end((err, res) => {
      	if (err) return done(err);
        expect(res.status).to.equal(200);
        expect(res.body.message).to.eql('Upvote successful');
        done();
      });
    });

    it('/api/v1/question/<question-id>/downvote should respond with status code 200 and downvote a question', (done) => {
      chai.request(app)
      .patch('/api/v1/questions/2/downvote')
      .set('Accept', 'application/json')
      .send(validVoter)
      .end((err, res) => {
      	if (err) return done(err);
        expect(res.status).to.equal(200);
        expect(res.body.message).to.eql('Downvote successful');
        done();
      });
    });

  });
});
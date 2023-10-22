const chai = require("chai");
const expect = chai.expect;
const request = require("supertest");

describe("CSV Upload API", () => {
  it("should upload CSV file and return a success message", (done) => {
    request(app)
      .post("/upload")
      .attach("csvFile", "test.csv") // Replace 'test.csv' with your test file
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.have.property("message", "Data upload successful");
        done();
      });
  });

  it("should return an error if no file is provided", (done) => {
    request(app)
      .post("/upload")
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.have.property("error", "No file provided");
        done();
      });
  });

  it("should return an error for invalid CSV data", (done) => {
    // Simulate sending an invalid CSV file
    request(app)
      .post("/upload")
      .attach("csvFile", "invalid.csv") // Replace 'invalid.csv' with your test file
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.have.property(
          "error",
          "Validation failed for data"
        );
        done();
      });
  });

  // Add more test cases as needed
});

// Close the server after tests
after((done) => {
  server.close(done);
});

function Services() {
  return (
    <section className="container py-5">
      <div className="row align-items-center mb-5">
        <div className="col-md-6 text-center">
          <img src="/images/service1.png" alt="service" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2 className="text-primary fw-bold">Web & Mobile App Development</h2>
          <p>
            Your web and mobile Apps are pieces of the puzzle to grow your
            business...
          </p>
          <button className="btn btn-warning">Learn More</button>
        </div>
      </div>
      <div className="row align-items-center flex-md-row-reverse">
        <div className="col-md-6 text-center">
          <img src="/images/service2.png" alt="service" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2 className="text-primary fw-bold">Digital Strategy Consulting</h2>
          <p>
            Your digital strategy should complement the overall marketing
            strategy...
          </p>
          <button className="btn btn-warning">Learn More</button>
        </div>
      </div>
    </section>
  );
}
export default Services;

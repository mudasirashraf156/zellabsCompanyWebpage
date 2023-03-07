import Card from "./Card";
function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">SERVICES</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card title="Web Development" img="card1.png" text="We are a leading Website Development Company. We offer Custom Websites at Affordable Price.  " />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="E-Commerce Services" img="card2.png" text=", Our e commerce services and ecommerce solutions enable you to sell directly to your consumers around the world through your brand store and marketplaces.
." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Cyber Security" img="card3.png" text="We offer impactful mobile app development services to bring your project to market on every device and platform." />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;

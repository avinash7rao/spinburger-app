export default function Login() {
  return (
    <div id="contact" className="tm-page-content">
      <div className="tm-black-bg tm-contact-form-container tm-align-right">
        <form id="contact-form" onsubmit="this.reset(); return false;">
          <div className="tm-form-group">
            <input
              type="text"
              name="name"
              className="tm-form-control"
              placeholder="Name"
              required=""
            />
          </div>
          <div className="tm-form-group">
            <input
              type="email"
              name="email"
              className="tm-form-control"
              placeholder="Email"
              id="email"
              required=""
            />
          </div>
          <div className="tm-form-group tm-mb-30">
            <textarea
              rows="6"
              name="Address"
              className="tm-form-control"
              placeholder="Address"
              required=""
            ></textarea>
          </div>
          <div>
            <button type="submit" className="tm-btn-primary tm-align-right">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

(function(d, s, id) {
  if (d.getElementById(id)) {
      if (window.__TOMORROW__) {
          window.__TOMORROW__.renderWidget();
      }
      return;
  }
  const fjs = d.getElementsByTagName(s)[0];
  const js = d.createElement(s);
  js.id = id;
  js.src = "https://www.tomorrow.io/v1/widget/sdk/sdk.bundle.min.js";

  fjs.parentNode.insertBefore(js, fjs);
})(document, 'script', 'tomorrow-sdk');

const Clima = () => {
  return (
    <>
      <div className="tomorrow"
           data-location-id="021074"
           data-language="ES"
           data-unit-system="METRIC"
           data-skin="light"
           data-widget-type="upcoming"
        >
          <a
            href="https://www.tomorrow.io/weather-api/"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            <img
              alt="Powered by the Tomorrow.io Weather API"
              src="https://weather-website-client.tomorrow.io/img/powered-by.svg"
              width="250"
              height="18"
            />
          </a>
        </div>
    </>
  )
}

export default Clima
import axios from "axios";

const apiUrl = process.env.REACT_APP_STRAPI_URL;
// const apiUrl = "localhost";

export const fetchWhatWeOffer = (setState, setLoader) => {
  setLoader(true);
  axios
    .get(`${apiUrl}api/what-we-offers`)
    .then((about) => {
      // console.log("stapi", about);
      // Convert data to the desired format
      const convertedData = about.data.data.map(item => ({
        title: item.attributes.title,
        description: item.attributes.description,
        icons: item.attributes.icon, // Assuming this is the icon property
      }));
      setState(convertedData);
    })
    .catch((err) => {
      console.log("sta");
      console.log(err);
    })
    .finally(() => {
      setLoader(false);
    });
};

export const fetchStats = (setState, setLoader) => {
  setLoader(true);
  axios
    .get(`${apiUrl}api/stats`)
    .then((about) => {

      // Sort the data based on the 'id' field in ascending order
      const sortedData = about.data.data.sort((a, b) => a.id - b.id);
      // console.log("stapi", about);
      // Convert data to the desired format
      const convertedData = sortedData.map(item => ({
        title: item.attributes.title,
        value: item.attributes.value,
        icon: item.attributes.icon, // Assuming this is the icon property
      }));
      setState(convertedData);
    })
    .catch((err) => {
      console.log("sta");
      console.log(err);
    })
    .finally(() => {
      setLoader(false);
    });
};

export const fetchSlides = (setState, setLoader) => {
  setLoader(true);
  axios
    .get(`${apiUrl}api/slides?populate=url&populate=buttons`)
    .then((about) => {

      // Sort the data based on the 'id' field in ascending order
      const sortedData = about.data.data.sort((a, b) => a.id - b.id);
      console.log("stapi", about);
      // Convert data to the desired format
      const convertedData = sortedData.map(item => ({
        topTitle: item.attributes.topTitle,
        bottomTitle: item.attributes.bottomTitle,
        description: item.attributes.description,
        buttons:
          item.attributes.buttons.data.map((button) => {
            return button.id
          })
        , // Assuming this is the icon property
        url: item.attributes.url.data[0].attributes.url, // Assuming this is the icon property
      }));
      setState(convertedData);
    })
    .catch((err) => {
      console.log("sta");
      console.log(err);
    })
    .finally(() => {
      setLoader(false);
    });
};

export const fetchHowToWork = (setState, setLoader) => {
  setLoader(true);
  axios
    .get(`${apiUrl}api/how-it-works`)
    .then((about) => {
      // console.log("stapi", about);

      // Sort the data based on the 'id' field in ascending order
      const sortedData = about.data.data.sort((a, b) => a.id - b.id);

      // Convert data to the desired format
      const convertedData = sortedData.map(item => ({
        title: item.attributes.title,
        description: item.attributes.description,
      }));
      setState(convertedData);
    })
    .catch((err) => {
      console.log("sta");
      console.log(err);
    })
    .finally(() => {
      setLoader(false);
    });
};

export const fetchApply = (setState, setLoader) => {
  setLoader(true);
  axios
    .get(`${apiUrl}api/apply-component?populate=background`)
    .then((about) => {
      // console.log("stapi", about);

      // Sort the data based on the 'id' field in ascending order
      const sortedData = about.data.data;

      // Convert data to the desired format
      const convertedData = {
        title: sortedData.attributes.title,
        description: sortedData.attributes.description,
        button: sortedData.attributes.button,
        background: sortedData.attributes.background.data.attributes.url,
      }
      setState(convertedData);
    })
    .catch((err) => {
      console.log("sta");
      console.log(err);
    })
    .finally(() => {
      setLoader(false);
    });
};

// const url = "http://10.1.151.64:1337/api/home-page?
// populate[hero][populate][header][populate]=*&
// populate[hero][populate][slide][populate]=*&
// populate[hero][populate][background][populate]=true&
// populate[home][populate][stat][populate]=*&
// populate[home][populate][content][populate]=*&
// populate[home][populate][header][populate]=*&
// populate[home][populate][offers][populate]=*"
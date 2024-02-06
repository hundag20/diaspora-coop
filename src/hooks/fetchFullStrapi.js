import axios from "axios";
const apiUrl = process.env.REACT_APP_STRAPI_URL;

const baseUrl = `${apiUrl}api/home-page?`;
function buildDynamicURL(params, parentKey = '') {

  return Object.entries(params)
    .map(([key, value]) => {
      const nestedKey = parentKey ? `${parentKey}[${key}]` : key;

      if (typeof value === 'object') {
        return buildDynamicURL(value, nestedKey);
      } else {
        return `populate${nestedKey}=${value}`;
      }
    })
    .join('&');
}

// Example object
const params = {
  hero: {
    header: {
      populate: '*',
    },
    slide: {
      populate: '*',
    },
  },
  apply: {
    background: {
      populate: '*',
    },
  },
  stat: {
    populate: '*',
  },
  HowItWork: {
    populate: '*',
  },
  offer: {
    populate: '*',
  },
};

export const fetchHomePage = (setState, setLoader) => {
  // setLoader(true);
  // console.log('fetching');
  const dynamicURL = baseUrl + buildDynamicURL(params);
  // console.log(dynamicURL);
  axios
    .get(`${apiUrl}api/home-page?populate[hero][populate][header][populate]=*&populate[hero][populate][slide][populate]=*&populate[apply][populate]=*&populate[stat][populate]=*&populate[HowItWork][populate]=*&populate[offer][populate]=*`)
    .then((res) => {
      // console.log("res:", res);
      // Convert data to the desired format
      // const convertedData = about.data.data.map(item => ({
      //   title: item.attributes.title,
      //   description: item.attributes.description,
      //   icons: item.attributes.icon, // Assuming this is the icon property
      // }));
      setState(res.data.data.attributes);
    })
    .catch((err) => {
      // console.log("sta");
      console.log(err);
    })
    .finally(() => {
      // setLoader(false);
    });
};


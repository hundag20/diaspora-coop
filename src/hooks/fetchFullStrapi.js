function buildUrl(data) {
  const buildQueryString = (params, parentKey = null) => {
    return Object.keys(params).map(key => {
      const value = params[key];
      const newKey = parentKey ? `${parentKey}[${key}]` : key;

      if (value && typeof value === 'object') {
        return buildQueryString(value, newKey);
      } else {
        return `${encodeURIComponent(newKey)}=${encodeURIComponent(value)}`;
      }
    }).join('&');
  };

  return `http://10.1.151.64:1337/api/home-page?${buildQueryString(data)}`;
}

const urlObject = {
  populate: {
    hero: {
      populate: {
        header: {
          populate: "*"
        },
        slide: {
          populate: "*"
        }
      }
    },
    home: {
      populate: {
        background: {
          populate: true
        },
        stat: {
          populate: "*"
        },
        content: {
          populate: "*"
        },
        header: {
          populate: "*"
        },
        offers: {
          populate: "*"
        }
      }
    }
  }
};

const finalUrl = buildUrl(urlObject);
console.log(finalUrl);

const secret = require("./secret.json");
const rp = require("request-promise");
exports.read = async (lim) => {
    let requestdata = {
        method: "GET",
        uri:
            "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
        qs: {
            start: "1",
            limit: lim,
            convert: "USD",
        },
        headers: {
            "X-CMC_PRO_API_KEY": secret[0].secret,
        },
        json: true,
        gzip: true,
    };

    try {
        return await rp(requestdata);
    } catch (err) {
        console.log("API call error:", err.message);
    }
};

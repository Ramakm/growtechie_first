// inputDataObj 
// {
//   label: "Drop your Twitter handle",
//   name: "twitter",
//   optional: true,
// },

function extractInitData(inputDataObj, field) {
    let initData = {};

    for (let data of inputDataObj) {
        initData = {
            ...initData,
            [data[field]]: ""
        }
    }

    return initData;
}

export default extractInitData;
function extractInitData(array, field) {
    let initData = {};

    for (let data of array) {
        initData = {
            ...initData,
            [data[field]]: ""
        }
    }

    return initData;
}

export default extractInitData;
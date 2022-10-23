export const findFalsyValuesInObject = (obj: {}) => {
    const values = Object.values(obj);
    const fields = values.length
    return values.filter(value => value).length !== fields;
}


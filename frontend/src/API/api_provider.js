// State API
const STATE_LIST = '/api/v1/states';

// Tax APIs
const TAX_LIST = '/api/v1/taxes';
const TAX_CREATE = '/api/v1/taxes';

const getStateList = async () => {
  const response = await fetch(STATE_LIST);
  return response.json();
};

const getTaxList = async () => {
  const response = await fetch(TAX_LIST);
  return response.json();
};

const syncTaxList = async (taxesArray) => {
    const postObject = { taxes: taxesArray}
    const response = await fetch(TAX_CREATE, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postObject)
    });
    return response.json();
};

export { getStateList, syncTaxList };

export default getTaxList;

export function generateSixDigitNumber() {
    const min = 100000;
    const max = 999999;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

export function findMaxID(objectsArray) {
    let maxID = -1;

    for (const obj of objectsArray) {
        if (obj.hasOwnProperty('id') && typeof obj.id === 'number') {
            maxID = Math.max(maxID, obj.id);
        }
    }

    return maxID;
}
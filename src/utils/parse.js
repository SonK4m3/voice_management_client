export const parseJWT = (token) => {
    if (!token) return null;

    const [, payloadBase64] = token.split('.');
    if (!payloadBase64) return null;

    try {
        const payloadJSON = atob(payloadBase64);
        const payload = JSON.parse(payloadJSON);
        return payload;
    } catch (error) {
        console.error('Error parsing JWT:', error);
        return null;
    }
};
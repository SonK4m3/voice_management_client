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

export const isTokenExpired = (payload) => {
    if (!payload) {
        return true;
    }

    const currentTime = Math.floor(Date.now() / 1000);
    const { exp } = payload;

    return currentTime > exp;
}
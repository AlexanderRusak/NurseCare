


export const getCoordinates = (uri?: string): [number, number] | [] => {
    if (!uri) {
        return []
    }
    const [longitude, latitude] = uri.split('&spn')[0].split('=')[1].split('%2C');
    return [+longitude, +latitude];
}
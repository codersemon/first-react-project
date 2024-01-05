// nav active menu item handler 
export const checkURL = (path, url) => {
    const pathArr = path.split('/');
    return pathArr.includes(url);
}
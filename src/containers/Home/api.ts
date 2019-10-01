export const searchTitle = (title: string) =>
  new Promise((resolve, reject) => {
    const opts = {
      method: 'POST',
    };
    fetch(`http://localhost:8080/api/ayliens/title?text=${title}`, opts)
      .then((res: any) => res.json())
      .then((res: any) => {
        resolve(res);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
export const searchEntityTitle = (title: string) =>
  new Promise((resolve, reject) => {
    const opts = {
      method: 'POST',
    };
    fetch(`http://localhost:8080/api/ayliens/entityTitle?text=${title}`, opts)
      .then((res: any) => res.json())
      .then((res: any) => {
        resolve(res);
      })
      .catch((err: any) => {
        reject(err);
      });
  });

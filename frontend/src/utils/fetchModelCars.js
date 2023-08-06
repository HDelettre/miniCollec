// async function fetchAllModels() {
//   const reponse = await fetch(`${process.env.REACT_APP_API}/modelcars`, {
//     method: "GET",
//   });

//   const reponseJSON = await reponse.json();
//   return reponseJSON;
// }

// export fetchAllModels();

export const fetchAllModels = () => {
  const reponse = fetch(`${process.env.REACT_APP_API}/modelcars`, {
        method: "GET",
      });
    
      const reponseJSON = reponse.json();
      return reponseJSON;
}
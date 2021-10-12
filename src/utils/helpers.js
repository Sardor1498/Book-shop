export const arrayToFormData = (data) => {
    let formData = new FormData();
  
    for (let prop in data) {
      if (Array.isArray(data[prop])) {
        for (let index in data[prop]) {
          if (
            !(data[prop][index] instanceof File) &&
            typeof data[prop][index] == "object"
          ) {
            for (let p in data[prop][index]) {
              formData.append(
                prop + "[" + index + "][" + p + "]",
                data[prop][index][p]
              );
            }
          } else formData.append(prop + "[]", data[prop][index]);
        }
      } else {
        formData.append(prop, data[prop]);
      }
    }
    return formData; 
  };
  
  export const getValueLabel = (data, ...request) => {
    return data && data.length ? data.map((item) => {
      return {
        value: item.id ? item.id : item.value ? item.value : "",
        label: item.name ? item.name : item.offer_name ? item.offer_name : "",
        //selected: request.id == item.id || request.id == item.value ? true : false
      };
    }) : null;
  };
  
